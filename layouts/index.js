import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
  const { children, title } = props;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="We partner with tech recruiters and start-ups to search for and screen talent from Africa that matches your specific needs"
        />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://10hourlabs.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hire Engineers and Product Designers from Africa"
        />
        <meta
          property="og:description"
          content="We partner with tech recruiters and start-ups to search for and screen talent from Africa that matches your specific needs"
        />
        <meta
          property="og:image"
          content="https://10hourlabs.com/assets/svg/logo.svg"
        />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="10hourlabs" />
        <meta property="twitter:url" content="https://10hourlabs.com" />
        <meta
          name="twitter:title"
          content="Hire Engineers and Product Designers from Africa"
        />
        <meta
          name="twitter:description"
          content="We partner with tech recruiters and start-ups to search for and screen talent from Africa that matches your specific needs"
        />
        <meta
          name="twitter:image"
          content="https://10hourlabs.com/assets/svg/logo.svg"
        />

        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <script src="https://www.google.com/recaptcha/api.js" async defer />
      </Head>
      <main className="position-relative">
        <Header />
        <div id="content" role="main" className="space-top-1 space-top-lg-3">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}
