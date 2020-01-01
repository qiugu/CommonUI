const { render } = require('ejs')
const components = require('../../components.json')
const version = require('../../package.json').version
const fs = require('fs')
const path = require('path')
const endLine = require('os').EOL

const OUTPUT = '../../src/index.js'
const template = `
import '../packages/icons'
<%_ Object.keys(components).forEach(function(name) { -%>
import <%-name%> from '<%-components[name]%>'
<%_ }) -%>

const components = [
  <%-Object.keys(components).join(',' + endLine) %>
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
  version: '<%-version-%>',
  install,
  <%-Object.keys(components).join(',' + endLine)%>
}
`
const entry = render(template, {
  components,
  version,
  endLine
})
console.log(entry)
const writable = fs.createWriteStream(path.resolve(__dirname, OUTPUT))
try {
  writable.write(entry)
  console.log('[build:entry]: entry file was generated successfully!')
} catch (err) {
  console.error('[build:entry]:entry file was generated failed!')
  throw err
}
writable.close()
