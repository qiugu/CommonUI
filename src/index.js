import Floating from '../packages/floating/Floating.vue'

const components = [
  Floating
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
  Floating
}