###
起動タスク
###
$config = require('../../package.json').config
$plugins = require '../plugins'


# タスクファイル
T_clean = require './clean'
T_copy = require './copy'
T_html = require './pug'
T_css = require './stylus'
T_js = require './babel'


# タスク実行
g = $plugins.gulp
$ = $plugins.$


# デフォルト
g.task 'default', ->
  process = undefined

  restart = ()->
    if process
      process.kill()

    process = $plugins.spawn 'gulp', ['start'], stdio:'inherit'

  g.watch 'gulp/**', restart
  restart()


# スタート
g.task 'start', ->
  g.watch T_copy.files, ->
    g.start T_copy.task.default

  g.watch T_html.files, ->
    g.start T_html.task.default

  g.watch T_css.files, ->
    g.start T_css.task.default

  g.watch T_js.files.demo, ->
    g.start T_js.task.demo







