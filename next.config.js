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
        workboxOpts: {
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fatihtelis\.com\/app-ads\.txt$/,
              handler: 'NetworkOnly',
            },
          ],
        },
      },
    ],
  ],
  {
    enableSvg: true,
    webpack: config => {
      config.node = {
        fs: 'empty',
      };
      return config;
    },
    async headers() {
      return [
        {
          source: '/app-ads.txt',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
            },
            {
              key: 'Pragma',
              value: 'no-cache',
            },
            {
              key: 'Expires',
              value: '0',
            },
          ],
        },
      ];
    },
  }
);
