import { defineConfig } from 'dumi';
import path from 'path';
export default defineConfig({
  // disable mfsu for HMR
  mfsu: false,
  favicons: [
    'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
  ],
  autoAlias: false,
  outputPath: 'docs-dist',
  themeConfig: {
    hd: { rules: [] },
    rtl: true,
    name: 'dumi',
    logo: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
    footer: `Open-source MIT Licensed | Copyright © 2024-present
<br />
Powered by self`,
    socialLinks: {
      github: 'https://github.com/umijs/dumi',
    },
  },
  sitemap: { hostname: 'https://d.umijs.org' },
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'English' },
    { id: 'zh-HK', name: '繁体中文' },
  ],
  alias: {
    '@vincent-x/dumi-theme-legecy': path.resolve(__dirname, 'src'),
  },
});
