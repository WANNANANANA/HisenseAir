<template>
  <div class="about">
    <introduction>
      <h3 class="title">能量收集说明</h3>
      <div class="content">
        <div class="text">
          <p>1、扫描各展区均可获得20%的能量，随着能量的增加种子渐渐生长;</p>
          <p>2、直到所有的展区均扫描完成可获得100%的能量，种子成长为大树，大树旁边生成证书小图标，点开图标即为绿色先行者证书;</p>
          <p>3、证书可保存至手机，点击证书下方的“上传图片”按钮即可上传自己的照片进行打印。</p>
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
  // background: #fff;
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
        border: 1px solid rgba(60, 212, 0, 0.3);
        border-radius: 6px;
        overflow: scroll;
        p {
          color: #4c4c4c;
          font-size: 14px;
          margin-top: 12px;
          text-indent: 2em;
          padding: 0px;
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
