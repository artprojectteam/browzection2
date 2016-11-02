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
  bShim: require 'browserify-shim'
  browserify: require 'browserify'
  babelify: require 'babelify'
  debowerify: require 'debowerify'
  watchify: require 'watchify'
  vBuffer: require 'vinyl-buffer'
  vSourceStream: require 'vinyl-source-stream'
