const Config = require('markdown-it-chain')
const Anchor = require('markdown-it-anchor')

const config = new Config()
config
  .options.html(true).end() // 启用html标签
  .plugin('anchor').use(Anchor, [
    {
      level: 2,
      permalink: true,
      permalinkBefore: true
    }
  ]).end()

const md = config.toMd()

module.exports = md
