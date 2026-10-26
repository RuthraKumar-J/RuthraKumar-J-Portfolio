# Modern Developer Portfolio Website

A responsive developer portfolio website engineered with **React 18**, **Tailwind CSS**, **Lucide React**, and **Framer Motion**.

Designed dark-mode first with high-contrast slate-950 surfaces, subtle grid mesh background overlays, glassmorphic floating elements, and glowing cyan/violet/indigo highlights.

---

## ⚡ Tech Stack

- **Framework**: [React 18](https://react.dev) + [Vite](https://vitejs.dev)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com) + PostCSS + Autoprefixer
- **Motion & Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev)
- **Typography**: Google Fonts (*Plus Jakarta Sans* & *JetBrains Mono*)

---

## 🚀 Key Features & Sections

1. **Floating Glassmorphic Navbar**:
   - Monogram logo with gradient hover effect.
   - Smooth active section spy highlight pill (`About`, `Skills`, `Projects`, `Experience`, `Contact`).
   - Quick resume download trigger & GitHub / LinkedIn social links.
   - Animated mobile hamburger drawer.

2. **Hero Section**:
   - Dynamic status badge: *"Open to Work / Available for hire"* with glowing green radar pulse.
   - Catchy headline with high-contrast gradient text.
   - Dual Call-to-Action (CTA): *"View Projects"* (primary gradient) & *"Contact Me"* (secondary bordered glass).
   - Social links bar (GitHub, LinkedIn, Email, LeetCode) with tooltips.
   - Interactive holographic profile card with user's photo and floating tech badges (`React 18`, `ESP32 & IoT`, `Sub-100ms API`).

3. **About Me**:
   - Narrative bio covering engineering philosophy and problem solving.
   - Quick stats grid (`12+ Projects`, `1+ Yrs Internship`, `B.E. ECE Graduate`, `250+ LeetCode`).
   - Interactive bash terminal widget querying developer profile specifications.
   - Core value cards (Full-Stack Craftsmanship, Hardware-to-Cloud Integration, Performance & DX First).

4. **Skills & Tech Stack**:
   - Interactive filter tabs (`All Stack`, `Frontend`, `Backend & DB`, `Hardware & IoT`, `Tools & DevOps`).
   - Micro-badges with proficiency labels (`Expert`, `Advanced`, `Proficient`).
   - Callout badge for current learning explorations (e.g., Next.js 15, Edge AI, Rust).

5. **Featured Projects**:
   - Category filtering (`All`, `Full-Stack & IoT`, `Full-Stack`, `Frontend`, `Hardware & Systems`).
   - Visual preview containers with animated SVG/CSS telemetry graphs, syntax highlighted code, and live UI mockups.
   - Problem-solution breakdown card (*"The Challenge & Solution"*).
   - Performance metrics chips (`<100ms latency`, `98+ Lighthouse`, `±1.5% Precision`).
   - Live Demo and GitHub repository links with clean external icons.
   - Deep-Dive modal with case study specifications.

6. **Experience & Education**:
   - Vertical timeline layout with glowing milestone dots.
   - Tab toggles: `All Milestones`, `Work & Internships`, and `Education & Degrees`.
   - Work achievements with verified bullet points, duration, and stack tags.
   - Academic details with CGPA distinction, relevant coursework, and capstone project highlights.

7. **Contact Section & Footer**:
   - Direct contact card with one-click email copy button and tooltip feedback.
   - Recruiter availability badge & location/timezone status.
   - Functional contact form with client-side validation, loading state, and success alert banner.
   - Minimalist footer with copyright, tech stack credits, and smooth back-to-top button.

---

## 🛠️ How to Customize Your Information

All portfolio content is decoupled and stored in `src/data/portfolioData.js`. You can swap out any details without touching the component markup:

```javascript
// src/data/portfolioData.js
export const personalData = {
  name: "Your Name",
  role: "Full-Stack Developer & Hardware Enthusiast",
  location: "Your City, Country",
  email: "your.email@example.com",
  phone: "+1 234 567 890",
  availability: "Open to Work / Available for hire",
  profileImage: "/profile.png", // Place your image in public/profile.png
  resumeUrl: "https://drive.google.com/your-resume-link",
  ...
};
```

---

## 💻 Getting Started Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
```
Production assets will be generated in the `dist/` directory, ready to deploy to Vercel, Netlify, Cloudflare Pages, or GitHub Pages.
