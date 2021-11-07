import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

import { GOOGLE_ANALYTICS_ID } from '../lib/google/gtag';

class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
          />
          {/* eslint-disable react/no-danger */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="/assets/vendor/jquery/jquery.min.js" />
          <script src="/assets/vendor/jquery/jquery-migrate.min.js" />
          <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />
          <script src="/assets/vendor/hs/hs-header.min.js" />
          <script src="/assets/js/main.js" />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
