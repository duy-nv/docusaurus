/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  someSidebar: {
    DRM: [{
      type: 'doc',
      label: 'Introduction',
      id: 'drm/about/introduction'
    }, {
      type: 'category',
      label: 'Integrate Guide',
      items: [
        'drm/guide/android',
        'drm/guide/ios',
        'drm/guide/web'
      ]
    }],
    Livestream: ['mdx'],
    API:[
      {
        id: 'api/basic-spec',
        type: 'doc',
      },
      {
        id: 'api/markdown-headings',
        type: 'doc',
      },
      {
        id: 'api/openapi-3.0-json',
        type: 'doc',
      },
      {
        id: 'api/swagger-2.0-json',
        type: 'doc',
      },
      {
        id: 'api/yaml-data-types',
        type: 'doc',
      },
      {
        id: 'api/auth',
        type: 'doc',
      },
      {
        id: 'api/transcode',
        type: 'doc',
      }
    ],
  },
};
