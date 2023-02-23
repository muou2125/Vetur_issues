# vetur

Vetur 版本 v0.37.2

写了这个 demo，大致测试了一下，发现是 .vecode/setting.json 配置文件导致的

具体是下面这句，配置了以后 ctrl + s 保存 App.vue 文件的时候，script 标签里的内容就会被格式化成 [object Promise]

"vetur.format.defaultFormatter.js": "prettier-eslint"

 .vecode/setting.json 配置内容为：
{
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.options": {
    "extensions": [
      ".js",
      ".vue",
      ".ts",
      ".tsx"
    ]
  },
  "eslint.validate": [
    "vue",
    "html",
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact"
  ],
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatter.js": "prettier-eslint"
}
