<template>
  <div class="cert">
    <div class="show">
      <div class="pic">
        <p>证书编号：{{patent}}</p>
        <img src="../assets/img/cret.png" alt />
      </div>
      <div class="button">
        <div class="left"></div>
        <div class="right" @click="back"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cert",
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.cretNum = to.params.id;
    });
  },
  data() {
    return {
      patent: "NM12523344"
    };
  },
  methods: {
    back() {
      this.$router.back();
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
      height: 35px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
    .left {
      width: 110px;
      background-image: url("../assets/img/upload_btn.png");
    }
    .right {
      width: 80px;
      background-image: url("../assets/img/back_btn2.png");
    }
  }
}
</style>
