export interface TabFeature {
  icon: string;
  text: string;
}

export interface TabData {
  id: string;
  label: string;
  icon: string;
  title: string;
  description: string;
  image: string;
  features: TabFeature[];
  learnMoreLink: string;
}

export const tabsData: TabData[] = [
  {
    id: "salon-owners",
    label: "Salon Owners",
    icon: "🏪",
    title: "Boost Salon Profit & Efficiency",
    description: "With Savvy Pet, you can streamline your salon's operations to maximise revenue and profitability. Easily manage appointments, track payments, and optimise staff schedules to ensure full capacity.",
    image: "/ca2fd8010d46c7dc87c2ab379069af2b4c17ab20.png",
    features: [
      {
        icon: "☹️",
        text: "Charge No-Shows & Late Cancellations"
      },
      {
        icon: "📄",
        text: "Create & Auto-send Forms & Contracts"
      },
      {
        icon: "📊",
        text: "Track Sales & Generate Reports"
      }
    ],
    learnMoreLink: "#"
  },
  {
    id: "multi-groomer",
    label: "Multi-Groomer Businesses",
    icon: "👥",
    title: "Scale Your Multi-Groomer Operations",
    description: "Manage multiple groomers efficiently with advanced scheduling, staff management, and performance tracking. Perfect for growing businesses with multiple team members.",
    image: "/ca2fd8010d46c7dc87c2ab379069af2b4c17ab20.png",
    features: [
      {
        icon: "👥",
        text: "Staff Scheduling & Management"
      },
      {
        icon: "📈",
        text: "Performance Analytics Per Groomer"
      },
      {
        icon: "🔄",
        text: "Automated Workflow Distribution"
      }
    ],
    learnMoreLink: "#"
  },
  {
    id: "enterprise",
    label: "Enterprise",
    icon: "💼",
    title: "Enterprise-Grade Pet Care Management",
    description: "Comprehensive solution for large-scale operations with advanced reporting, multi-location support, and enterprise-level security features.",
    image: "/ca2fd8010d46c7dc87c2ab379069af2b4c17ab20.png",
    features: [
      {
        icon: "🏢",
        text: "Multi-Location Management"
      },
      {
        icon: "🔒",
        text: "Advanced Security & Compliance"
      },
      {
        icon: "📋",
        text: "Custom Reporting & Analytics"
      }
    ],
    learnMoreLink: "#"
  },
  {
    id: "mobile-inhouse",
    label: "Mobile / In-house / Curbside",
    icon: "🚚",
    title: "Mobile Grooming Made Simple",
    description: "Perfect for mobile groomers, in-house services, and curbside operations. Manage on-the-go appointments with GPS tracking and mobile-optimized features.",
    image: "/ca2fd8010d46c7dc87c2ab379069af2b4c17ab20.png",
    features: [
      {
        icon: "📍",
        text: "GPS Tracking & Route Optimization"
      },
      {
        icon: "📱",
        text: "Mobile-First Design"
      },
      {
        icon: "🚗",
        text: "Curbside Service Management"
      }
    ],
    learnMoreLink: "#"
  },
  {
    id: "home-solo",
    label: "Home / Solo Groomers",
    icon: "🏠",
    title: "Perfect for Home-Based Groomers",
    description: "Designed specifically for solo groomers working from home. Simple, affordable, and effective tools to manage your growing client base.",
    image: "/ca2fd8010d46c7dc87c2ab379069af2b4c17ab20.png",
    features: [
      {
        icon: "💰",
        text: "Affordable Pricing for Solo Business"
      },
      {
        icon: "🏠",
        text: "Home-Based Business Features"
      },
      {
        icon: "📞",
        text: "Client Communication Tools"
      }
    ],
    learnMoreLink: "#"
  },
  {
    id: "student-new",
    label: "Student / New Groomers",
    icon: "👤",
    title: "Start Your Grooming Career Right",
    description: "Special pricing and features for students and new groomers. Get all the tools you need to launch your career in pet grooming.",
    image: "/ca2fd8010d46c7dc87c2ab379069af2b4c17ab20.png",
    features: [
      {
        icon: "🎓",
        text: "Student Discounts Available"
      },
      {
        icon: "📚",
        text: "Learning Resources Included"
      },
      {
        icon: "🚀",
        text: "Easy Setup & Onboarding"
      }
    ],
    learnMoreLink: "#"
  }
];