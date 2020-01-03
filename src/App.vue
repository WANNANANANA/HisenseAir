<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <introduction></introduction>
    <div class="icon">
      <router-link to="/cert" class="left" tag="div"></router-link>
      <router-link to="/about" class="right" tag="div"></router-link>
    </div>
    <main>
      <div class="plant">
        <img src="./assets/img/seed.png" alt />
      </div>
      <div class="pot">
        <img src="./assets/img/pot.png" alt />
      </div>
    </main>
    <v-footer></v-footer>
  </div>
</template>

<script>
import introduction from "./components/introduction";
import vFooter from "./components/vFooter";
export default {
  components: { introduction, vFooter },
  created() {
  },
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
    position: absolute;
    top: 46%;
    left: 0px;
    z-index: 8;
    display: flex;
    justify-content: space-between;
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
}
</style>
