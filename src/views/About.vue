<template>
  <div class="about">
    <introduction>
      <div class="text">
        <p>1、这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话。</p>
        <p>2、这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话。</p>
        <p>3、这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话。</p>
      </div>
      <div class="back" @click="back"></div>
    </introduction>
  </div>
</template>
<script>
import introduction from "../components/introduction"
export default {
  components: { introduction },
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.back();
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
  background: #fff;
  .introduction {
    width: 100%;
    height: 76% !important;
    .content {
      width: 100%;
      overflow: hidden;
      .text {
        height: 80%;
        padding: 0 2%;
        border: 1px solid green;
        border-radius: 6px;
        p {
          color: #4c4c4c;
          font-size: 14px;
          margin-top: 12px;
          text-indent: 2em;
        }
      }
      .back {
        width: 112px;
        height: 20%;
        margin: 0 auto;
        padding-top: 8%;
        background-origin: content-box;
        background-image: url("../assets/img/back_btn.png");
        background-size: 100%;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
