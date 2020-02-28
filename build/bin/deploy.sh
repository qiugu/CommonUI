#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 进入项目主目录下
cd ../../

# 打包示例项目
npm run build:example

# 提交信息
git init
git add -A
git commit -m 'build: deploy'

# 推送到仓库
git subtree push --prefix dist origin gh-pages
