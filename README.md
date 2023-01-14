# dumi-theme-legecy

[![NPM version](https://img.shields.io/npm/v/dumi-theme-legecy.svg?style=flat)](https://npmjs.org/package/dumi-theme-legecy)
[![NPM downloads](http://img.shields.io/npm/dm/dumi-theme-legecy.svg?style=flat)](https://npmjs.org/package/dumi-theme-legecy)

A theme package for the [dumi](https://d.umijs.org) framework.

A Dumi 1.x theme for Dumi 2.0, Base on `dumi-theme-default`, this project is work in progress.

基于2.x的默认主题修改的1.x主题,只修改了部分样式. WIP

## Usage

Install this theme into `devDependencies`:

```bash
$ pnpm add dumi-theme-legecy -D
```

That's all, now you can execute `dumi dev` and enjoy this theme.

## Options

TODO

## Development

```bash
$ pnpm install
```

After the dependencies are installed, a symlink from `example/.dumi/theme` to `../../src` will be created automatically, the symlink makes dumi load our theme package as a local theme, so we can start the example directly, HMR is also available:

```bash
# switch to example directory
$ cd example

# start dev server to preview
npm run dev
```

> Note: all Node.js-runtime files should be put into `src/plugin` directory, `father-plugin-dumi-theme` will transform them to CommonJS dist automatically.

dumi theme development documentation: https://d.umijs.org/theme

## LICENSE

MIT
