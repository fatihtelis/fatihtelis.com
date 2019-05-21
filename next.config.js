const withPlugins = require('next-compose-plugins');
const css = require('@zeit/next-css');
const fonts = require('next-fonts');
const offline = require('next-offline');

module.exports = withPlugins([css, fonts, offline], {
  enableSvg: true,
  webpack: (config) => {
    config.node = {
      fs: 'empty',
    };

    return config;
  },
});
