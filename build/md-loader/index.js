const md = require('markdown-it')()

module.exports = function(source) {
  console.log('loader----------------------------')
  const content = md.render(source)
  return `
    <template>
      <div>
        ${content}
      </div>
    </template>
  `
}
