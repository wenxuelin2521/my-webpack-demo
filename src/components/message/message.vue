<!-- 自定义message组件 -->
<template>
  <transition>
    <div class="my-message-component" v-if="visible">
      <div class="icon">
        <i>i</i>
      </div>
      <div class="content">
        <h3>这是一级提示</h3>
        <p>这是二级提示</p>
      </div>
      <div class="close">
        <a href="javascript:void(0);">x</a>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      message: '', // 一级内容
      subMessage: '', // 二级内容
      visible: false,
      duration: 3000,
      type: 'info',
      timer: null,
      closed: false
    }
  },
  methods: {
    startTimer () {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.destoryElement()
        }, this.duration)
      }
    },
    clearTimer () {
      clearTimeout(this.timer)
    },
    destoryElement () {
      this.visible = false
      setTimeout(() => {
        this.$destroy()
        this.$el.parentNode.removeChild(this.$el)
      }, 500)
    }
  },
  mounted () {
    this.visible = true
    this.startTimer()
  }
}
</script>

<style lang="scss" scoped>
@import './message.scss';
</style>
