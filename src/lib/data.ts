import alertoImage from "../../assests/portfolio/alerto.png";
import kabiImage from "../../assests/portfolio/kabi.jpg";
import corepluusImage from "../../assests/portfolio/corepluus.png";
import shipawImage from "../../assests/portfolio/shipaw.jpg";
import refreshImage from "../../assests/portfolio/refresh.jpg";
import kreativNomadsImage from "../../assests/portfolio/kreativnomads.png";
import tarsiImage from "../../assests/portfolio/tarsi.png";
import shsadcImage from "../../assests/portfolio/shsadc.png";

export const services = [
  {
    id: "web-development",
    title: "Web Development",
    shortDescription:
      "Custom websites and web applications built with modern frameworks for optimal performance.",
    description:
      "We build fast, responsive websites and web applications with React, Next.js, and Node.js — engineered to look right on every device, rank well through SEO-conscious architecture, and stay easy to update through a content management system. Where it makes sense, we ship progressive web apps that hold up even on a flaky connection.",
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
      "We build native iOS and Android apps, or cross-platform with React Native and Flutter when speed to market matters more. Every app is designed offline-first, wired up for push notifications, and prepared for App Store review from day one.",
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
      "Off-the-shelf software doesn't always cut it. We start with a real analysis of how your business operates, then design a scalable, cloud-native architecture and database around it — whether that means building a new system from scratch or modernizing a legacy one that's holding you back.",
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
      "Great software starts with great design. We begin with user research to understand who we're designing for, move through wireframes and prototypes, and land on pixel-perfect interfaces backed by a proper design system — then validate it with real usability testing before it ships.",
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
      "We identify the bottlenecks in your workflows and build automation that removes the manual work around them — from robotic process automation to custom scripts that integrate cleanly with the tools you already use, surfaced through real-time dashboards so you can see what's actually happening.",
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
      "We build custom storefronts with secure payment processing built in from the start, plus the inventory management and order tracking to run fulfillment without spreadsheets. Analytics and reporting are part of the build, not an afterthought, so you can see what's actually selling.",
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
      "We build and integrate RESTful and GraphQL APIs that connect your systems, third-party services, and data sources into one working pipeline — payment gateways, CRMs, logistics platforms, whatever you're running. Webhooks keep data in sync in real time, and everything ships with documentation your team can actually use.",
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
      "Your software needs care long after launch. We provide 24/7 monitoring, security patches, and performance tuning, plus a direct line for bug fixes and technical support — so your systems stay reliable without you having to think about it.",
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
    id: "alerto",
    title: "Alerto Weather & Disaster Monitoring",
    category: "System",
    tags: ["Real-Time Dashboard", "Disaster Monitoring", "Automation"],
    description:
      "A real-time weather and disaster monitoring portal covering all 34 cities and municipalities of Batangas Province, with live alerts, class-suspension tracking, and community incident reports.",
    image: alertoImage,
    liveUrl: "https://alerto-wheat.vercel.app/",
    clientLabel: "Client",
    client: "Batangas Weather Monitoring Community Portal",
    timeline: "8 weeks",
    techStack: ["Next.js", "Vercel", "Weather API", "Tailwind CSS"],
    challenge:
      "Residents across Batangas Province had no single place to check live weather risk, class suspension status, or report local conditions during storms — information was scattered across social media and separate government pages.",
    approach:
      "We built a live monitoring dashboard that pulls real-time weather data for every municipality in the province, surfaces per-area risk levels and rainfall forecasts, tracks class suspensions, and lets community members submit and browse local reports.",
    results: [
      { metric: "34", label: "Cities & municipalities monitored" },
      { metric: "Real-time", label: "Weather, rainfall & wind forecasting" },
      { metric: "Community", label: "Reports & class suspension tracking" },
    ],
  },
  {
    id: "kabi",
    title: "Kabi - Gym Bro",
    category: "Mobile",
    tags: ["Mobile App", "Health & Fitness", "iOS"],
    description:
      "A no-clutter iOS gym log for lifters — routines, active-session set tracking, body and food logging, and performance analytics, ranked #1 in Health & Fitness on the App Store.",
    image: kabiImage,
    liveUrl: "https://apps.apple.com/ph/app/kabi-gym-bro/id6763519763",
    liveLabel: "View on App Store",
    clientLabel: "Credits",
    client: "PocketDevs — Bryl Kezter Lim",
    timeline: "Ongoing",
    techStack: ["iOS", "SwiftUI", "Offline-first local storage"],
    challenge:
      "Lifters wanted a focused workout log without the clutter of social feeds or subscription paywalls — something fast enough to use between sets that still surfaces real training analytics.",
    approach:
      "Built by PocketDevs, led by Bryl Kezter Lim. Members of our team contributed as developers during their internship, helping with features like reusable routines, per-exercise rest timers with haptics, and the active-workout flow — full credit for the app goes to PocketDevs.",
    results: [
      { metric: "#1", label: "Health & Fitness chart ranking" },
      { metric: "4.4★", label: "App Store rating" },
      { metric: "Offline-first", label: "No accounts, no data upload" },
    ],
  },
  {
    id: "corepluus",
    title: "Core+ Manila",
    category: "Web",
    tags: ["Web Development", "UI/UX Design", "Wellness"],
    description:
      "A cinematic pre-launch site for a Rockwell, Makati longevity and wellness destination, built around three connected pillars: Movement, Nourish, and Restore.",
    image: corepluusImage,
    liveUrl: "https://corepluusmanila.com/",
    clientLabel: "Client",
    client: "Core+",
    timeline: "6 weeks",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    challenge:
      "Core+ needed a launch presence that matched the calibre of its physician-led, multi-specialty wellness experience and could start capturing waitlist demand ahead of opening.",
    approach:
      "We designed a dark, editorial-style site with full-bleed interior photography and motion-led scroll reveals to introduce the brand's three pillars, paired with waitlist and hiring capture built in from day one.",
    results: [
      { metric: "3", label: "Connected wellness pillars showcased" },
      { metric: "Rockwell", label: "Makati flagship location" },
      { metric: "Waitlist", label: "Pre-launch demand capture" },
    ],
  },
  {
    id: "shipaw",
    title: "Shipaw Pet Essentials",
    category: "Web",
    tags: ["E-Commerce", "Shopify", "Brand Design"],
    description:
      "A playful Shopify storefront for everyday dog essentials — walk gear, mealtime, play, and rest — organized into shoppable collections with bundles and seasonal promotions.",
    image: shipawImage,
    liveUrl: "https://j1zf0j-6q.myshopify.com/",
    clientLabel: "Client",
    client: "Shipaw",
    timeline: "4 weeks",
    techStack: ["Shopify", "Liquid", "Custom Theme Design"],
    challenge:
      "Shipaw needed an online storefront that felt as warm and playful as the products themselves, organized so pet owners could shop by moment — walks, meals, playtime, rest — rather than digging through a flat catalog.",
    approach:
      "We built a custom Shopify storefront with a bold, high-contrast brand identity, four shoppable collections, bundled offers, and a best-sellers/new-arrivals layout designed to convert first-time visitors.",
    results: [
      { metric: "4", label: "Shoppable product collections" },
      { metric: "Shopify", label: "Custom storefront build" },
      { metric: "Bundles", label: "Bundled offers to lift order value" },
    ],
  },
  {
    id: "refresh",
    title: "Re:Fresh PH",
    category: "Web",
    tags: ["E-Commerce", "Shopify", "DTC Brand"],
    description:
      "A direct-to-consumer Shopify store for portable cooling gadgets — handheld and neck fans, cooling towels, and desk fans — built around a clean, conversion-focused catalog.",
    image: refreshImage,
    liveUrl: "https://re-fresh-ph.myshopify.com/",
    clientLabel: "Client",
    client: "Re:Fresh",
    timeline: "4 weeks",
    techStack: ["Shopify", "Liquid", "Custom Theme Design"],
    challenge:
      "Re:Fresh needed a storefront that could clearly communicate a wide lineup of similar-looking cooling gadgets, build trust with new shoppers, and convert on mobile where most of its traffic arrives.",
    approach:
      "We built a custom Shopify theme with a best-sellers-first layout, benefit-driven product messaging, real customer reviews surfaced on the homepage, and a free-shipping threshold to encourage larger carts.",
    results: [
      { metric: "8+", label: "Cooling products merchandised" },
      { metric: "₱999+", label: "Free shipping threshold" },
      { metric: "5★", label: "Featured customer reviews" },
    ],
  },
  {
    id: "kreativnomads",
    title: "Kreativ Nomads",
    category: "Web",
    tags: ["Web Development", "Agency Site", "Portfolio CMS"],
    description:
      "A marketing site for a Philippine creative agency of freelancers, with a filterable portfolio across six industries and an inquiry pipeline for new business.",
    image: kreativNomadsImage,
    liveUrl: "https://kreative-nomands.vercel.app/",
    clientLabel: "Client",
    client: "Kreativ Nomads",
    timeline: "6 weeks",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    challenge:
      "Kreativ Nomads needed a single site that could showcase work across very different industries — real estate, F&B, insurance, health & fitness — without each category's portfolio drowning out the others.",
    approach:
      "We built a categorized portfolio browser with per-industry project and asset counts, a clear four-step engagement process, and a structured inquiry form to qualify leads before the first call.",
    results: [
      { metric: "50+", label: "Projects delivered" },
      { metric: "20+", label: "Happy clients" },
      { metric: "6+", label: "Industries served" },
    ],
  },
  {
    id: "tarsi",
    title: "Tarsi - Budget Tracker",
    category: "Mobile",
    tags: ["Mobile App", "FinTech", "AI"],
    description:
      "A conversational personal finance app that lets users log expenses, check balances, and track net worth across e-wallets, banks, and cards using plain language.",
    image: tarsiImage,
    liveUrl: "https://tarsi.pocketdevs.ph/",
    clientLabel: "Credits",
    client: "PocketDevs — Bryl Kezter Lim",
    timeline: "Ongoing",
    techStack: ["iOS", "Android", "Natural Language Processing"],
    challenge:
      "Manually categorizing every expense across GCash, bank accounts, and cards is tedious enough that most budgeting apps get abandoned within weeks.",
    approach:
      "Built by PocketDevs, led by Bryl Kezter Lim. Members of our team contributed as developers during their internship, helping with the chat-first logging experience and account-syncing features — full credit for the app goes to PocketDevs.",
    results: [
      { metric: "#1", label: "Finance chart ranking" },
      { metric: "4.7★", label: "App Store rating (367 reviews)" },
      { metric: "10,000+", label: "Active users" },
    ],
  },
  {
    id: "shsadc",
    title: "SHS-ADC Alumni Association",
    category: "Web",
    tags: ["Web Development", "Nonprofit", "Community"],
    description:
      "A community and fundraising hub for the Sacred Heart School - Ateneo de Cebu Alumni Association, spanning events, scholarship campaigns, and donor giving since 1961.",
    image: shsadcImage,
    liveUrl: "https://www.shsadcalumni.com/",
    clientLabel: "Client",
    client: "Sacred Heart School - Ateneo de Cebu Alumni Association",
    timeline: "8 weeks",
    techStack: ["Web Development", "Content Management", "Online Giving"],
    challenge:
      "A 60+ year old alumni association needed a modern home online to run scholarship campaigns, publicize alumni events, and collect donations from graduates scattered around the world.",
    approach:
      "We built a content-managed site covering events, ongoing giving campaigns, and association history, with a direct online giving flow so alumni can support scholarship and medical-service funds from anywhere.",
    results: [
      { metric: "1961", label: "Association founded" },
      { metric: "₱3.1M+", label: "Raised across scholarship endowment campaigns" },
      { metric: "7+", label: "Active giving campaigns" },
    ],
  },
];

