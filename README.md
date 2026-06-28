# Ved.jx Website

A modern, beautiful, and professional website for Ved.jx - a Knoxville-based web solutions business.

## Features

- **Modern Tech Stack**: Built with Next.js 15, React, TypeScript, and Tailwind CSS
- **Server-Side Rendering (SSR)**: Optimized for SEO with Next.js App Router
- **Responsive Design**: Beautiful on all devices (desktop, tablet, mobile)
- **No Hard Refreshes**: Smooth navigation using Next.js client-side routing
- **Professional Pages**:
  - Home - Hero section with services preview
  - About - Company story and values
  - Services - Detailed service offerings
  - Pricing - Transparent pricing information
  - Testimonials - Client reviews and ratings
  - Contact - Contact form with business information
  - FAQ - Common questions and answers
  - Privacy Policy - Comprehensive privacy information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
vedjx-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── pricing/           # Pricing page
│   ├── privacy/           # Privacy Policy page
│   ├── services/          # Services page
│   ├── testimonials/      # Testimonials page
│   ├── layout.tsx         # Root layout with navigation and footer
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Main navigation component
│   ├── Footer.tsx         # Footer component
│   └── ContactForm.tsx    # Contact form component
├── public/                # Static assets
└── package.json           # Project dependencies
```

## Pages Overview

### Home (`/`)
- Eye-catching hero section with gradient logo
- Services preview grid
- "Why Choose Us" section
- Call-to-action sections

### About (`/about`)
- Company story and background
- Core values (Fair Pricing, Customer Service, Maximum Value)
- Experience highlights

### Services (`/services`)
- Detailed service descriptions
- Free consultation, website design, hosting, maintenance, SEO, logo design
- Process overview (4-step workflow)

### Pricing (`/pricing`)
- Transparent hourly rate information (~$60/hr)
- Factors affecting project cost
- What's included in every project

### Testimonials (`/testimonials`)
- Real client reviews with ratings
- Success metrics and statistics

### Contact (`/contact`)
- Contact form (Name, Email, Phone, Message)
- Business contact information
- Email: vedjx865@gmail.com
- Phone: 865-978-2087

### FAQ (`/faq`)
- 12 common questions with detailed answers
- Interactive accordion interface

### Privacy Policy (`/privacy`)
- Comprehensive privacy information
- GDPR-compliant content

## Contact Form

The contact form is set up with a client-side component and API route. Currently, it logs submissions to the console. To enable email sending:

1. Choose an email service (Resend, SendGrid, Nodemailer, etc.)
2. Install the package:
```bash
npm install resend  # or your chosen service
```
3. Update `app/api/contact/route.ts` with your email service configuration
4. Add your API key to environment variables

Example for Resend:
```env
RESEND_API_KEY=your_api_key_here
```

## Customization

### Logo
The temporary "Ved.jx" text logo can be replaced with an actual logo image:
1. Add your logo to the `public/` folder
2. Update `components/Navigation.tsx` to use an `<Image>` component

### Colors
The color scheme uses blue and purple gradients. To change:
- Update Tailwind classes in components (e.g., `from-blue-600 to-purple-600`)
- Modify `app/globals.css` for global color changes

### Content
All content is directly in the page files for easy editing:
- Business info, testimonials, services, etc. can be updated in respective page files

## SEO Optimization

The website includes:
- Proper meta tags and descriptions
- Server-side rendering for better crawling
- Semantic HTML structure
- Fast loading times with Next.js optimization

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Other Platforms
The website can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any Node.js hosting service

## Technology Stack

- **Framework**: Next.js 15 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Build Tool**: Turbopack

## Contact

For questions about this website:
- Email: vedjx865@gmail.com
- Phone: 865-978-2087
- Location: Knoxville, Tennessee
