/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
  "ui": {
    "port": 3001,
    "weinre": {
      "port": 8080
    }
  },
  "files": ["./demo/**/*"],      // watch対象ファイルorディレクトリ
  "watchOptions": {
    "ignoreInitial": true,
    "ignored": '*.txt'
  },
  "server": {
    "baseDir": "./demo"
  },
  "startPath": null,      // 起動時に表示したいページを指定(ルート以外の場合)
  "proxy": false,
  "port": 3000,
  "middleware": false,
  "serveStatic": [],
  "ghostMode": {
    "clicks": false,
    "scroll": false,
    "forms": {
      "submit": false,
      "inputs": false,
      "toggles": false
    }
  },
  "logLevel": "info",
  "logPrefix": "BS",
  "logConnections": false,
  "logFileChanges": true,
  "logSnippet": true,
  "rewriteRules": false,
  "open": "local",
  "browser": "default",
  "xip": false,
  "hostnameSuffix": false,
  "reloadOnRestart": true,
  "notify": false,
  "scrollProportionally": true,
  "scrollThrottle": 0,
  "scrollRestoreTechnique": "window.name",
  "scrollElements": [],
  "scrollElementMapping": [],
  "reloadDelay": 0,
  "reloadDebounce": 0,
  "plugins": [],
  "injectChanges": true,
  "minify": true,
  "host": null,
  "codeSync": true,
  "timestamps": true,
  "clientEvents": [
    "scroll",
    "scroll:element",
    "input:text",
    "input:toggles",
    "form:submit",
    "form:reset",
    "click"
  ],
  "socket": {
    "socketIoOptions": {
      "log": false
    },
    "socketIoClientConfig": {
      "reconnectionAttempts": 50
    },
    "path": "/browser-sync/socket.io",
    "clientPath": "/browser-sync",
    "namespace": "/browser-sync",
    "clients": {
      "heartbeatTimeout": 5000
    }
  },
  "tagNames": {
    "less": "link",
    "scss": "link",
    "css": "link",
    "jpg": "img",
    "jpeg": "img",
    "png": "img",
    "svg": "img",
    "gif": "img",
    "js": "script"
  }
};