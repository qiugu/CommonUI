import QList from './src/List.vue'
import './src/list.scss'

QList.install = function(Vue) {
  Vue.component(QList.name, QList)
}

export default QList
