import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title:
    "Find cheap flights, hotels, airline tickets, and cars on rent | Trippybug",
  description:
    "Trippybug is an affordable traveling website that offers hotel booking, cheap cars on rent,  and airline tickets for your hassle-free journey.",
  keywords:
    "car on rent, cheap cars for rent, car to rent near me,rental car expedia, rent a car for a day, cheapest car hire near me, hire a car for a day, rent cars with debit card, hotel booking, hotel booking, expedia hotels, cheap hotels, booking com hotels, last minute hotels, hotwire hotels, hotel booking sites, kayak hotels, cheap hotels, flight booking, cheap flights, airline tickets, flight ticket booking, expedia flights, airline tickets, plane tickets, cheap airline tickets, cheap flight tickets, last minute flights, delta airlines reservations, united airlines reservations, cheap plane tickets.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Trippybug",
  alternateName: "Travel Agency",
  url: "https://www.trippybug.com/",
  logo: "https://www.trippybug.com/_next/image?url=%2Fassets%2Fimages%2FnewLogo.png&w=3840&q=75",
  sameAs: [
    "https://www.facebook.com/bugtrippyy",
    "https://twitter.com/bug_trippy",
    "https://www.instagram.com/trippybugofficial/",
    "https://in.pinterest.com/Official_TrippyBug/",
  ],
  description:
    "Trippybug is the most affordable traveling website which offers hotel booking, cheap cars on rent, airline tickets, and flight booking. Whether you are going for a family vacation or honeymoon, we provide a wide range of affordable holiday tour packages.",
  email: "bugtrippy@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "United States",
    postalCode: "10007",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Blogs",
        item: "https://www.trippybug.com/blogs/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Flight Booking",
        item: "https://www.trippybug.com/flights/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Hotel Booking",
        item: "https://www.trippybug.com/hotels/",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Car on rent",
        item: "https://www.trippybug.com/cars/",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" href="https://www.trippybug.com/" hrefLang="en" />

        <meta
          name="p:domain_verify"
          content="f0bb3a2c41f6936741568f1831a7ac03"
        />

        <meta name="fo-verify" content="74ee3f5b-5c21-4f79-b213-5bb4c0f73e4a" />

        <meta
          name="google-site-verification"
          content="YR1UI4oxXWay8Qc1hkmDu2z8QFWz0CAFd9j8EaJxChM"
        />

        <meta name="msvalidate.01" content="A2B655228A41F6D0E478C6CFADCCE742" />
      </head>
      <Script
        id="layout"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-73GCGT5MYF"
      />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'G-73GCGT5MYF')`}
      </Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.4.1/purify.min.js"></Script>{" "}
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
