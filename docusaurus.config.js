// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Centro de Estudiantes Arcilla',
  tagline: 'Información y recursos para estudiantes',
  favicon: 'img/fav_icon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Sitio 100% en español, sin selector de idiomas.
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // El plugin de docs "default" se reemplaza por 3 instancias
        // independientes (Ingresantes / Estudiantes / FAQ), ver `plugins` abajo.
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'ingresantes',
        path: 'ingresantes',
        routeBasePath: 'ingresantes',
        sidebarPath: './sidebarsIngresantes.js',
      }),
    ],
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'estudiantes',
        path: 'estudiantes',
        routeBasePath: 'estudiantes',
        sidebarPath: './sidebarsEstudiantes.js',
      }),
    ],
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'faq',
        path: 'faq',
        routeBasePath: 'faq',
        // Página única, no necesita sidebar.
        sidebarPath: false,
      }),
    ],
  ],

  // Google Fonts: Bricolage Grotesque
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap',
      type: 'text/css',
    },
  ],
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        logo: {
          alt: 'Centro de Estudiantes Arcilla',
          src: 'img/arcilla_logo_blanco.png',
        },
        items: [
          {
            type: 'docSidebar',
            docsPluginId: 'ingresantes',
            sidebarId: 'ingresantesSidebar',
            position: 'left',
            label: 'Ingresantes',
          },
          {
            type: 'docSidebar',
            docsPluginId: 'estudiantes',
            sidebarId: 'estudiantesSidebar',
            position: 'left',
            label: 'Estudiantes',
          },
          {
            type: 'doc',
            docsPluginId: 'faq',
            docId: 'faq',
            position: 'left',
            label: 'Preguntas frecuentes',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Seguinos',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/cecc_fcc/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Centro de Estudiantes Arcilla.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
