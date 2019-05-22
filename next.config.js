const withPlugins = require('next-compose-plugins');
const css = require('@zeit/next-css');
const fonts = require('next-fonts');
const offline = require('next-offline');

module.exports = withPlugins(
  [
    css,
    fonts,
    [
      offline,
      {
        target: 'serverless',
        workboxOpts: {
          swDest: 'static/service-worker.js',
          runtimeCaching: [
            {
              urlPattern: /^https?.*/,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'https-calls',
                networkTimeoutSeconds: 15,
                expiration: {
                  maxEntries: 150,
                  maxAgeSeconds: 30 * 24 * 60 * 60,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
      },
    ],
  ],
  {
    enableSvg: true,
    webpack: (config) => {
      config.node = {
        fs: 'empty',
      };

      return config;
    },
  },
);
