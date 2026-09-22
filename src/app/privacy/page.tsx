const sections = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly to us, such as your name, email address, and phone number when you fill out our contact form. We also use cookies to remember your preferences and understand how visitors use this site.",
  },
  {
    title: "Cookies",
    body: 'This site uses a small consent cookie to remember whether you accepted or rejected cookies, so we don\'t ask you again on every visit. We do not currently use cookies for advertising or third-party tracking.',
  },
  {
    title: "How We Use Your Information",
    body: "We use the information we collect to respond to inquiries, deliver the services you request, and improve this website. We do not sell your personal information to third parties.",
  },
  {
    title: "Data Retention",
    body: "We retain your information only as long as necessary to fulfil the purposes described in this policy, or as required by law.",
  },
  {
    title: "Your Rights",
    body: "You may request access to, correction of, or deletion of your personal information at any time by contacting us.",
  },
  {
    title: "Contact Us",
    body: "If you have questions about this Privacy Policy, email us at bunquintheodore@gmail.com.",
  },
];

export default function PrivacyPage() {
  return (
    <section className="bg-white px-4 pt-36 pb-24 text-black dark:bg-black dark:text-white sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
          Legal
        </p>
        <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
          Privacy Policy
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
