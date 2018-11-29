# maple-theme

> Theme Directive for Vue.

[![npm](https://img.shields.io/npm/v/maple-theme.svg?logo=npm)](https://www.npmjs.com/package/maple-theme) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/maple-theme.svg)](https://www.npmjs.com/package/maple-theme) [![GitHub](https://img.shields.io/github/license/Fonigle/maple-theme.svg)](https://github.com/Fonigle/maple-theme)

## Feature

-   vue directive `v-theme` instead of css for colors, backgrounds, borders or box-shadow.
-   theme or brightness switch by on function.
-   corresponding scss mixins for flexible using.

## HomePage

[MapleTheme](http://theme.maple-ui.com)

## Useage

#### Install

```shell
  $ npm install --save maple-theme
```

#### Quick Start

index.js:

```js
import Vue from 'vue';
import MapleTheme from 'maple-theme';

Vue.use(MapleTheme);
```

app.vue:

```html
<template>
    <div class="app"
         v-theme:background="15">
        <span v-theme:color="0">Maple Theme</span>
    </div>
</temlate>
```

For more information , See [Guide](http://theme.maple-ui.com/guide).


## LICENSE
[MIT](https://github.com/Fonigle/maple-theme/blob/master/LICENSE)
