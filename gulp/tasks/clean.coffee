###
ディレクトリのクリーンアップ
###
$config = require('../../package.json').config
$plugins = require '../plugins'

# タスク名
task =
  default: 'clean'

g = $plugins.gulp

# タスク実行
g.task task.default, (callback)->
  return $plugins.del ["#{$config.dest.demo}/#{$config.wildcard}/*", "#{$config.dest.output}/#{$config.wildcard}/*"], callback






