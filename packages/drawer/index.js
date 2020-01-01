import QDrawer from './src/Drawer.vue'
import './src/drawer.scss'

QDrawer.install = function(Vue) {
  Vue.component(QDrawer.name, QDrawer)
}

export default QDrawer
