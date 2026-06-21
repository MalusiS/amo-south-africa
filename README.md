# 👤 AMO South Africa - Official Website

> A premium, high-performance web application for AMO South Africa, a registered Non-Profit Company supporting the Seventh-day Adventist Church. This multi-page digital platform is architected to clearly communicate the ministry's core pillars, showcase impactful projects like the 2026 International Gospel Convention, and drive frictionless community engagement.

---

## ✨ Key Features

* **Multi-Page Architecture (SPA):** Fully routed Single Page Application featuring dedicated Home, About Us, Projects, and Contact pages for seamless, instantaneous navigation.
* **Serverless Lead Capture:** Integrated Netlify Forms hidden attributes on the Contact Hub for secure, backend-free message routing directly to the organization's inbox.
* **Modern UI/UX:** Dark-themed aesthetic utilizing glassmorphism, dynamic gradients, and high-contrast amber accents to project authority and donor trust.
* **Persistent Layouts:** Extracted global Navbar and Footer into a persistent Layout component to maintain state and visual continuity across route changes.
* **Responsive Design:** Fully fluid layout that seamlessly adapts from ultrawide desktop monitors to mobile devices, featuring a custom animated hamburger menu.
* **Interactive Connectivity:** Embedded interactive Google Maps integration paired with high-conversion, one-click WhatsApp, YouTube, and Facebook links.
* **Optimized Performance:** 100/100 Lighthouse Accessibility score. Features semantic HTML, WCAG AA compliant color contrast, aria-labels, and client-side `_redirects` rules tailored for Netlify hosting.

---

## 🛠 Tech Stack

This project leverages a modern, blazing-fast frontend stack:

* **Framework:** [React 18](https://react.dev/)
* **Routing:** [React Router](https://reactrouter.com/) (`react-router-dom`)
* **Build Tool:** [Vite 8](https://vitejs.dev/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Hosting & Infrastructure:** [Netlify](https://www.netlify.com/) (DNS, Edge Routing, and Serverless Forms)

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
* Node.js (v18 or higher recommended)
* npm (or your preferred package manager like yarn/pnpm)

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/MalusiS/amo-south-africa.git](https://github.com/MalusiS/amo-south-africa.git)

2. **Navigate to the project directory**
   ```bash
   cd amo-south-africa

3. **Install NPM packages**
   (Note: The --legacy-peer-deps flag is used to bypass strict Vite 8 peer dependency warnings with Tailwind v4).
   
   ```bash
   npm install --legacy-peer-deps

5. **Run the development server**
   ```bash
   npm run dev

6. **Build for production**
   ```bash
   npm run build

---

## 👨‍💻 Author & Credits

**Developed by Malusi Skunyana**
*Front-End Developer*
- **Agency:** Powered by [WorkCentrik](https://workcentrik.com/)
- **Client:** [AMO South Africa](https://amosouthafrica.org/) (Registration: 2020/749793/08)
