###
Pug コンパイル
###
$config = require('../../package.json').config
$plugins = require '../plugins'
$func = require '../func'

dir_in = "#{$config.workspace.root}/#{$config.workspace.css}/#{$config.wildcard}"

files = [
  "#{dir_in}/*.styl"
  "!#{dir_in}/_*.styl"
]


# タスクリスト
task =
  default: 'stylus'


# export
module.exports =
  task: task
  files: files
  dir: dir_in


# タスク実行
g = $plugins.gulp
$ = $plugins.$

plz =
  autoprefixer:
    browsers: ["last 3 version", "> 1%", "ie 9", "ios 7", "Android 2.3"]    # ベンダプレフィックス
  rem: true
  opacity: false
  pseudoElements: false
  mqpacker: true
  minifier: false


g.task task.default, ->
  $func.started task.default
  flg = true

  return g.src files
  .pipe $.plumber(
    errorHandler: (err)->
      flg = false
      $func.notifier err, task.default
      @.emit 'end'
  )
  .pipe $.filenames 'stylus', {overrideMode: true}
  .pipe $.stylus
    'include css': true
  .pipe $.pleeease plz
  .pipe g.dest $config.dest.demo
  .on 'end', ->
    if flg == true
      $func.completed task.default






