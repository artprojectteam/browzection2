###
拡張関数
###
$config = require('../package.json').config
$notify = require('node-notifier').NotificationCenter
$colors = $config.colors

module.exports =
  notifier: (err, task)->
    console.log "#{$colors.red + err.message + $colors._reset}"
    notifier = new $notify()
    notifier.notify(
        message: err.message
        title: task + '--Task Error'
        sound: 'Glass'
    )
  messages: (mes, color = $colors.yellow)->
    @.logs mes, color
  started: (task, mes = '')->
    @.logs $colors.green, "'#{task}' start... #{mes}"
  completed: (task, mes = '')->
    @logs $colors.blue, "--'#{task}' completed !! #{mes}"
  logs: (color, mes)->
    console.log color + mes + $colors._reset