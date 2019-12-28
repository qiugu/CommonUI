import '../packages/icons'
import QFloating from '../packages/floating/Floating.vue'
import QDrawer from '../packages/drawer/Drawer.vue'
import ConditionFilter from '../packages/filter/ConditionFilter.vue'

const components = [
  QFloating,
  QDrawer,
  ConditionFilter
]

const install = (Vue, options = {}) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
  version: '1.0.0',
  install,
  QFloating,
  QDrawer,
  ConditionFilter
}