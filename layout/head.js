import NextHead from 'next/head';

const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = ({
  title, description, url, ogImage,
}) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || ''}</title>
    <meta name="description" content={description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="manifest" href="/static/manifest.json" />
    <link rel="icon" sizes="192x192" href="/static/icons/icon-192x192.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/static/icon-180x180.png" />
    <link rel="icon" href="/static/favicon.ico" />

    <meta property="og:url" content={url || defaultOGURL} />
    <meta property="og:title" content={title || ''} />
    <meta property="og:description" content={description || defaultDescription} />
    <meta name="twitter:site" content={url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage || defaultOGImage} />
    <meta property="og:image" content={ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <link rel="stylesheet" href="/static/fonts/sofia-pro/fontstyle.css" />
    <link rel="stylesheet" href="/static/boxicons/css/boxicons.min.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
    />
  </NextHead>
);

export default Head;
