// import 'core-js'
import Vue from 'vue'
import App from './App.vue'
import router from './route.config'
// import businessui from '../lib/business.common'
import businessui from '../src/index.js'
import './assets/styles/common.scss'
import hljs from 'highlight.js/lib/highlight'
import 'highlight.js/styles/github.css'
import javascript from 'highlight.js/lib/languages/javascript'
import html from 'highlight.js/lib/languages/htmlbars'
import DemoBlock from './components/demo-block.vue'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('html', html)

Vue.config.productionTip = false;
Vue.use(businessui)
Vue.component('demo-block', DemoBlock)

router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
