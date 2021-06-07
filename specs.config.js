/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
// eslint-disable-next-line header/header
module.exports = {
  list: [
    { 
      label: 'Authentication',
      options: [
        {
          value: 'authentication.json',
          label: 'Authentication',
          path: '/docs/api/authentication'
        },
      ]
    },
    { 
      label: 'Livestream',
      options: [
        {
          value: 'livestream-management.json',
          label: 'Overlays',
          path: '/docs/api/livestream-management'
        },
        {
          value: 'livestream-metrics.json',
          label: 'Metrics',
          path: '/docs/api/livestream-metrics'
        },
      ]
    },
    { 
      label: 'Transcode',
      options: [
        {
          value: 'transcode-template.json',
          label: 'Template',
          path: '/docs/api/transcode-template'
        },
        {
          value: 'transcode-channel.json',
          label: 'Channel',
          path: '/docs/api/transcode-channel'
        },
      ]
    },
  ]
}