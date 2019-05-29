## how to use
- 引入组件，注册组件，绑定方法
- 入口
```
import Message from '@/components/message/message.js'

Vue.component('MessageCom', Message)
Vue.prototype.$mdMessage = Message

```
- 组件中
this.$mdMessage('这是一条消息提示')