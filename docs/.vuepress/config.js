

module.exports = {
  base: "/",
  host: "127.0.0.1",
  port: "8099",
  serviceWorker: true,

  locales: {
    "/": {
      lang: "en-US",
      title: "VueCutter.js",
      description:
        "VueCutter - A customizable  picture cropping plugin for PC and mobile",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "VueCutter.js",
      description: "VueCutter - 一个自定义图片裁剪的插件适用于PC和移动端",
    },
  },
  head: [
    ["link", {rel: "icon", href: `favicon.ico`}]
  ],

  themeConfig: {
    repo: 'lyuanshen/vue-cutter',
    docsRepo: 'lyuanshen/vuecutterjs',
    editLinks: true,
    docsDir: "docs",
    docsBranch: "master",
    sidebarDepth: 3,
    locales: {
      '/': {
        label: "English",
        selectText: "Languages",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated", // string | boolean
        nav: [
          {
            text: "Guide",
            link: "/guide/",
          },
          {
            text: "Demo",
            link: "/demo/",
          },
          {
            text: "My opensources",
            items: [
              {
                text: "Rcpress",
                link: "https://github.com/YvesCoding/rcpress",
              },
              {
                text: "magic-scroll",
                link: "https://github.com/YvesCoding/magic-scroll",
              },
            ],
          }
        ],
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh",
          },
        }
      },
      '/zh/': {
        label: "简体中文",
        selectText: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新", // string | boolean
        nav: [
          {
            text: "指南",
            link: "/zh/guide/",
          },
          {
            text: "Demo",
            link: "/zh/demo/",
          },
          {
            text: "我的开源项目",
            items: [
              {
                text: "Rcpress",
                link: "https://github.com/YvesCoding/rcpress",
              },
              {
                text: "magic-scroll",
                link: "https://github.com/YvesCoding/magic-scroll",
              },
            ],
          },
        ],
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新",
          },
        }
      }
    }
  }
}
