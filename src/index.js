const Drag = {}
Drag.install = (Vue, options) => {
  Vue.directive('drag', {
    inserted (el, binding) {
      el.style.zIndex = '9999999'
      /**
      * @param limit 入参
      */
      const limit = (binding.expression && binding.expression.match(/\d+/g)) || [0, 0, 0, 0]
      const top = ~~limit[0]
      const right = ~~limit[1]
      const bottom = ~~limit[2]
      const left = ~~limit[3]
      /**
      * @param clientWidth 屏幕宽度
      * @param clientHeight 屏幕高度
      */
      const clientWidth = document.body.clientWidth
      const clientHeight = document.body.clientHeight
      const elClientWidth = el.clientWidth
      const elClientHeight = el.clientHeight
      /**
      * @param rightBorderWidth 左边的极限值
      * @param bottomBorderHeight 下边极限值
      */
      const rightBorderWidth = clientWidth - elClientWidth - right
      const bottomBorderHeight = clientHeight - elClientHeight - bottom
      el.onmousedown = function (ev) {
        /**
        * 兼容IE
        */
        ev = ev || window.event
        el.style.cursor = 'move'
        const disX = ev.clientX - el.offsetLeft
        const disY = ev.clientY - el.offsetTop
        document.onmousemove = function (ev) {
          /**
          * 移动时剔除缓动效果
          */
          el.style.transition = ''
          /**
          * 兼容IE
          */
          ev = ev || window.event
          /**
          * 阻止默认事件
          */
          if (ev.preventDefault) {
            ev.preventDefault()
          } else {
            ev.returnValue = false
          }
          const moveX = ev.clientX - disX
          const moveY = ev.clientY - disY
          let l = (moveX - left > 0) ? moveX < rightBorderWidth ? moveX : rightBorderWidth : left
          let t = (moveY - top > 0) ? moveY < bottomBorderHeight ? moveY : bottomBorderHeight : top
          el.style.left = l + 'px'
          el.style.top = t + 'px'
        }
        document.onmouseup = function () {
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    }
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Drag)
}
export default Drag
