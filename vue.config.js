module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 依次导入的公用的scss变量，公用的scss混入，共用的默认样式
        prependData: `
          @import "./src/assets/scss/function.scss";
          @import "./src/assets/scss/mixin.scss";
        `
      }
    }
  }
}
