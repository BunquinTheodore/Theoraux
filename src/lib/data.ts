export const services = [
  {
    id: "web-development",
    title: "Web Development",
    shortDescription:
      "Custom websites and web applications built with modern frameworks for optimal performance.",
    description:
      "We build fast, responsive, and scalable websites and web applications using cutting-edge technologies like React, Next.js, and Node.js. From simple landing pages to complex web platforms, we deliver solutions that drive results.",
    icon: "Globe",
    features: [
      "Responsive design for all devices",
      "SEO-optimized architecture",
      "Modern frameworks (React, Next.js, Vue)",
      "Content management systems",
      "Progressive Web Apps (PWA)",
    ],
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription:
      "Native and cross-platform mobile applications for iOS and Android.",
    description:
      "We create intuitive mobile experiences that your users will love. Whether you need a native iOS/Android app or a cross-platform solution with React Native or Flutter, we've got you covered.",
    icon: "Smartphone",
    features: [
      "iOS and Android development",
      "Cross-platform with React Native/Flutter",
      "Offline-first capabilities",
      "Push notifications",
      "App Store optimization",
    ],
  },
  {
    id: "custom-software",
    title: "Custom Software & Systems",
    shortDescription:
      "Tailored software solutions designed to fit your unique business processes.",
    description:
      "Off-the-shelf software doesn't always cut it. We design and build custom systems — from CRM and ERP solutions to inventory management and workflow tools — engineered specifically for how your business operates.",
    icon: "Code2",
    features: [
      "Business process analysis",
      "Scalable architecture design",
      "Database design & optimization",
      "Cloud-native solutions",
      "Legacy system modernization",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription:
      "Intuitive interfaces and seamless user experiences that delight and convert.",
    description:
      "Great software starts with great design. Our UI/UX team creates wireframes, prototypes, and pixel-perfect interfaces that are both beautiful and functional, ensuring every interaction feels natural.",
    icon: "Palette",
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "Visual design & branding",
      "Usability testing",
      "Design system creation",
    ],
  },
  {
    id: "process-automation",
    title: "Process Automation",
    shortDescription:
      "Automate repetitive tasks to save time, reduce errors, and boost productivity.",
    description:
      "We identify bottlenecks in your workflows and build automation solutions that eliminate manual work. From data entry to report generation, we help your team focus on what matters most.",
    icon: "Zap",
    features: [
      "Workflow analysis & optimization",
      "Robotic Process Automation (RPA)",
      "Custom automation scripts",
      "Integration with existing tools",
      "Real-time monitoring dashboards",
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    shortDescription:
      "Complete online stores with payment processing, inventory, and order management.",
    description:
      "Launch or upgrade your online store with our end-to-end e-commerce solutions. We build custom storefronts with secure payment processing, inventory management, and analytics to help you sell more.",
    icon: "ShoppingCart",
    features: [
      "Custom storefront design",
      "Payment gateway integration",
      "Inventory management",
      "Order tracking & fulfillment",
      "Analytics & reporting",
    ],
  },
  {
    id: "api-integration",
    title: "API Integration",
    shortDescription:
      "Connect your systems and third-party services for seamless data flow.",
    description:
      "We build and integrate APIs that connect your systems, third-party services, and data sources into a unified workflow. Whether it's payment gateways, CRMs, or logistics platforms, we make everything talk to each other.",
    icon: "Plug",
    features: [
      "RESTful & GraphQL APIs",
      "Third-party service integration",
      "Data synchronization",
      "Webhook implementation",
      "API documentation",
    ],
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    shortDescription:
      "Ongoing support, updates, and optimization to keep your systems running smoothly.",
    description:
      "Your software needs care long after launch. We provide ongoing maintenance, security updates, performance optimization, and technical support to ensure your systems stay reliable and up-to-date.",
    icon: "Wrench",
    features: [
      "24/7 monitoring",
      "Security patches & updates",
      "Performance optimization",
      "Bug fixes & improvements",
      "Technical support & consulting",
    ],
  },
];

export const portfolioProjects = [
  {
    id: "shopflow",
    title: "ShopFlow E-Commerce",
    category: "Web",
    tags: ["E-Commerce", "Web Development", "Payment Integration"],
    description:
      "A full-featured e-commerce platform with real-time inventory tracking, multi-gateway payment processing, and a customer dashboard that increased online sales by 45%.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    client: "ShopFlow Retail",
    timeline: "10 weeks",
    techStack: ["Next.js", "Node.js", "Stripe", "PostgreSQL"],
    challenge:
      "ShopFlow Retail was running on an aging platform that couldn't handle their growing catalog. Checkout abandonment was high, inventory data was chronically out of sync across channels, and they could only accept a single payment method.",
    approach:
      "We rebuilt the storefront on a headless architecture with real-time inventory sync across warehouses, added support for multiple payment gateways, and cut checkout down to two steps. A custom admin dashboard gave the team live visibility into orders and stock.",
    results: [
      { metric: "45%", label: "Increase in online sales" },
      { metric: "2", label: "Payment gateways integrated" },
      { metric: "2-step", label: "Streamlined checkout flow" },
    ],
  },
  {
    id: "taskpulse",
    title: "TaskPulse CRM",
    category: "System",
    tags: ["Custom Software", "CRM", "Automation"],
    description:
      "A custom CRM system with automated lead scoring, pipeline management, and AI-powered customer insights that streamlined sales operations for 200+ agents.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    client: "TaskPulse Inc.",
    timeline: "14 weeks",
    techStack: ["React", "Node.js", "PostgreSQL", "OpenAI API"],
    challenge:
      "TaskPulse's 200+ person sales team was tracking leads across spreadsheets and a patchwork of disconnected tools, so leads regularly fell through the cracks with no consistent way to prioritize follow-ups.",
    approach:
      "We built a custom CRM with automated lead scoring, a visual pipeline, and AI-assisted insights that surface which leads are worth calling first — replacing four disconnected tools with one system.",
    results: [
      { metric: "200+", label: "Sales agents onboarded" },
      { metric: "4 → 1", label: "Tools consolidated into one system" },
      { metric: "Real-time", label: "Lead scoring & pipeline visibility" },
    ],
  },
  {
    id: "fintrack",
    title: "FinTrack Mobile Banking",
    category: "Mobile",
    tags: ["Mobile App", "FinTech", "Security"],
    description:
      "A secure mobile banking application with biometric authentication, real-time transactions, and budget tracking tools serving over 50,000 active users.",
    image:
      "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?w=800&h=600&fit=crop",
    client: "FinTrack Financial",
    timeline: "16 weeks",
    techStack: ["React Native", "Node.js", "AWS", "Plaid API"],
    challenge:
      "FinTrack needed a secure, App Store-ready mobile banking app that could scale to tens of thousands of users without compromising on transaction security or speed.",
    approach:
      "We built a cross-platform app with biometric authentication, real-time transaction feeds, and built-in budget tracking, backed by a full security review before launch.",
    results: [
      { metric: "50,000+", label: "Active users" },
      { metric: "99.9%", label: "Uptime since launch" },
      { metric: "<2s", label: "Average transaction time" },
    ],
  },
  {
    id: "stocksense",
    title: "StockSense Inventory",
    category: "System",
    tags: ["Inventory Management", "API Integration", "Automation"],
    description:
      "An intelligent inventory management system with barcode scanning, automated reorder triggers, and multi-warehouse support that reduced stock discrepancies by 90%.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    client: "StockSense Logistics",
    timeline: "12 weeks",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Barcode API"],
    challenge:
      "StockSense was managing multiple warehouses with manual counts and spreadsheets, leading to frequent stock discrepancies and delayed reorders.",
    approach:
      "We built a barcode-driven inventory system with automated reorder triggers and multi-warehouse support, giving the operations team a single source of truth for stock levels.",
    results: [
      { metric: "90%", label: "Reduction in stock discrepancies" },
      { metric: "Multi-site", label: "Warehouse support" },
      { metric: "Automated", label: "Reorder triggers" },
    ],
  },
  {
    id: "greenleaf",
    title: "GreenLeaf Corporate Site",
    category: "Web",
    tags: ["Web Development", "UI/UX Design", "CMS"],
    description:
      "A modern corporate website with a custom CMS, multilingual support, and stunning visual design that boosted lead generation by 60% within three months.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    client: "GreenLeaf Holdings",
    timeline: "8 weeks",
    techStack: ["Next.js", "Sanity CMS", "Tailwind CSS"],
    challenge:
      "GreenLeaf's old site was slow, hard to update, and only available in one language, which limited their reach with international clients.",
    approach:
      "We designed and built a fast, multilingual corporate site on a custom CMS so their team could publish updates without a developer, paired with a redesigned visual identity focused on conversion.",
    results: [
      { metric: "60%", label: "Increase in leads (3 months)" },
      { metric: "Multilingual", label: "CMS-driven content" },
      { metric: "<1s", label: "Page load time" },
    ],
  },
  {
    id: "autoflow",
    title: "AutoFlow Dashboard",
    category: "System",
    tags: ["Process Automation", "Dashboard", "Analytics"],
    description:
      "A real-time automation monitoring dashboard with drag-and-drop workflow builder, smart alerts, and performance analytics that saved 120+ hours per month in manual work.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop",
    client: "AutoFlow Systems",
    timeline: "10 weeks",
    techStack: ["React", "Node.js", "WebSockets", "PostgreSQL"],
    challenge:
      "AutoFlow's operations team was manually monitoring dozens of automated workflows with no central view, spending hours each week chasing down failures.",
    approach:
      "We built a real-time monitoring dashboard with a drag-and-drop workflow builder, smart alerting, and performance analytics so the team can build, watch, and fix workflows from one screen.",
    results: [
      { metric: "120+", label: "Hours saved monthly" },
      { metric: "Real-time", label: "Workflow monitoring" },
      { metric: "Drag-and-drop", label: "Workflow builder" },
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Jennifer Martinez",
    role: "CEO",
    company: "ShopFlow Retail",
    projectId: "shopflow",
    quote:
      "Theoraux built us an e-commerce platform that increased online sales by 45% in just three months.",
    rating: 5,
  },
  {
    id: 2,
    name: "Robert Chen",
    role: "CTO",
    company: "TaskPulse Inc.",
    projectId: "taskpulse",
    quote:
      "The CRM Theoraux built perfectly aligned with our sales workflow — their technical expertise is outstanding.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amanda Reyes",
    role: "Operations Director",
    company: "AutoFlow Systems",
    projectId: "autoflow",
    quote:
      "The automation dashboard Theoraux built eliminated 120+ hours of manual work every month.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Founder",
    company: "GreenLeaf Holdings",
    projectId: "greenleaf",
    quote:
      "Theoraux didn't just build us a site — they built us a lead generation machine.",
    rating: 5,
  },
];

import theodoreImage from "../../assests/17.png";
import danielImage from "../../assests/21.png";
import christianImage from "../../assests/18.png";
import johnImage from "../../assests/19.png";
import paulImage from "../../assests/20.png";

export const teamMembers = [
  {
    id: 2,
    name: "Daniel Villanueva",
    role: "Full Stack Developer",
    bio: "Daniel builds reliable front-end and back-end features, translating business requirements into polished user experiences and dependable application logic.",
    image: danielImage,
    socials: {
      linkedin: "https://www.linkedin.com/company/112286976",
      facebook: "https://www.facebook.com/profile.php?id=61582763437544",
    },
  },
  {
    id: 3,
    name: "Christian Nayre",
    role: "Full Stack Developer",
    bio: "Christian focuses on building smooth, maintainable product flows across the stack, helping turn ideas into stable and high-performing digital solutions.",
    image: christianImage,
    socials: {
      linkedin: "https://www.linkedin.com/company/112286976",
      facebook: "https://www.facebook.com/profile.php?id=61582763437544",
    },
  },
  {
    id: 1,
    name: "Theodore Bunquin",
    role: "CEO & Founder",
    bio: "Theodore leads Theoraux with a clear vision for building practical, scalable software that helps clients streamline operations and grow with confidence.",
    image: theodoreImage,
    socials: {
      linkedin: "https://www.linkedin.com/company/112286976",
      facebook: "https://www.facebook.com/profile.php?id=61582763437544",
    },
  },
  {
    id: 4,
    name: "John Alcaraz",
    role: "DevOps",
    bio: "John manages deployment pipelines, hosting environments, and platform stability to keep projects secure, efficient, and ready to scale.",
    image: johnImage,
    socials: {
      linkedin: "https://www.linkedin.com/company/112286976",
      facebook: "https://www.facebook.com/profile.php?id=61582763437544",
    },
  },
  {
    id: 5,
    name: "Paul Alcaraz",
    role: "Project Manager",
    bio: "Paul keeps delivery moving with clear coordination, structured planning, and consistent communication that helps projects stay aligned from kickoff to launch.",
    image: paulImage,
    socials: {
      linkedin: "https://www.linkedin.com/company/112286976",
      facebook: "https://www.facebook.com/profile.php?id=61582763437544",
    },
  },
];

export const blogPosts = [
  {
    slug: "5-ways-intelligent-automation-can-transform-your-business",
    title: "5 Ways Intelligent Automation Can Transform Your Business",
    excerpt:
      "Discover how intelligent automation is reshaping industries and learn practical strategies to implement it in your own operations for maximum impact.",
    content: `Intelligent automation is no longer a luxury — it's a necessity for businesses looking to stay competitive in 2026 and beyond. Here are five powerful ways it can transform your operations:

## 1. Eliminate Repetitive Tasks

The most immediate benefit of automation is freeing your team from mundane, repetitive work. Data entry, report generation, invoice processing — these tasks consume hours of valuable time that could be spent on strategic initiatives.

By implementing automation tools, businesses typically save 20-40 hours per week in manual labor, allowing employees to focus on creative problem-solving and relationship building.

## 2. Reduce Human Error

Manual processes are inherently prone to mistakes. A single typo in a spreadsheet can cascade into costly errors. Automated systems follow precise rules consistently, reducing error rates by up to 90%.

## 3. Scale Operations Without Scaling Costs

As your business grows, automation allows you to handle increased volume without proportionally increasing headcount. An automated inventory system, for example, can manage 10,000 SKUs just as easily as 100.

## 4. Gain Real-Time Insights

Automated data collection and analysis provide real-time visibility into your operations. Instead of waiting for monthly reports, you can make informed decisions based on up-to-the-minute data.

## 5. Improve Customer Experience

Faster response times, consistent service quality, and personalized interactions — automation powers all of these. Chatbots, automated email sequences, and smart CRM systems ensure your customers always feel valued.

## Getting Started

The key to successful automation is starting small. Identify one bottleneck in your current workflow, automate it, measure the results, and then expand from there. At Theoraux, we specialize in building custom automation solutions tailored to your specific needs.`,
    author: "Marcus Rivera",
    date: "2026-03-01",
    readTime: "5 min read",
    category: "Automation",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
  },
  {
    slug: "future-of-web-development-trends-2026",
    title: "The Future of Web Development: Trends to Watch in 2026",
    excerpt:
      "From AI-powered development tools to edge computing, explore the cutting-edge trends shaping web development in 2026.",
    content: `The web development landscape evolves rapidly, and 2026 is proving to be a landmark year. Here are the trends every business should be watching:

## AI-Assisted Development

AI coding assistants have matured significantly. They now generate entire components, debug complex issues, and optimize performance — making development faster and more accessible than ever.

## Edge Computing Goes Mainstream

With frameworks like Next.js and Cloudflare Workers, more computation is happening at the edge, closer to users. This means faster load times, better performance, and improved user experiences globally.

## Web Components & Micro-Frontends

Large-scale applications are increasingly built with modular micro-frontend architectures, allowing teams to develop, test, and deploy independently while maintaining a cohesive user experience.

## Performance-First Design

Core Web Vitals continue to influence search rankings. Businesses are prioritizing performance optimization, with lazy loading, code splitting, and image optimization becoming standard practices rather than afterthoughts.

## Accessibility as a Standard

Web accessibility is no longer optional. Modern frameworks now include accessibility features by default, and businesses are recognizing that inclusive design benefits everyone.

## What This Means for Your Business

Staying current with web technologies ensures your digital presence remains competitive. Whether you're building a new website or modernizing an existing one, leveraging these trends can give you a significant edge.`,
    author: "Sarah Chen",
    date: "2026-02-15",
    readTime: "4 min read",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
  },
  {
    slug: "why-custom-software-beats-off-the-shelf",
    title: "Why Custom Software Beats Off-the-Shelf Solutions",
    excerpt:
      "Explore the long-term advantages of investing in custom software tailored to your business versus settling for generic off-the-shelf alternatives.",
    content: `When businesses need software, the first instinct is often to find an existing product that "does the job." But here's why custom software is often the better investment:

## Perfect Fit for Your Workflow

Off-the-shelf software forces you to adapt your processes to the tool. Custom software does the opposite — it's built around how your business actually operates, eliminating workarounds and inefficiencies.

## No Unnecessary Features (or Missing Ones)

Generic software comes loaded with features you'll never use while missing the specific functionality you need. Custom development means every feature serves a purpose.

## Scalability on Your Terms

Custom software grows with your business. Need to add a new module, integrate with a new service, or handle 10x the traffic? Your custom solution can be extended without the limitations of third-party platforms.

## Competitive Advantage

Your business is unique — your software should be too. Custom solutions can incorporate proprietary logic, unique workflows, and innovative features that set you apart from competitors using the same off-the-shelf tools.

## Total Cost of Ownership

While custom development has a higher upfront cost, the long-term savings are significant. No recurring license fees, no per-user pricing, and no vendor lock-in. You own the code entirely.

## The Bottom Line

If software is central to how your business operates and competes, custom development is almost always the better choice. It's an investment that pays dividends in efficiency, scalability, and competitive advantage.`,
    author: "Marcus Rivera",
    date: "2026-02-01",
    readTime: "6 min read",
    category: "Software",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
  },
  {
    slug: "designing-for-impact-ui-ux-best-practices",
    title:
      "Designing for Impact: UI/UX Best Practices for Business Applications",
    excerpt:
      "Learn how thoughtful UI/UX design can dramatically improve user adoption, productivity, and satisfaction in business applications.",
    content: `A beautiful interface means nothing if users can't figure out how to use it. Here are proven UI/UX principles for business applications:

## Simplicity is King

The best interfaces feel invisible. Users should accomplish their tasks without thinking about the tool itself. Remove clutter, reduce choices, and guide users through clear visual hierarchy.

## Consistency Builds Confidence

Consistent patterns — button styles, navigation behavior, icon meanings — reduce cognitive load. When users learn one part of your application, they should intuitively understand the rest.

## Design for the 80% Use Case

Focus your primary interface on the tasks users perform most frequently. Advanced features can live in secondary menus or settings panels without cluttering the main workflow.

## Feedback is Essential

Every action should have a visible response. Loading states, success messages, error handling — these micro-interactions tell users their action was received and processed.

## Mobile-First Isn't Optional

Even for business applications, responsive design is critical. Decision-makers check dashboards on their phones. Field workers need mobile access. Design for the smallest screen first.

## Test with Real Users

Assumptions about user behavior are often wrong. Usability testing with actual users reveals problems you'd never find on your own. Even five users can uncover 85% of usability issues.

## The ROI of Good Design

Investing in UI/UX design isn't just about aesthetics — it directly impacts business metrics. Better usability means faster onboarding, fewer support tickets, higher adoption rates, and ultimately, greater ROI on your software investment.`,
    author: "David Kim",
    date: "2026-01-15",
    readTime: "5 min read",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
];

export const stats = [
  { value: "25+", label: "Projects Delivered" },
  { value: "8+", label: "Happy Clients" },
  { value: "3+", label: "Years Experience" },
  { value: "12", label: "Team Members" },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
];
