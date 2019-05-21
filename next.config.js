const withPlugins = require('next-compose-plugins');
const css = require('@zeit/next-css');
const offline = require('next-offline');

module.exports = withPlugins([css, offline], {
  webpack: (config) => {
    config.node = {
      fs: 'empty',
    };

    return config;
  },
});
