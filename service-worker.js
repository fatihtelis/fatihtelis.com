self.__precacheManifest = [
  {
    "url": "/_next/static/OEv_P7u0Y1O07eSVIoj32/_buildManifest.js",
    "revision": "ece81c4eb12ca158dc339f775a7a652a"
  },
  {
    "url": "/_next/static/OEv_P7u0Y1O07eSVIoj32/_ssgManifest.js",
    "revision": "abee47769bf307639ace4945f9cfd4ff"
  },
  {
    "url": "/_next/static/chunks/5ce6bf4a.e06e4ba45c7c802ad770.js",
    "revision": "4754ade61348b8fa6082"
  },
  {
    "url": "/_next/static/chunks/5fcd5e32.309239c625b32e1bd39d.js",
    "revision": "17b0e156205512e4fe67"
  },
  {
    "url": "/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.00aaea69a4bfc61676f6.js",
    "revision": "6b0fcb00c156b8ac2953"
  },
  {
    "url": "/_next/static/chunks/fb7d5399.5ffdb6fc56ea720f444d.js",
    "revision": "7638023588dddd5d1d53"
  },
  {
    "url": "/_next/static/chunks/framework.e22c2351f7fb91ccdf78.js",
    "revision": "cfd6f7276ac65925c24c"
  },
  {
    "url": "/_next/static/chunks/main-5184c23f0683e525903a.js"
  },
  {
    "url": "/_next/static/chunks/pages/_app-e614be418a1179cf075f.js"
  },
  {
    "url": "/_next/static/chunks/pages/_error-b52f8b678ce4b85a362a.js"
  },
  {
    "url": "/_next/static/chunks/pages/index-18afe69ae4f0c811ae3f.js"
  },
  {
    "url": "/_next/static/chunks/polyfills-a98cee78eb8282e29fb6.js"
  },
  {
    "url": "/_next/static/chunks/styles.5b14f70ce637473854bb.js",
    "revision": "7f151f55e15694a31353"
  },
  {
    "url": "/_next/static/chunks/webpack-d7b2fb72fb7257504a38.js"
  },
  {
    "url": "/_next/static/css/styles.05d9ece0.chunk.css",
    "revision": "7f151f55e15694a31353"
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
