const md = require('./config')
const compiler = require('vue-template-compiler')
const { compileTemplate } = require('@vue/component-compiler-utils')

function genInlineComponentText(template, script) {
  const finalOptions = {
    source: `<div>${template}</div>`,
    filename: 'inline-component',
    compiler
  };
  const compiled = compileTemplate(finalOptions)
  let demoComponentContent = `
    ${compiled.code}
  `

  script = script.trim();
  if (script) {
    script = script.replace(/export\s+default/, 'const democomponentExport =')
  } else {
    script = 'const democomponentExport = {}'
  }
  demoComponentContent = `(function() {
    ${demoComponentContent}
    ${script}
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })()`
  return demoComponentContent
}

module.exports = function(source) {
  const content = md.render(source)

  const startTag = '<!--'
  const startLen = startTag.length
  const endTag = '-->'

  const startIndex = content.indexOf(startTag)
  const endIndex = content.indexOf(endTag, startIndex + startLen)
  let output = [] // 最终要输入的内容字符串
  let start = 0 // 字符串开始的位置
  let demoContent = '' // 实例demo部分的字符串
  let id = 0
  let componenetsString = ''

  if (startIndex !== -1 && endIndex !== -1) {
    // 从开始到demo代码部分截取放入最终输出内容中
    output.push(content.slice(start, startIndex))
    // 实例代码的内容
    demoContent = content.slice(startIndex + startLen, endIndex)
    // 将实例代码中的script和style部分替换掉，这样就剩下template模板部分
    const html = demoContent.replace(/<(script|style)>[\s\S]+<(\/\1)>/g, '').trim()
    // 匹配script标签的内容
    const rawScript = demoContent.match(/<(script)>([\s\S]+)<\/\1>/)
    let script = rawScript && rawScript[2] ? rawScript[2].trim() : ''

    // 生成组件的渲染函数
    const demoComponent = genInlineComponentText(html, script)

    const demoComponentName = `element-demo${id}`
    output.push(`<template slot="source"><${demoComponentName} /></template>`)
    componenetsString += `${JSON.stringify(demoComponentName)}: ${demoComponent},`
  }

  let pageScript = ''
  if (componenetsString) {
    pageScript = `<script>
      export default {
        name: 'component-doc',
        components: {
          ${componenetsString}
        }
      }
    </script>`
  } else if (content.indexOf('<script>') === 0) {
    start = content.indexOf('<script>')
    let end = content.indexOf('</script>')
    pageScript = content.slice(start, end)
  }
  output.push(content.slice(start))
  return `
    <template>
      <div>
        ${output.join()}
      </div>
    </template>
    ${pageScript}
  `
}
