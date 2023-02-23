# vetur

Vetur 版本 v0.37.2

写了这个 demo，大致测试了一下，发现是 .vecode/setting.json 配置文件导致的

具体是下面这句，配置了以后 ctrl + s 保存 App.vue 文件的时候，script 标签里的内容就会被格式化成 [object Promise]

"vetur.format.defaultFormatter.js": "prettier-eslint"
