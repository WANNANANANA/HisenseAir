<template>
  <div id="app">
    <introduction></introduction>
    <div class="icon">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <main>
      <div class="plant">
        <img src="./assets/img/seed.png" alt />
      </div>
      <div class="pot">
        <img src="./assets/img/pot.png" alt />
      </div>
    </main>
    <footer>
      <div class="content">
        <div class="footer-text">
          <span>成长值{{growth}}</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import introduction from "./components/introduction";
export default {
  components: { introduction },
  data() {
    return {
      growth: 20
    };
  }
};
</script>
<style lang="less">
#app {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 36px 8% 0 8%;
  background-image: url("./assets/img/seed_bg.png");
  background-size: 100% 100%;
  .icon {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 46%;
    left: 0px;
    width: 100%;
    padding: 0 8%;
    height: 46px;
    div {
      width: 46px;
      height: 46px;
      background-size: 100% 100%;
      &.left {
        background-image: url("./assets/img/icon_left.png");
      }
      &.right {
        background-image: url("./assets/img/icon_right.png");
      }
    }
  }
  main {
    position: relative;
    width: 100%;
    height: 40%;
    text-align: center;
    .plant {
      position: absolute;
      left: 50%;
      bottom: 0px;
      transform: translate(-50%, 0);
      img {
        width: 120px;
      }
    }
    .pot {
      position: absolute;
      right: 20px;
      bottom: 20px;
      img {
        width: 76px;
      }
    }
  }
  footer {
    position: relative;

    width: 100%;
    height: 18%;
    .content {
      position: relative;
      width: 84%;
      height: 50px;
      margin: 10% auto 0;
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
}
</style>
