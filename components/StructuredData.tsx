import Script from 'next/script';

interface LocalBusinessProps {
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  email?: string;
  address?: {
    city: string;
    state: string;
    country: string;
  };
}

export function LocalBusinessStructuredData({
  name = 'Ved.jx',
  description = 'Professional web design and development services in Knoxville, TN',
  url = 'https://vedjx.netlify.app',
  telephone = '865-978-2087',
  email = 'vedjx865@gmail.com',
  address = {
    city: 'Knoxville',
    state: 'Tennessee',
    country: 'US',
  },
}: LocalBusinessProps = {}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': url,
    name,
    description,
    url,
    telephone,
    email,
    image: `${url}/VedJx.svg`,
    logo: `${url}/VedJx.svg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: address.city,
      addressRegion: address.state,
      addressCountry: address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '35.9606',
      longitude: '-83.9207',
    },
    areaServed: {
      '@type': 'State',
      name: 'Tennessee',
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    sameAs: [
      // Add your social media profiles here when available
      // 'https://www.facebook.com/vedjx',
      // 'https://www.linkedin.com/company/vedjx',
      // 'https://twitter.com/vedjx',
    ],
  };

  return (
    <Script
      id="local-business-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function WebsiteStructuredData({ url = 'https://vedjx.netlify.app' }: { url?: string } = {}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ved.jx',
    url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/?s={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Script
      id="website-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface ServiceProps {
  name?: string;
  description?: string;
  provider?: string;
  areaServed?: string;
  url?: string;
}

export function ServiceStructuredData({
  name = 'Web Design and Development',
  description = 'Professional web design, hosting, maintenance, SEO, and logo design services',
  provider = 'Ved.jx',
  areaServed = 'Knoxville, Tennessee',
  url = 'https://vedjx.netlify.app/services',
}: ServiceProps = {}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: provider,
    },
    areaServed: {
      '@type': 'City',
      name: areaServed,
    },
    url,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceRange: '$$',
    },
  };

  return (
    <Script
      id="service-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbStructuredData({ items }: { items: BreadcrumbItem[] }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQStructuredData({ faqs }: { faqs: FAQItem[] }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface ReviewProps {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished?: string;
}

export function AggregateRatingStructuredData({ reviews }: { reviews: ReviewProps[] }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ved.jx',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: reviews.length.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating.toString(),
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished || new Date().toISOString().split('T')[0],
    })),
  };

  return (
    <Script
      id="aggregate-rating-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
