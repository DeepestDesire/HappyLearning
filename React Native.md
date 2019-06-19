# React Native

## run command

``` txt
    react-native run-ios
    如果没有这个命令的话，可以通过 npm install -g yarn react-native-cli ,这个命令来安装

```

## react-native run-ios 报错

- xcrun: error: unable to find utility "instruments", not a developer tool or in PATH

``` txt
    sudo xcode-select -s /Applications/Xcode.app/Contents/Developer/

```

## npm i 与 npm ci 的区别

``` txt
npm i 会改变 package-lock.json 文件。而 npm ci 会严格按照 package-lock.json 文件执行安装。

```

## link Sublime app  You can use $ sublime paht/to/file to open file.

``` txt
ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/sublime
```

## git set E-mail

``` txt
    git config --golbal user.email "349586823@qq.com"
```