<template>
  <footer>
    <div class="content">
      <div class="footer-text">
        <span>成长值{{growth}}</span>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "vFooter",
  props: {
    growth: {
      type: Number,
      default: 20
    }
  }
};
</script>
<style lang="less">
footer {
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 12;
  width: 100%;
  height: 18%;
  .content {
    position: absolute;
    left: 8%;
    bottom: 0;
    margin-bottom: 5vh;
    width: 84%;
    height: 50px;
    background-color: #cb8f51;
    border-radius: 25px;
    .footer-text {
      position: absolute;
      top: 0px;
      right: 0px;
      width: 80px;
      height: 30px;
      background: #fff;
      transform: translate(0, -100%);
    }
  }
}
</style>