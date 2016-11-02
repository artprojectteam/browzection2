###
ファイルのコピー
###
$config = require('../../package.json').config
$plugins = require '../plugins'
$func = require '../func'
files = []
ws = "#{$config.workspace.root}/#{$config.wildcard}/"

# 対象リスト
extList =
  img: '*.+(jpg|jpeg|png|gif|svg|ico)'
  json: '*.json'
  txt: '*.txt'
  xml: '*.xml'
  font: '*.+(ttf|otf|eot|woff*)'
  js: '*.js'



# ファイルリストの生成
for key of extList
  target = ws + extList[key]
  ignore = "!#{ws}_#{extList[key]}"

  files.push target
  files.push ignore


# Babelは除外
files.push "!#{$config.workspace.root}/#{$config.workspace.js}/**"
files.push "!#{$config.workspace.root}/js/demo.js"


# タスク名
task =
  default: 'copy'


# export
module.exports =
  files: files
  task: task


# タスク実行
g = $plugins.gulp
$ = $plugins.$


# デフォルトタスク(コピー)
g.task task.default, [], ->
  $func.started task.default

  return g.src files
  .pipe $.changed $config.dest.demo
  .pipe g.dest "#{$config.dest.demo}/"
  .on 'end', ->
    $func.completed task.default





