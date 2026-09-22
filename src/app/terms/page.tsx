const sections = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree, please do not use this site.",
  },
  {
    title: "Use of the Site",
    body: "You agree to use this site only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use of, this site by any third party.",
  },
  {
    title: "Intellectual Property",
    body: "All content on this site, including text, graphics, logos, and images, is the property of Theoraux or its licensors and is protected by applicable intellectual property laws.",
  },
  {
    title: "Limitation of Liability",
    body: "Theoraux is not liable for any damages arising from your use of, or inability to use, this website or its content.",
  },
  {
    title: "Changes to These Terms",
    body: "We may update these Terms of Service from time to time. Continued use of the site after changes are posted constitutes acceptance of the revised terms.",
  },
  {
    title: "Contact Us",
    body: "If you have questions about these Terms of Service, email us at bunquintheodore@gmail.com.",
  },
];

export default function TermsPage() {
  return (
    <section className="bg-white px-4 pt-36 pb-24 text-black dark:bg-black dark:text-white sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
          Legal
        </p>
        <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
          Last updated: September 23, 2026
        </p>

        <div className="mt-14 space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-xl font-semibold tracking-tight">
                {section.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
