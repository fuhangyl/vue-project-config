<template>
  <div class="layout-rem_container">
    <div class="main">
      <h1>Layout REM</h1>
      <p>1、设计稿一般都是以750px为基准</p>
      <p>2、通过编写 scss 函数来进行 px 和 rem之间的转换</p>
      <p><img src="../../assets/images/px2rem-1.png" alt="px2rem-1" /></p>
      <p>3、设计稿上尺寸可以直接拿来使用</p>
      <p><img src="../../assets/images/px2rem-2.png" alt="px2rem-2" /></p>
    </div>
  </div>
</template>

<style lang="scss">
.layout-rem_container {
  .main {
    $font-size: 28px;
    $padding: 20px;
    padding: 0 px2rem($padding);
    font-size: px2rem($font-size);
    color: #fff;
    background: #333;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    h1 {
      $margin-bottom: 20px;
      $margin-top: 100px;
      $font-size: 48px;
      font-size: px2rem($font-size);
      margin-bottom: px2rem($margin-bottom);
      margin-top: px2rem($margin-top);
    }
    p {
      margin-bottom: px2rem(10px);
    }
    img {
      width: 100%;
    }
  }
}
</style>
