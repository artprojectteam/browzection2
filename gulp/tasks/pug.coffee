###
Pug コンパイル
###
$config = require('../../package.json').config
$plugins = require '../plugins'
$func = require '../func'

dir_in = "#{$config.workspace.root}/#{$config.workspace.html}/#{$config.wildcard}"

files = [
  "#{dir_in}/*.pug"
  "!#{dir_in}/_*.pug"
]


# タスクリスト
task =
  default: 'pug'


# export
module.exports =
  task: task
  files: files
  dir: dir_in


# タスク実行
g = $plugins.gulp
$ = $plugins.$


g.task task.default, ->
  $func.started task.default
  flg = true

  return g.src files
  .pipe $.plumber
    errorHandler: (err)->
      flg = false
      $func.notifier err, task.default
  .pipe $.pug
    doctype: 'html'
    pretty: true
    cache: true
  .pipe g.dest $config.dest.demo
  .on 'end', ->
    if flg == true
      $func.completed task.default






