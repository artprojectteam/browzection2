# browzection2

User Agentを利用しアクセスしている主要なブラウザの情報をhtmlクラスに挿入
JavaScriptの変数として利用も可能

@author: Nobuyuki Kondo(art project team)<br>
@support: IE9+, Chrome, Firefox, Safari, Android 2.x, Android 4+, iOS7+

※IE8以下古いブラウザに対応させる場合は[fallback_method.js](https://github.com/artprojectteam/fallback_method)などを利用してメソッドを対応させる必要があります<br>
※User Agentは偽装が可能なので取得データが正しいとは限らないので注意

[デモページ](http://demo.artprojectteam.jp/browzection2/)


## install

```
bower install browzection2 --save
npm install browzection2 --save-dev
```


## Used JavaScript

JavaScript内で呼び出したい場合は下記で呼び出して利用可能。

```
var BRZ = require('browzection2.js');
```

※先にbrowzection2.jsを読み込んでおくこと

## 付与されるクラス一覧

該当しない場合は接頭辞に`no-`を付与

### ブラウザ

- .(no-)chrome
- .(no-)safari
- .(no-)mobile_safari
- .(no-)firefox
- .(no-)msie
- .(no-)msie6
- .(no-)msie7
- .(no-)msie8
- .(no-)msie9
- .(no-)msie10
- .(no-)msie11
- .(no-)msie_edge
- .(no-)android_default

### エンジン

- .(no-)webkit
- .(no-)gecko


### タブレット

- .(no-)iPad
- .(no-)androidTablet


### モバイル

- .(no-)iPhone
- .(no-)iPod
- .(no-)android


### デバイス

- .(no-)tablet
- .(no-)mobile
- .(no-)desktop


### OS

- .(no-)windows
- .(no-)osx
- .(no-)ios
- .(no-)ios7
- .(no-)ios8
- .(no-)ios9
- .(no-)ios10
- .(no-)android_2_3
- .(no-)android_4_0
- .(no-)android_4_1
- .(no-)android_4_2
- .(no-)android_4_3
- .(no-)android_4_4
- .(no-)android_5_0
- .(no-)android_5_1
- .(no-)android_6_0


