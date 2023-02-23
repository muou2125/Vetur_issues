// 参考链接 https://prettier.io/docs/en/options.html

module.exports = {
  printWidth: 120, //行最大长度
  tabWidth: 2, // tab 使用两个空格
  useTabs: false, // 不使用制表符缩进，使用空格缩进
  semi: true, // 代码需要分号结尾
  singleQuote: true, // 单引号
  bracketSpacing: true, // 对象左右两侧需要空格
  jsxBracketSameLine: true, // html 关闭标签换行
  endOfLine: 'auto', //换行符格式
  arrowParens: 'avoid', // 单参数的箭头函数参数不需要括号
  trailingComma: 'none' //拖尾逗号
};
