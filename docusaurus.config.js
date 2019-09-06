/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'My Site',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'AiTmed',
      logo: {
        alt: '',
        src: 'img/appIcon.png',
      },
      links: [
        {
          to: 'docs/aitmed-react',
          label: 'Docs',
          position: 'left',
        },
        // {
        //   to: 'blog',
        //   label: 'Blog',
        //   position: 'left',
        // },
        {
          href: 'https://aitmed.com',
          label: 'Web',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: '@aitmed/react',
              to: 'docs/aitmed-react',
            },
            {
              label: '@aitmed/sdk',
              to: 'docs/aitmed-sdk',
            },
            {
              label: '@aitmed/utils',
              to: 'docs/aitmed-utils',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'Repository',
          items: [
            {
              label: '@aitmed/react',
              to: '',
            },
          ],
        },
      ],
      logo: {
        alt: 'AiTmed Logo',
        src: 'img/appIconWhite.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} AiTmed`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
