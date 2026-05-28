/// <reference types="node" />

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req: any, res: any) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const {
            name,
            email,
            subject,
            message,
            company,
            turnstileToken,
        } = req.body ?? {};

        if (company) {
            return res.status(400).json({ error: "Spam detected" });
        }

        if (!name || !email || !subject || !message || !turnstileToken) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        if (
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof subject !== "string" ||
            typeof message !== "string" ||
            typeof turnstileToken !== "string"
        ) {
            return res.status(400).json({ error: "Invalid field types" });
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({ error: "Invalid email address" });
        }

        if (
            name.length > 100 ||
            email.length > 150 ||
            subject.length > 150 ||
            message.length > 3000
        ) {
            return res.status(400).json({ error: "Message is too long" });
        }

        const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;

        if (!turnstileSecret) {
            return res.status(500).json({ error: "Server configuration error" });
        }

        const verificationResponse = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                    body: new URLSearchParams({
                    secret: turnstileSecret,
                    response: turnstileToken,
                }),
            }
        );

        const verificationData = await verificationResponse.json();

        if (!verificationData.success) {
            return res.status(400).json({ error: "Verification failed" });
        }

        const safeName = escapeHtml(name.trim());
        const safeEmail = escapeHtml(email.trim());
        const safeSubject = escapeHtml(subject.trim());
        const safeMessage = escapeHtml(message.trim()).replaceAll("\n", "<br />");

        await resend.emails.send({
            from: "Portfolio Contact <contact@hollandmwesley.com>",
            to: "holland@hollandmwesley.com",
            subject: `Portfolio Contact: ${safeSubject}`,
            replyTo: safeEmail,
            html: `
                <h2>New Portfolio Contact</h2>

                <p><strong>Name:</strong> ${safeName}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Subject:</strong> ${safeSubject}</p>

                <p><strong>Message:</strong></p>
                <p>${safeMessage}</p>
            `,
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to send email" });
    }
}