export const testimonials = [
  {
    id: 4,
    name: "David Park",
    role: "Marketing Manager",
    company: "Bright Path Consulting",
    projectId: "",
    quote:
      "Communication was clear through every phase and nothing was overpromised. What we asked for is what we got, on the timeline we agreed on.",
    rating: 5,
  },
  {
    id: 5,
    name: "Ana Cruz",
    role: "Founder",
    company: "Cruz & Co.",
    projectId: "",
    quote:
      "It wasn't flashy, it just worked well from day one. When we ran into small issues after launch, support was easy to reach and quick to sort out.",
    rating: 5,
  },
];

import theodoreImage from "../../assests/17.png";
import danielImage from "../../assests/21.png";
import christianImage from "../../assests/christian.png";
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

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [];

export const network = [
  {
    id: 1,
    name: "Aaros Cabrera",
    role: "CEO",
    company: "Bluemoon Philippines",
    industry: "Consumer / Services",
  },
  {
    id: 2,
    name: "Troy Morales",
    role: "Founder",
    company: "OWWO Chicken",
    industry: "Food & Beverage",
  },
  {
    id: 3,
    name: "Eric Rontaqiou",
    role: "CEO",
    company: "PocketDevs",
    industry: "Software / Dev Tools",
  },
  {
    id: 4,
    name: "Bryl Lim",
    role: "Software & AI Engineer",
    company: "PocketDevs",
    industry: "Software / AI",
  },
  {
    id: 5,
    name: "Carl Harvey Derez",
    role: "Founder",
    company: "Mazal",
    industry: "Fintech / Platforms",
  },
  {
    id: 6,
    name: "Ian Xavier",
    role: "Co-Founder",
    company: "Alpha Hideout",
    industry: "Community / Gaming",
  },
];

export const stats = [
  { value: "25+", label: "Projects Delivered" },
  { value: "8+", label: "Happy Clients" },
  { value: "3+", label: "Years Experience" },
  { value: "12", label: "Team Members" },
];
