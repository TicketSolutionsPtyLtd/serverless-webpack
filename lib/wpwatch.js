'use strict';

const BbPromise = require('bluebird');
const webpack = require('webpack');

module.exports = {
  wpwatch() {
    this.serverless.cli.log('Building and watching with Webpack...');

    const compiler = webpack(this.webpackConfig);

    return BbPromise.fromCallback(cb => compiler.watch({}, cb))
      .then(stats => {
        this.serverless.cli.consoleLog('Webpack rebuilt...');
        this.serverless.cli.consoleLog(stats.toString({
          colors: true,
          hash: false,
          version: false,
          chunks: false,
          children: false
        }));
        if (stats.compilation.errors.length) {
          throw new Error('Webpack compilation error, see above');
        }
        return stats;
      })
  },
};
