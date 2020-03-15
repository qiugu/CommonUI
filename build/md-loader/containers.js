const mdContainer = require('markdown-it-container')

module.exports = md => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/)
    },
    render(token, idx) {
      // 匹配标记的代码块
      const m = token[idx].info.match(/^demo\s*(.*)$/)
      // 如果匹配到的话，
      const description = m && m.length > 1 ? m[1] : ''
      if (token[idx].nesting === 1) {
        const content = token[idx + 1].type === 'fence' ? token[idx + 1].content : ''
        return `
          <demo-block>
            '${description ? `<div>${md.render(description)}</div>` : ''}'
            <!--demo${content}-->
          </demo-block>
        `
      }
      return '</demo-block>'
    }
  })
}
