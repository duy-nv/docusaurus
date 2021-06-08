/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  // mainSidebar: {
    livestream: [
      {
        type: 'category',
        label: 'About',
        items: [
          "livestream/about/doc-platform-introduction"
        ],
      },
      {
        type: 'category',
        label: 'Platform API',
        collapsed: false,
        items: [
          {
            type: 'category',
            label: 'How to call',
            items: [
              "livestream/api/doc-server-introduction", 
              "livestream/api/doc-server-authorization", 
              "livestream/api/doc-server-result"
            ],
          },
          {
            type: 'category',
            label: 'Channel',
            items: [
              "livestream/api/api-server-channel"
            ]
          },
        ],
      },
      {
        type: 'category',
        label: 'Client SDK',
        items: [
          {
            type: 'category',
            label: 'Android SDK',
            items: [
              // "livestream/sdk/android/android", 
              "livestream/sdk/android/record",
              {
                type: 'category',
                label: 'Playback SDK',
                items: [
                  "livestream/sdk/android/playback/exo-plugin"
                ]
              }
            ]
          },
          {
            type: 'category',
            label: 'iOS SDK',
            items: [
              "livestream/sdk/ios/doc-avplayershls-plugin", 
              "livestream/sdk/ios/doc-sigma-livestream"
            ]
          }
        ],
      },
    ],
    drm: [
      {
        type: 'category',
        label: 'About',
        collapsed: false,
        items: [
          "drm/about/introduction",
        ],
      },
      {
        type: 'category',
        label: 'Integrate Guide',
        collapsed: false,
        items: [
          'drm/guide/android',
          'drm/guide/ios',
          'drm/guide/web'
        ],
      },
    ],
    // API:[
    //   {
    //     id: 'api/basic-spec',
    //     type: 'doc',
    //   },
    //   {
    //     id: 'api/markdown-headings',
    //     type: 'doc',
    //   },
    //   {
    //     id: 'api/openapi-3.0-json',
    //     type: 'doc',
    //   },
    //   {
    //     id: 'api/swagger-2.0-json',
    //     type: 'doc',
    //   },
    //   {
    //     id: 'api/yaml-data-types',
    //     type: 'doc',
    //   },
    //   {
    //     id: 'api/auth',
    //     type: 'doc',
    //   },
    //   {
    //     id: 'api/transcode',
    //     type: 'doc',
    //   }
    // ],
  // },
};
