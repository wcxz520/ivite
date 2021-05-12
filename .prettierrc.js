const fabric = require('@umijs/fabric')

module.exports = {
  ...fabric.prettier,
  semi: false, // 格式化不加分号
  singleQuote: true, // 格式化以单引号为主
}
