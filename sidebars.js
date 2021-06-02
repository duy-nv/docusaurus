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
        type: 'link',
        label: 'To new page',
        href: '/doc-specs',
      },
      {
        id: 'api/auth',
        type: 'doc',
        label: 'Auth Service',
      },
      {
        id: 'api/livestream',
        type: 'doc',
        label: 'Livestream Service'
      }
    ],
  },
};
