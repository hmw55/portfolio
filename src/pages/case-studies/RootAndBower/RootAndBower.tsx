import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import "./RootAndBower.css";

function RootAndBower() {
    return (
        <>
            <Nav />

            <main className="root-bower-case-study">
                <header className="rb-hero">
                    <span className="rb-eyebrow">
                        CASE STUDY
                    </span>

                    <h1>Root &amp; Bower</h1>

                    <p className="rb-hero-tagline">
                        A digital legacy platform built for
                        long-term family stewardship.
                    </p>

                    <p className="rb-hero-description">
                        Root &amp; Bower is a multi-user digital
                        legacy platform built to help families
                        preserve the people, stories,
                        relationships, media, and milestones that
                        make up a life.
                    </p>

                    <a
                        href="https://rootandbower.com"
                        target="_blank"
                        rel="noreferrer"
                        className="rb-live-link"
                    >
                        Visit Live Site
                        <span aria-hidden="true">↗</span>
                    </a>
                </header>

                <section className="rb-project-meta">
                    <div className="rb-meta-item">
                        <span>Role</span>
                        <strong>Full-Stack Engineer</strong>
                    </div>

                    <div className="rb-meta-item">
                        <span>Status</span>
                        <strong>Live</strong>
                    </div>

                    <div className="rb-meta-item">
                        <span>Platform</span>
                        <strong>Next.js + TypeScript</strong>
                    </div>

                    <div className="rb-meta-item">
                        <span>Infrastructure</span>
                        <strong>
                            Supabase + Cloudflare R2
                        </strong>
                    </div>
                </section>

                <section className="rb-section rb-section-narrow">
                    <span className="rb-section-label">
                        OVERVIEW
                    </span>

                    <h2>
                        Preserving more than names and dates.
                    </h2>

                    <p>
                        I designed and engineered Root &amp; Bower
                        as a production platform rather than a
                        portfolio prototype. The application
                        combines privacy-aware family
                        collaboration, granular authorization,
                        multi-format media preservation,
                        permanent storage allocation, and
                        commerce workflows designed around
                        long-term stewardship.
                    </p>

                    <p>
                        A sanctuary acts as the central space for
                        preserving a person's life, bringing
                        together stories, timeline events,
                        photographs, video, audio, keepsakes,
                        relationships, and contributions from
                        family members.
                    </p>
                </section>

                <section className="rb-section rb-section-narrow">
                    <span className="rb-section-label">
                        THE CHALLENGE
                    </span>

                    <h2>
                        Designing for privacy, permanence, and
                        shared ownership.
                    </h2>

                    <p>
                        Digital legacy creates a different set of
                        constraints than a typical content
                        platform. A sanctuary can contain deeply
                        personal information while also needing
                        to support collaboration among family
                        members and, in some cases, public
                        remembrance.
                    </p>

                    <p>
                        Different contributors need different
                        capabilities, individual content can
                        have its own visibility requirements,
                        and preserved media may need to remain
                        available long after the person who
                        originally uploaded it stops actively
                        using the platform.
                    </p>

                    <p>
                        Privacy, authorization, storage, and
                        stewardship therefore could not be
                        treated as secondary features. They had
                        to shape the architecture from the
                        beginning.
                    </p>
                </section>

                <section className="rb-section">
                    <span className="rb-section-label">
                        AUTHORIZATION &amp; PRIVACY
                    </span>

                    <h2>
                        Access control built into the data layer.
                    </h2>

                    <div className="rb-stats">
                        <div className="rb-stat">
                            <strong>31</strong>
                            <span>PostgreSQL tables</span>
                        </div>

                        <div className="rb-stat">
                            <strong>77</strong>
                            <span>
                                Row-level security policies
                            </span>
                        </div>

                        <div className="rb-stat">
                            <strong>6</strong>
                            <span>Membership roles</span>
                        </div>

                        <div className="rb-stat">
                            <strong>3</strong>
                            <span>Visibility levels</span>
                        </div>
                    </div>

                    <div className="rb-section-copy">
                        <p>
                            Root &amp; Bower's PostgreSQL
                            architecture uses row-level security
                            to enforce authorization at the data
                            layer rather than relying exclusively
                            on interface-level restrictions.
                        </p>

                        <p>
                            Sanctuary access combines membership,
                            roles, ownership, invitations, and
                            visibility rules. Feature-specific
                            permissions build on top of those
                            guarantees so managing a sanctuary,
                            editing content, contributing
                            memories, inviting family, and
                            viewing private information do not
                            automatically imply the same level of
                            access.
                        </p>
                    </div>
                </section>

                <section className="rb-section rb-section-narrow">
                    <span className="rb-section-label">
                        MEDIA ARCHITECTURE
                    </span>

                    <h2>
                        Photos, video, audio, and documents
                        require different workflows.
                    </h2>

                    <p>
                        Root &amp; Bower uses Cloudflare R2 and
                        presigned upload flows so media can move
                        directly to object storage without
                        routing large files through the
                        application server.
                    </p>

                    <p>
                        The platform handles photos, video,
                        audio, and documents as distinct
                        preservation workflows with validation,
                        metadata, storage accounting, content
                        relationships, and permission-aware
                        access. Images are processed with Sharp
                        for optimized delivery, while video and
                        audio have their own supporting
                        processing and recovery workflows.
                    </p>

                    <div className="rb-flow">
                        <span>Browser</span>
                        <span aria-hidden="true">→</span>
                        <span>Presigned Upload</span>
                        <span aria-hidden="true">→</span>
                        <span>Cloudflare R2</span>
                        <span aria-hidden="true">→</span>
                        <span>Processing</span>
                        <span aria-hidden="true">→</span>
                        <span>Permission-Aware Delivery</span>
                    </div>
                </section>

                <section className="rb-section rb-section-narrow">
                    <span className="rb-section-label">
                        COMMERCE &amp; FULFILLMENT
                    </span>

                    <h2>
                        Stripe handles payment. Root &amp; Bower
                        owns the business logic.
                    </h2>

                    <p>
                        I separated payment processing from
                        product fulfillment so Stripe remains
                        responsible for securely processing
                        transactions while Root &amp; Bower owns
                        its product catalog, purchase records,
                        storage allocation, and fulfillment
                        behavior.
                    </p>

                    <p>
                        Successful payment and successful
                        fulfillment are tracked independently.
                        Persistent processing states and retry
                        tracking allow the application to recover
                        from interrupted or failed fulfillment
                        instead of assuming that a completed
                        payment means every downstream operation
                        also succeeded.
                    </p>

                    <div className="rb-flow">
                        <span>Product</span>
                        <span aria-hidden="true">→</span>
                        <span>Checkout</span>
                        <span aria-hidden="true">→</span>
                        <span>Payment</span>
                        <span aria-hidden="true">→</span>
                        <span>Verification</span>
                        <span aria-hidden="true">→</span>
                        <span>Fulfillment</span>
                        <span aria-hidden="true">→</span>
                        <span>Purchase History</span>
                    </div>
                </section>

                <section className="rb-section rb-section-narrow">
                    <span className="rb-section-label">
                        STEWARDSHIP
                    </span>

                    <h2>
                        Family history isn't owned by one
                        session or one user.
                    </h2>

                    <p>
                        Root &amp; Bower is designed around
                        collaborative stewardship rather than a
                        single account owning every part of a
                        person's legacy. Membership roles,
                        invitations, family relationships, and
                        sanctuary permissions allow
                        responsibility for preserved content to
                        be shared without giving every
                        participant unrestricted control.
                    </p>

                    <p>
                        This model also allows the platform to
                        support private family spaces and public
                        remembrance using the same underlying
                        sanctuary architecture.
                    </p>
                </section>

                <section className="rb-section">
                    <span className="rb-section-label">
                        ENGINEERING HIGHLIGHTS
                    </span>

                    <h2>Built as a production product.</h2>

                    <div className="rb-tech-grid">
                        <span>Next.js</span>
                        <span>TypeScript</span>
                        <span>PostgreSQL</span>
                        <span>Supabase</span>
                        <span>Cloudflare R2</span>
                        <span>Sharp</span>
                        <span>Stripe</span>
                    </div>
                </section>

                <section className="rb-outcome">
                    <span className="rb-section-label">
                        OUTCOME
                    </span>

                    <h2>
                        A working platform, not a product
                        mockup.
                    </h2>

                    <p>
                        Root &amp; Bower brings together
                        full-stack application development,
                        relational data modeling, granular
                        authorization, object storage, media
                        processing, payment infrastructure, and
                        product design in a single deployed
                        system.
                    </p>

                    <a
                        href="https://rootandbower.com"
                        target="_blank"
                        rel="noreferrer"
                        className="rb-live-link"
                    >
                        Explore Root &amp; Bower
                        <span aria-hidden="true">↗</span>
                    </a>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default RootAndBower;