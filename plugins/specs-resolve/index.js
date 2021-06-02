/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
[object Object]
 */
// eslint-disable-next-line header/header
const path = require('path')

module.exports = function (context, options) {
  return {
    name: 'specs-resolve',
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          alias: {
            '@specs': path.resolve(__dirname, 'specs'),
          },
        },
      };
    },
  };
};