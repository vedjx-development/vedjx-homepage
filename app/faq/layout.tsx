import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about our web design and development services in Knoxville, Tennessee. Get answers about pricing, timelines, hosting, and more.',
  keywords: ['web design FAQ', 'website cost', 'web design questions', 'Knoxville web design FAQ'],
  openGraph: {
    title: 'Frequently Asked Questions - Ved.jx',
    description: 'Find answers to common questions about our web design and development services in Knoxville, Tennessee.',
    url: 'https://vedjx.netlify.app/faq',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'FAQ - Ved.jx',
    description: 'Frequently asked questions about our web design and development services in Knoxville, Tennessee.',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
