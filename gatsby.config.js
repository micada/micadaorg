var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function(config, env) {
  if(env === 'static') {
    config.removeLoader('css');
    config.loader('css', function(cfg) {
      cfg.test = /\.css$/;
      cfg.loader = ExtractTextPlugin.extract('css?modules');
      return cfg
    })
    config.plugin('extract-css',
                  ExtractTextPlugin,
                  ["styles.css", { allChunks: false }]);
  }
  return config;
};