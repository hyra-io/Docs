// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hyra Support',
  tagline: 'Get help with Hyra',
  url: 'https://support.hyra.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  scripts: [
    {src: 'https://science.hyra.io/pls.js', defer: true, 'data-domain': 'support.hyra.io'},
  ],
  organizationName: 'hyra-io', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides',
        path: 'guides',
        routeBasePath: 'guides',
        sidebarPath: require.resolve('./guidesSidebars.js'),
        showLastUpdateTime: true,
        // ... other options
      },
    ],
  ],
  themeConfig:
    {
      colorMode: { disableSwitch: true, defaultMode: 'light' },
      navbar: {
        title: 'Hyra',
        logo: {
          alt: 'Hyra Logo',
          src: 'img/logo.svg',
          href: "https://hyra.io",
          target: "_self"
        },
        items: [
          {
            to: '/guides',
            label: 'Guides',
            position: 'left',
            activeBaseRegex: `/guides`,
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} Hyra`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: '7C25FEMOKP',
        apiKey: 'f26461a2f14dbd0e925f215b1b3c4c0e',
        indexName: 'hyra'
      },
    }
};

module.exports = config;
