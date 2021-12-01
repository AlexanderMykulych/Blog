import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions, NavLink } from 'vuepress'
import type { ViteBundlerOptions } from '@vuepress/bundler-vite'
const fs = require("fs")
const path = require("path")

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
    lang: 'en-US',
    title: 'AlexMyk',
    description: 'Alexander Mykulych',

    themeConfig: {
        sidebar: [
            {
                text: 'Posts',
                link: '/posts/',
                children: getSideBar("posts")
            },
        ]
    },
    bundler: '@vuepress/bundler-vite',
    // options for vite bundler
    bundlerConfig: {
        // see below
    },
});

function getSideBar(folder) {
    const extension = [".md"];
    
    const files = fs
      .readdirSync(path.join(`${__dirname}/../${folder}`))
      .filter(
        (item) =>
          item.toLowerCase() != "readme.md" &&
          fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
          extension.includes(path.extname(item))
      ).map(x => `/${folder}/${x}`);
    console.log(files);
    return files;
  }