import QFilter from './src/Filter.vue'
import './src/filter.scss'

QFilter.install = function(Vue) {
  Vue.component(QFilter.name, QFilter)
}

export default QFilter
