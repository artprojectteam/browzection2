###
各種プラグインの読み込み
###
module.exports =
  gulp: require 'gulp'
  $: require('gulp-load-plugins')()
  spawn: require('child_process').spawn
  rimraf: require 'rimraf'
  del: require 'del'
  _: require 'lodash'
