const Config = require('markdown-it-chain')
const Anchor = require('markdown-it-anchor')
const containers = require('./containers')
const overrideFence = require('./fence')

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

  .plugin('containers').use(containers).end()

const md = config.toMd()
overrideFence(md)

module.exports = md
