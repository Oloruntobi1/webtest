module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
    [
      '@fullhuman/postcss-purgecss',
      {
        content: [
          './layouts/**/*.{js,jsx,ts,tsx}',
          './hooks/**/*.{js,jsx,ts,tsx}',
          './components/**/*.{js,jsx,ts,tsx}',
          './pages/**/*.{js,jsx,ts,tsx}',
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: [
          'html',
          'body',
          'g-recaptcha',
          'show',
          'fade',
          'collapse',
          'collapsing',
          'nav-link',
          /^(header(-[a-zA-Z]+)+)$/,
          /^(js(-[a-zA-Z]+)+)$/,
        ],
      },
    ],
  ],
};
