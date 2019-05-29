import Vue from 'vue'
import MessageTemplate from './message.vue'
// 使用extend方法创建vue的子类
let MessageConstructor = Vue.extend(MessageTemplate)

// 使用这个方法调用hello组件
function Message (options) {
  options = options || {}
  if (typeof options === 'string') {
    options = {
      text: options
    }
  }

  // 实例化子组件，然后获取到DOM结构并挂载到body上
  const messageInstence = new MessageConstructor({ data: options })
  messageInstence.vm = messageInstence.$mount()
  document.body.appendChild(messageInstence.vm.$el)
}
export default Message
