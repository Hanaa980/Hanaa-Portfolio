// ==========================================
// 1. FRESHCART MOCKUPS & SCREENSHOTS
// ==========================================
import searchFilterMockup from "@/assets/mockups/Macbook-Air-hanaa980.github.io2.webp";

import productDetailsMockup from "@/assets/mockups/Macbook-Air-hanaa980.github.io4.webp";

import wishlistMockup from "@/assets/mockups/Xiaomi-12-hanaa980.github.io.webp";
import cart from '@/assets/mockups/cart.png'
import heroMockup from "@/assets/mockups/Macbook-Air-hanaa980.github.io.webp";
import cartMockup from "@/assets/mockups/iPad-Air-4-hanaa980.github.io.webp";
import checkoutMockup from "@/assets/mockups/iPhone-X-hanaa980.github.io.webp";

// ==========================================
// 2. WEATHER APP MOCKUPS & SCREENSHOTS
// ==========================================
import weatherMacbookMockup from "@/assets/mockups/Macbook-Air-hanaa980.github.io5.webp";
import weatherIpadForecast2Mockup from "@/assets/mockups/iPad-Air-4-hanaa980.github.io4.webp";
import weatherIcon from '@/assets/mockups/weather-icon.webp'
import weatherIpadMenuMockup from "@/assets/mockups/iPad-Air-4-hanaa980.github.io6.webp";
import weatherIphoneSearchMockup from "@/assets/mockups/iPhone-13-PRO-hanaa980.github.io(1).webp";
import weatherIphoneHeroMockup from "@/assets/mockups/iPhone-13-PRO-hanaa980.github.io.webp";

// ==========================================
// 3. Socail APP MOCKUPS & SCREENSHOTS
// ==========================================
import socialHeroApp from "@/assets/mockups/Screenshot 2026-10-05 100423.png";
import chat from '@/assets/mockups/chat.webp'
import { StaticImageData } from "next/image";

// تعريف أنواع البيانات لتجنب أي استخدام لـ any
export interface Feature {
  number: string;
  title: string;
  description: string;
}

export interface Screenshot {
  id: number;
  title: string;
  device: string;
  image: string | StaticImageData;
  caption: string;
}

export interface Project {
  id: string;
  color: string;
  title: string;
  slug: string;
  icon: string | StaticImageData;
  category: string;
  featured: boolean;
  summary: string;
  description: string;
  demoUrl: string;
  githubUrl: string;
  technologies: string[];
  features: Feature[];
  highlights: string[];
  screenshots: Screenshot[];
}


