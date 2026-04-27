import React from 'react';

export function SEOSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://zeyadshalaby.cloud/#person",
        "name": "زياد شلبي",
        "alternateName": "Zeyad Shalaby",
        "url": "https://zeyadshalaby.cloud",
        "image": {
          "@type": "ImageObject",
          "url": "https://zeyadshalaby.cloud/Untitled%20design.png",
          "width": "1200",
          "height": "630"
        },
        "description": "Full Stack Developer متخصص في بناء تطبيقات متكاملة باستخدام Go, Laravel, Next.js و Flutter.",
        "jobTitle": "Full Stack Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "Zeyad Shalaby Tech Solutions"
        },
        "sameAs": [
          "https://github.com/zeyadShalaby",
          "https://linkedin.com/in/zeyadshalaby",
          "https://x.com/zeyadshalaby"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://zeyadshalaby.cloud/#website",
        "url": "https://zeyadshalaby.cloud",
        "name": "زياد شلبي",
        "publisher": { "@id": "https://zeyadshalaby.cloud/#person" },
        "inLanguage": "ar"
      },
      // FAQ Schema - Great for Google Real Estate
      {
        "@type": "FAQPage",
        "@id": "https://zeyadshalaby.cloud/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "ما هي الخدمات البرمجية التي يقدمها زياد شلبي؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "يقدم زياد شلبي خدمات تطوير تطبيقات الموبايل باستخدام Flutter، تطوير المواقع الاحترافية بـ Next.js، وبناء الأنظمة الخلفية القوية بـ Go Lang و Laravel."
            }
          },
          {
            "@type": "Question",
            "name": "هل يقدم زياد شلبي حلول بوابات الدفع؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم، متخصص في بناء وتكامل بوابات الدفع الإلكتروني، مثل بوابة دفع أفق (Ofoq Payment Gateway)."
            }
          }
        ]
      },
      // Service Schema
      {
        "@type": "Service",
        "serviceType": "Full Stack Development",
        "provider": { "@id": "https://zeyadshalaby.cloud/#person" },
        "areaServed": {
          "@type": "Country",
          "name": "Egypt"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Software Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mobile App Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Application Development"
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
