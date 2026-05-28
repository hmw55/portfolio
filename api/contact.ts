/// <reference types="node" />

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {

    // Only allow POST request
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed",
        });
    }

    try {
        const {
            name,
            email,
            subject, 
            message,
        } = req.body;

        /// basic validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                error: "Missing required fields",
            });
        } 

        await resend.emails.send({
            from: "Portfolio Contact <contact@hollandmwesley.com>",

            to: "holland@hollandmwesley.com",

            subject: `Portfolio Contact: ${subject}`,

            replyTo: email,

            html: `

            <h2>New Portfolio Contact</h2>

            <p>
                <strong>Name:</strong> ${name}
            </p>

            <p>
                <strong>Email:</strong> ${email}
            </p>

            <p>
                <strong>Subject:</strong> ${subject}
            </p>

            <p>
                <strong>Message:</strong>
            </p>

            <p>${message}</p>
            `,
        });

        return res.status(200).json({
            success: true,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: "Failed to send email",
        });
    }
}