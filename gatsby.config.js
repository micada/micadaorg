var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function(config, env) {
      config.loader('sass', function(cfg) {
      cfg.test = /\.scss$/;
      cfg.loader = ExtractTextPlugin.extract('css?minimize!sass');
      return cfg
    })
    config.loader('fonts', function(cfg) {
      cfg.test =  /\.(ttf|eot|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/;
      cfg.loader = 'file-loader';
      return cfg
    })
    config.loader('favicon', function(cfg) {
      cfg.test = /\.ico$/;
      cfg.loader = 'file-loader';
      return cfg
    })
    config.plugin('extract-css',
                  ExtractTextPlugin,
                  ["styles.css", { allChunks: true }]);
  return config;
};