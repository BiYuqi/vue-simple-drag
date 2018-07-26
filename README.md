### 插件待发布
```js
部分细节需要完善
```
### 预计使用方式(本地已经测试通过)
```js
npm i vue-simple-drag

// 入口文件引入
import VueDrag from 'vue-simple-drag'

Vue.use(VueDrag)
```

```html
<!-- 该方式默认全屏幕拖拽 -->
<div v-drag>
  我是无忧无虑的拖拽狂
</div>

<!-- 该方式支持限定范围 -->
分别是 top right bottom left
<div v-drag="[90, 0, 0, 230]">
  我是被限制的拖拽狂
</div>
```
### TODO
  - 完善部分功能
  - 移除不需要的npm包
  - 编写使用文档
  - 测试demo
