<template>
  <div class="cert">
    <div class="show">
      <div class="pic">
        <p>证书编号：{{cretNum}}</p>
        <img src="../assets/img/cret.png" alt />
      </div>
      <div class="button">
        <div class="left">点击上传</div>
        <div class="right" @click="back">返回</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "cert",
  data() {
    return {
      cretNum: 'NM12523344'
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less">
.cert {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 15;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  .show {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 92%;
  }
  .pic {
    position: relative;
    width: 100%;
    font-size: 0;
    p {
      position: absolute;
      left: 50%;
      bottom: 8%;
      width: 100%;
      text-align: center;
      font-size: 12px;
      transform: translate(-50%, -50%);
    }
    img {
      width: 100%;
    }
  }
  .button {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
    div {
      border-radius: 15px;
    }
    .left {
      width: 110px;
      height: 30px;
      background: rgb(106, 255, 106);
    }
    .right {
      width: 80px;
      height: 30px;
      background: orange;
    }
  }
}
</style>
