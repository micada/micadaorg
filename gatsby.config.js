var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function(config, env) {
      config.loader('sass', function(cfg) {
      cfg.test = /\.scss$/;
      cfg.loader = ExtractTextPlugin.extract('css?minimize!sass');
      return cfg
    })
    config.plugin('extract-css',
                  ExtractTextPlugin,
                  ["styles.css", { allChunks: true }]);
  return config;
};