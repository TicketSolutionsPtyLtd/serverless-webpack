'use strict';

const BbPromise = require('bluebird');
const webpack = require('webpack');

module.exports = {
  watchAll() {
    this.serverless.cli.log('Building and watching with Webpack...');

    const compiler = webpack(this.webpackConfig);
    const watchOptions = {};

    const watcher = compiler.watch(watchOptions, (err, stats) => {
      if (err){
        throw err
      }
      this.serverless.cli.consoleLog('Webpack rebuilt...');
      this.serverless.cli.consoleLog(stats.toString({
        colors: true,
        hash: false,
        version: false,
        chunks: false,
        children: false
      }));
      if (stats.hasErrors()) {
        throw new Error('Webpack compilation error, see above');
      }
    })

    return BbPromise.resolve();
  },
};
