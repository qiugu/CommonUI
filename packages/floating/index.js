import QFloating from './src/Floating.vue'
import './src/floating.scss'

QFloating.install = function(Vue) {
  Vue.component(QFloating.name, QFloating)
}

export default QFloating
