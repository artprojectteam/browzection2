###
Babelトランスパイル
###
$config = require('../../package.json').config
$plugin = require '../plugins'
$func = require '../func'

_ws = "#{$config.workspace.root}/#{$config.workspace.js}"

# 対象リスト
files =
  default: [
    "#{_ws}/#{$config.wildcard}/*.js"
    "!#{_ws}/_*.js"
  ]
  watch: [
    "#{_ws}/**"
  ]
  demo: [
    "#{$config.workspace.root}/js/demo.js"
  ]


# タスク名
task =
  default: 'babel'
  watch: 'babel:watch'
  demo: 'demo_js'


# export
module.exports =
  task: task
  files: files


# Babel オプション
getBabelOption =
  presets: [
    'es2015-without-strict'
    'stage-1'
  ]
  compact: false
  plugins: [
    ['transform-es2015-classes', {loose: true}]
  ]


# 実行
doTranspile = (watch, isProduction)->
  flg = true
  ops = {}
  input_file = "#{$config.workspace.root}/#{$config.workspace.js}/#{$config.babelify}"

  if watch == true
    ops.cache = {}
    ops.packageChache = {}
    ops.fullPaths = false
    bundler = $plugin.watchify $plugin.browserify input_file, ops
  else
    bundler = $plugin.browserify input_file, ops



  bundle = ->
    _d = new Date
    _d = new Date()
    h = _d.getHours()
    m = _d.getMinutes()
    s = _d.getSeconds()
    $func.messages "[#{h}:#{m}:#{s}] #{$config.babelify} Compile Start", $config.colors.yellow


    return bundler
    .transform $plugin.babelify, getBabelOption
    .require "./#{input_file}", {expose: $config.babelify}
    .bundle()
    .pipe $plugin.vSourceStream $config.babelify
    .pipe $plugin.vBuffer()
    .pipe $.if isProduction, $.stripDebug()
    .pipe g.dest $config.dest.output
    .pipe $.uglify
      compress:
        dead_code: false
      preserveComments: 'some'
    .on 'error', (err)->
      flg = false
      console.log err
      $func.notifier err, task.default
      @.emit 'end'
    .on 'end', ->
      if flg == true
        $func.completed task.default
    .pipe $.rename(
      extname: '.min.js'
    )
    .pipe g.dest $config.dest.output
    .pipe g.dest $config.dest.demo



  bundler
  .on 'update', bundle
  .on 'log', ->
    flg = true

  return bundle()



# 通常のbabelトランスパイル
doNormalTranspaile = ()->
  flg = true

  return g.src files.demo
  .pipe $.plumber
    errorHandler: (err)->
      flg = false
      $func.notifier err, task.demo
  .pipe $.babel getBabelOption
  .pipe g.dest "#{$config.dest.demo}/js"
  .on 'end', ->
    if flg == true
      $func.completed task.demo


# タスク実行
g = $plugin.gulp
$ = $plugin.$


g.task task.default, ->
  watch = $func.args['watch'] == true
  isProduction = $func.getEnvPro()

  return doTranspile watch, isProduction


# demo用
g.task task.demo, ->
  return doNormalTranspaile()










