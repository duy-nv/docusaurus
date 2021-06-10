/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/** @type {import('@docusaurus/types').DocusaurusConfig} */
const specConfigs = require('./specs.config');

module.exports = {
  title: 'Sigma OTT',
  tagline: 'A High-Performance, Logs, Metrics, & Events Router',
  url: 'https://sigmaott.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/favicon.ico',
  organizationName: 'thudojsc',
  projectName: 'sigma-ott',
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Sigma',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/livestream/about/doc-platform-introduction',
          label: 'Livestream',
          position: 'left',
        },
        {
          to: '/docs/drm/about/introduction',
          label: 'DRM',
          position: 'left',
        },
        {
          to: '/docs/api/authentication',
          label: 'APIs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'Livestream platform',
              to: 'docs/livestream/about/doc-platform-introduction/',
            },
            {
              label: 'The Team',
              to: 'community/#team',
            },
            {
              label: 'Contact Us',
              to: 'contact/',
            },
          ],
        },
        {
          title: 'Components',
          items: [
            {
              label: 'Api',
              to: 'docs/api/doc-server-introduction/',
            },
            {
              label: 'Android Sdk',
              to: 'docs/sdk/android/android/',
            },
            {
              label: 'iOS Sdk',
              to: 'docs/sdk/ios/doc-avplayershls-plugin/',
            },
          ],
        },
        // {
        //   title: 'Setup',
        //   items: [
        //     {
        //       label: 'How to call',
        //       to: 'docs/api/doc-server-introduction/',
        //     }
        //   ],
        // },
        {
          title: 'Community',
          items: [
            {
              label: 'Chat',
              to: 'https://gitter.im/thudo-multimedia-jsc/community',
            },
            {
              label: 'Github',
              to: 'https://github.com/Thudo-jsc',
            },
            {
              label: 'Facebook',
              to: 'https://www.facebook.com/thudoconfession/',
            },
            {
              label: 'Mailing List',
              to: 'mailing_list/',
            },
            {
              label: 'Blog',
              to: 'blog/',
            },
          ],
        },
      ],
      logo: {
        alt: 'Thudomultimedia.vn',
        src: '/img/logo_thudo.svg',
        href: 'https://thudomultimedia.vn/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Thudo, Jsc.`,
    },
    algolia: {
      apiKey: '2356c5cb76b57b43624c6450b0a031cc',
      indexName: 'timberio_vector',
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    specs: specConfigs,
    prism: {
      // theme: require("prism-react-renderer/themes/dracula"),
      additionalLanguages: ["java", "ruby", "php", "objectivec"],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // docLayoutComponent: '@site/src/theme/DocPage',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
      },
    ],
  ],
  // stylesheets: [
  //  'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
  // ],
  stylesheets: [
    // 'https://fonts.googleapis.com/css?family=Ubuntu|Roboto|Source+Code+Pro',
    'https://at-ui.github.io/feather-font/css/iconfont.css',
  ],
};

