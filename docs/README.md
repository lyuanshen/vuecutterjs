<<<<<<< HEAD
---
home: true
heroImage: /logo.svg
actionText: Get Started →
actionLink: /guide/
features:
  - title: Customizable
    details: Fully customizable, you can customize the size of the crop box, the size of the crop container and the background color of the container
  - title: Support multiple image formats
    details: Support Blob, File, Url and other image formats, and support local uploading of images
  - title: Rotate zoom
    details: Support moving images, cropping pictures, zooming in and out, moving up and down, left and right, fixed ratio, fixed size, remote picture cropping
  - title: Easy to use
    details: It only requires a small amount of code to implement the cutting function, and you can also adjust the parameters to suit your own business needs

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
