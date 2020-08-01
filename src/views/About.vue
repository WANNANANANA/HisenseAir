<template>
  <div class="about">
    <introduction>
      <h3 class="title">能量收集说明</h3>
      <div class="content">
        <div class="text">
          <img src="../assets/img/about.png" alt="">
        </div>
        <div class="back" @click="back"></div>
      </div>
    </introduction>
  </div>
</template>
<script>
import introduction from "../components/introduction";
export default {
  components: { introduction },
  methods: {
    back() {
      this.$router.back();
      this.$parent.showBlurBg = false;
    }
  }
};
</script>
<style lang="less">
.about {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  padding: 36px 8% 0 8%;
  z-index: 10;
  background-image: url('../assets/img/blur_bg.png');
  background-size: cover;
  background-position: top center;
  .introduction {
    width: 100%;
    height: 76% !important;
    .content {
      width: 100%;
      overflow: hidden;
      .text {
        height: 80%;
        padding: 0 2%;
        border-radius: 6px;
        text-align: center;
        img {
          height: 100%;
        }
      }
      .back {
        width: 110px;
        height: 45px;
        margin: 8% auto 0;
        background-clip: content-box;
        background-image: url("../assets/img/btn_sprite.png");
        background-size: 100%;
        background-position: 0px -2px;
      }
    }
  }
}
</style>
