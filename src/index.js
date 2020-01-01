import '../packages/icons'
import QFloating from '../packages/floating/index.js'
import QDrawer from '../packages/drawer/index.js'
import QFilter from '../packages/filter/index.js'

const components = [
  QFloating,
  QDrawer,
  QFilter
]

// eslint-disable-next-line no-unused-vars
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
  QFilter
}
