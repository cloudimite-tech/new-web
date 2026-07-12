const Terms = () => {
  const lastUpdated = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: {lastUpdated}</p>

        <div className="rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4 mb-10">
          <p className="text-sm text-muted-foreground leading-relaxed">
            This is a starter terms of service intended as a reasonable baseline. It is not legal
            advice and has not been reviewed by a lawyer. Please have this reviewed by a qualified
            professional before relying on it, and replace it with terms specific to any actual
            service agreements or contracts with clients.
          </p>
        </div>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Use of this site</h2>
            <p>
              This website is provided to give you information about Cloudimite's services and a way
              to get in touch with us. By using this site, you agree not to misuse it — for example,
              attempting to disrupt its operation, scrape it at scale, or use it for unlawful purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">No warranty</h2>
            <p>
              This site and its content are provided "as is," without warranties of any kind, express
              or implied. We make reasonable efforts to keep information accurate and up to date, but
              we don't guarantee it's error-free or complete at all times.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Intellectual property</h2>
            <p>
              The content, design, and branding on this site belong to Cloudimite unless otherwise
              noted, and may not be reproduced or reused without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Services and engagements</h2>
            <p>
              Nothing on this site constitutes a binding offer or contract. Any actual project, scope,
              pricing, or engagement with Cloudimite will be governed by a separate written agreement
              signed by both parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Limitation of liability</h2>
            <p>
              To the extent permitted by law, Cloudimite is not liable for any indirect, incidental,
              or consequential damages arising from your use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Changes to these terms</h2>
            <p>
              We may update these terms from time to time. Continued use of the site after changes
              means you accept the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
            <p>
              Questions about these terms can be sent to{" "}
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

export default Terms;
