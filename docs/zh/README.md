---
home: true
heroImage: /logo.svg
actionText: 开始上手 →
actionLink: /zh/guide/
features:
  - title: 可定制
    details: 完全可定制化， 你可以自定义裁剪框的大小，裁剪容器的大小以及容器的背景颜色
  - title: 上支持多种图片格式
    details: 支持 Blob，File，Url等图片格式，以及支持本地上传图片
  - title: 旋转缩放
    details: 支持移动图像，裁剪图片，放大缩小图片，上下左右移动，固定比例，固定尺寸，远程图片裁剪
  - title: 简单易用
    details: 只需要很少的代码就可以实现裁剪功能，也可以通过调整参数以适应你自己的业务需求

footer: MIT Licensed | Copyright © 2020.1-present Lyuanshen
---

## A simple example

```javascript
import Vue from 'vue'
import VueCutter from 'vue-cutter'

Vue.use(VueCutter)
```

```vue
<template>
  <div>
    <vue-cutter
      :container-width="options.containerWidth"
      :container-height="options.containerHeigh"
      :image="options.image"
    ></vue-cutter>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return{
        options: {
          containerWidth: 450,
          containerHeigh: 300,
          image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4110377719,1460950412&fm=26&gp=0.jpg'
        }
      }
    }
  }
</script>
```