export const projectsData: Project[] = [
  {
    id: "fresh-cart",
    color:'#d97757',

    title: "Fresh Cart", //[cite: 27, 29]
    slug: "fresh-cart-ecommerce",
    icon:cart,
    category: "E-commerce", //[cite: 27]
    featured: true,
    summary: "Full shopping flow — auth, browse, cart, checkout.", //[cite: 27]
    description:
      "Architected a responsive e-commerce SPA with React and Vite, organizing the codebase into reusable, modular components for scalability and maintainability. Implemented JWT-based authentication with Formik & Yup validation, securing login/registration flows and persisting user state across sessions. Engineered centralized state management with Redux Toolkit for cart and user data, eliminating prop-drilling and ensuring predictable updates.", //[cite: 29]

    demoUrl: "https://hanaa980.github.io/E-commerce-Fresh-cart/", //[cite: 29]
    githubUrl: "https://github.com/hanaa980/E-commerce-Fresh-cart", //[cite: 29]

    technologies: [
      "React", //[cite: 27, 28, 29]
      "Redux Toolkit", //[cite: 27, 28, 29]
      "React Router", //[cite: 27, 28, 29]
      "Tailwind CSS", //[cite: 27, 28, 29]
      "Formik", //[cite: 28]
      "Yup", //[cite: 28]
      "Axios", //[cite: 29]
      "Vite", //[cite: 29]
    ],

    features: [
      {
        number: "01",
        title: "Authentication", //[cite: 28]
        description:
          "Login and registration with protected routes and session persistence.", //[cite: 28]
      },
      {
        number: "02",
        title: "Product Catalog", //[cite: 28]
        description:
          "Browse products by category with search and filtering capabilities.", //[cite: 28]
      },
      {
        number: "03",
        title: "Cart Management", //[cite: 28]
        description:
          "Add, remove, and adjust quantities with Redux Toolkit global state.", //[cite: 28]
      },
      {
        number: "04",
        title: "Checkout Flow", //[cite: 28]
        description:
          "Formik + Yup validation for shipping and payment details.", //[cite: 28]
      },
    ],

    highlights: [
      "Responsive across all devices", //[cite: 28]
      "Global cart state sync", //[cite: 28]
      "Form validation with Yup", //[cite: 28]
      "Route-level code splitting", //[cite: 28]
    ],

    screenshots: [
      {
        id: 1,
        title: "Home & Categories Overview",
        device: "Tablet / Desktop",
        image: heroMockup,
        caption:
          "Main landing page displaying category carousels and featured product grid.",
      },
      {
        id: 2,
        title: "Live Product Search & Filtering",
        device: "MacBook Air",
        image: searchFilterMockup,
        caption:
          "Instant client-side search filtering products by title keywords.",
      },
      {
        id: 3,
        title: "Product Details View",
        device: "MacBook Air",
        image: productDetailsMockup,
        caption:
          "Single product showcase with description, pricing, and related items.",
      },
      {
        id: 4,
        title: "Wishlist & Favorites",
        device: "Xiaomi 12",
        image: wishlistMockup,
        caption:
          "Mobile view of saved user favorites synchronized with global state.",
      },
      {
        id: 5,
        title: "Shopping Cart System",
        device: "iPad Air",
        image: cartMockup,
        caption:
          "Interactive shopping cart item management and price summarization.",
      },
      {
        id: 6,
        title: "Checkout & Payment Form",
        device: "iPhone X",
        image: checkoutMockup,
        caption:
          "Responsive checkout page handling address details and payment selection.",
      },
    ],
  },
  {
    id: "social-app",
    color:"#7a9b76",
    title: "Social App", //[cite: 27, 29]
    slug: "social-platform-app",
    icon:chat,
    category: "Social Platform", //[cite: 27]
    featured: true,
    summary: "Post feed with JWT auth and protected routes.", //[cite: 27]
    description:
      "A social media web app built with Next.js and TypeScript, allowing users to authenticate, create, view, and delete posts. Authentication is implemented using JWT, with protected routes and global state managed by Redux Toolkit. Designed a responsive post feed layout and integrated user-specific actions.", //[cite: 29]

    demoUrl: "https://hanaa980.github.io/Social-App/", //[cite: 29]
    githubUrl: "https://github.com/hanaa980/Social-App", //[cite: 29]

    technologies: [
      "Next.js", //[cite: 27, 29]
      "TypeScript", //[cite: 27, 29]
      "Redux Toolkit", //[cite: 27, 29]
      "React", //[cite: 29]
      "Tailwind CSS", //[cite: 27, 29]
      "JWT", //[cite: 27, 29]
      "Axios", //[cite: 29]
    ],

    features: [
      {
        number: "01",
        title: "User Authentication", //[cite: 27, 29]
        description:
          "Secure authentication system powered by JWT and protected routes.", //[cite: 27, 29]
      },
      {
        number: "02",
        title: "Interactive Post Feed", //[cite: 27, 29]
        description: "Dynamic post creation, viewing, and deletion workflows.", //[cite: 29]
      },
      {
        number: "03",
        title: "Global State Sync", //[cite: 29]
        description:
          "Redux Toolkit integration for user sessions and real-time updates.", //[cite: 29]
      },
    ],

    highlights: [
      "Full JWT Authentication flow", //[cite: 27, 29]
      "Modular dynamic routing with Next.js", //[cite: 29]
      "User-specific post management", //[cite: 29]
      "Clean TypeScript interface structure", //[cite: 29]
    ],

    // سيتم وضع مصفوفة الصور الخاصة به عند أخذ السكرينات لاحقاً
    screenshots: [
      {
        id: 1,
        title: "Home & Categories Overview",
        device: "Tablet / Desktop",
        image: socialHeroApp,
        caption:
          "Main landing page displaying category carousels and featured product grid.",
      },
    ],
  },
  {
    id: "weather-app",
    color:"#6B9DC2",
    title: "Weather App", //[cite: 27, 29]
    slug: "weather-forecast-app",
    icon:weatherIcon,
    category: "API Tool", //[cite: 27]
    featured: true,
    summary: "Real-time forecasts by location or city search.", //[cite: 27]
    description:
      "Created a real-time weather application that provides dynamic weather updates based on user location or city name, showing temperature, status, wind speed, and humidity.", //[cite: 21, 29]

    demoUrl: "https://hanaa980.github.io/Weather-App/", //[cite: 29]
    githubUrl: "https://github.com/hanaa980/Weather-App", //[cite: 29]

    technologies: [
      "JavaScript (ES6+)", //[cite: 29]
      "HTML5", //[cite: 29]
      "CSS3", //[cite: 29]
      "Bootstrap", //[cite: 29]
      "OpenWeather API", //[cite: 29]
    ],

    features: [
      {
        number: "01",
        title: "Location-based Weather", //[cite: 21, 29]
        description:
          "Automated location detection and instant city search lookup.", //[cite: 21, 29]
      },
      {
        number: "02",
        title: "3-Day Forecast", //[cite: 21]
        description:
          "Detailed daily weather metrics including temperature highs and lows.", //[cite: 21]
      },
      {
        number: "03",
        title: "Live Metrics", //[cite: 21]
        description:
          "Displays wind speed, wind direction, and humidity percentages.", //[cite: 21]
      },
    ],

    highlights: [
      "Asynchronous REST API Integration", //[cite: 29]
      "Real-time city auto-complete lookup", //[cite: 21]
      "Responsive design across mobile, tablet, and desktop", //[cite: 21]
    ],

    screenshots: [
      {
        id: 1,
        title: "Desktop Forecast View",
        device: "MacBook Air",
        image: weatherMacbookMockup,
        caption:
          "Full 3-day weather forecast layout showing detailed metrics for the selected location.",
      },
      {
        id: 2,
        title: "Mobile Navigation Menu",
        device: "iPad Air",
        image: weatherIpadMenuMockup,
        caption: "Responsive mobile navigation drawer expanded on tablet view.",
      },
      // {
      //   id: 3,
      //   title: "Tablet Weather Overview",
      //   device: "iPad Air",
      //   image: weatherIpadForecastMockup,
      //   caption:
      //     "Vertical stack layout for weather conditions and daily forecasts on tablet screens.",
      // },
      {
        id: 4,
        title: "City Search Results View",
        device: "iPad Air",
        image: weatherIpadForecast2Mockup,
        caption:
          "Live city search execution showing instant updated weather data for Giza.",
      },
      {
        id: 5,
        title: "Mobile Active Search Input",
        device: "iPhone 13 Pro",
        image: weatherIphoneSearchMockup,
        caption:
          "Mobile keyboard and search interface for quick location lookups.",
      },
      {
        id: 6,
        title: "Mobile Weather Dashboard",
        device: "iPhone 13 Pro",
        image: weatherIphoneHeroMockup,
        caption:
          "Compact mobile hero view displaying current temperature and weather icons.",
      },
    ],
  },
];



