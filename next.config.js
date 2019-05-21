const withOffline = require('next-offline');

module.exports = withOffline({
  webpack: (config) => {
    config.node = {
      fs: 'empty',
    };

    return config;
  },
});
