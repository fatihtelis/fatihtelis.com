self.__precacheManifest = [
  {
    "url": "/_next/static/QRrYqibr06OlKLdEMBT_X/_buildManifest.js",
    "revision": "cbaaf11f6bf039e07c3ada2f6c96f475"
  },
  {
    "url": "/_next/static/QRrYqibr06OlKLdEMBT_X/_ssgManifest.js",
    "revision": "abee47769bf307639ace4945f9cfd4ff"
  },
  {
    "url": "/_next/static/chunks/2659b86927a56407e222f24dae13aa78902f80a4.82c7612fddea6a9215a8.js",
    "revision": "965a5e9c1fe8b7a0339c"
  },
  {
    "url": "/_next/static/chunks/2659b86927a56407e222f24dae13aa78902f80a4_CSS.8f6f5b95f5e92b2c9bcd.js",
    "revision": "7981b6ad55f4e75413eb"
  },
  {
    "url": "/_next/static/chunks/5ce6bf4a.4237541b6e42e5a82604.js",
    "revision": "cf48fa87dab994cc5099"
  },
  {
    "url": "/_next/static/chunks/5fcd5e32.6d33924e495300e79d86.js",
    "revision": "bb31e235d7b095da7925"
  },
  {
    "url": "/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.de34e989f34eb5287adf.js",
    "revision": "3eaab0fe8b706a87bf46"
  },
  {
    "url": "/_next/static/chunks/fb7d5399.e71126186752ab600555.js",
    "revision": "6b0a492e8dbd866f173f"
  },
  {
    "url": "/_next/static/chunks/framework.baa41d4dbf5d52db897c.js",
    "revision": "a4aee4505f0b605ffdad"
  },
  {
    "url": "/_next/static/chunks/main-0ee7220f23583a7d9e5d.js"
  },
  {
    "url": "/_next/static/chunks/pages/_app-151e16e4318da63a9ae0.js"
  },
  {
    "url": "/_next/static/chunks/pages/_error-cb6685cdcea506c8b6dd.js"
  },
  {
    "url": "/_next/static/chunks/pages/games-1dd45df2d9a29227ea8a.js"
  },
  {
    "url": "/_next/static/chunks/pages/games/contact-598ce2c83947e7450320.js"
  },
  {
    "url": "/_next/static/chunks/pages/games/privacy-ce9b1b29164da42e6a45.js"
  },
  {
    "url": "/_next/static/chunks/pages/index-aae8459b4ba05a298c88.js"
  },
  {
    "url": "/_next/static/chunks/polyfills-e5012cf49fbb0a2642db.js"
  },
  {
    "url": "/_next/static/chunks/webpack-d7b2fb72fb7257504a38.js"
  },
  {
    "url": "/_next/static/css/2659b86927a56407e222f24dae13aa78902f80a4_CSS.05d9ece0.chunk.css",
    "revision": "7981b6ad55f4e75413eb"
  },
  {
    "url": "/_next/static/fonts/boxicons-023b7b202fa7aa03b0bf6677017f560f.eot"
  },
  {
    "url": "/_next/static/fonts/boxicons-268a7e591eef81c12002416c944975c8.woff"
  },
  {
    "url": "/_next/static/fonts/boxicons-45b6c6e7dcd840b3239816d43a5a67e5.ttf"
  },
  {
    "url": "/_next/static/fonts/boxicons-4b68c215c584b28dabb104eee00fb5a7.woff2"
  },
  {
    "url": "/_next/static/fonts/boxicons-99af7d6eaca13a938ab06f099169e156.svg"
  },
  {
    "url": "/_next/static/fonts/sofia-pro-black-18eb57634a729a58f02ef1a2a21e98b9.otf"
  },
  {
    "url": "/_next/static/fonts/sofia-pro-bold-28b75bc6b4d35b59ecf476db59bc4ecf.otf"
  },
  {
    "url": "/_next/static/fonts/sofia-pro-extra-light-8b590b229ee431c83a27e8930ad80781.otf"
  },
  {
    "url": "/_next/static/fonts/sofia-pro-light-52fa5a506994382612ed5936f1e94660.otf"
  },
  {
    "url": "/_next/static/fonts/sofia-pro-medium-b307c6ce73c3d573c228ecd5de070f45.otf"
  },
  {
    "url": "/_next/static/fonts/sofia-pro-regular-bd0a6d0d1ce78e95fb1629450636bc6f.otf"
  },
  {
    "url": "/_next/static/fonts/sofia-pro-semi-bold-a57bde9593a32d99ff54c3716859cc19.otf"
  },
  {
    "url": "/_next/static/fonts/sofia-pro-ultra-light-4bdc72d871a96c7a9bf467f5d5cff5f0.otf"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
