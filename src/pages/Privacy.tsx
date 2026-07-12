const Privacy = () => {
  const lastUpdated = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: {lastUpdated}</p>

        <div className="rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4 mb-10">
          <p className="text-sm text-muted-foreground leading-relaxed">
            This is a starter privacy policy intended to give visitors a clear, good-faith explanation
            of how Cloudimite handles information. It is not legal advice and has not been reviewed by
            a lawyer. Please have this reviewed by a qualified professional before relying on it,
            especially if you collect data from visitors in the EU, UK, California, or other
            jurisdictions with specific privacy requirements.
          </p>
        </div>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Information we collect</h2>
            <p>
              When you submit our contact form, we collect the information you provide: your name,
              email address, subject, and message. We do not require an account and do not collect
              payment information through this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">How we use it</h2>
            <p>
              We use the information you submit solely to respond to your inquiry and, if relevant,
              to discuss a potential project or engagement with you. We do not sell your information
              or use it for advertising.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Third-party services</h2>
            <p>
              Contact form submissions are processed by Formspree, a third-party form-handling
              service. This site is hosted on Vercel, and may use Vercel Analytics to understand
              aggregate traffic patterns (such as page views), which does not use cookies or track
              individuals across sites. Each of these providers has its own privacy policy governing
              how they handle data on our behalf.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Data retention</h2>
            <p>
              We retain contact form submissions only as long as needed to respond to your inquiry
              and maintain a reasonable business record, unless you ask us to delete it sooner.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Your rights</h2>
            <p>
              You can ask us what information we hold about you, or request that we correct or delete
              it, at any time by emailing{" "}
              <a href="mailto:hello@cloudimite.com" className="text-primary hover:underline">
                hello@cloudimite.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Changes to this policy</h2>
            <p>
              If we materially change how we handle your information, we'll update this page and
              revise the "last updated" date above.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
            <p>
              Questions about this policy can be sent to{" "}
              <a href="mailto:hello@cloudimite.com" className="text-primary hover:underline">
                hello@cloudimite.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
