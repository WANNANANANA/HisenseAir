<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <introduction :stage="stage">
      <slot>
        <p>{{text}}</p>
      </slot>
    </introduction>
    <div class="icon">
      <router-link v-show="stage == 5" :to="'/cert/' + patent" class="left" tag="div"></router-link>
      <router-link to="/about" class="right" tag="div"></router-link>
    </div>
    <main @click="click">
      <div class="plant">
        <img src="./assets/img/seed.png" alt />
      </div>
      <div class="pot">
        <img src="./assets/img/pot.png" alt />
      </div>
    </main>
    <v-footer :growth="growth"></v-footer>
  </div>
</template>

<script>
import introduction from "./components/introduction";
import vFooter from "./components/vFooter";

export default {
  components: { introduction, vFooter },
  created() {
    let search = window.location.search.slice(1);
    console.log(search);
    console.log(this);

    console.log(getParams(search, "area"));
    this.area = getParams(search, "area");
    // this.stage = getParams(search, "stage");
    // this.sign = getParams(search, "sign");
    // this.patent = getParams(search, "patent");

    console.log(this.area);

    function getParams(matchStr, key) {
      let marchStr = `^$${key}`,
        reg = /matchStr/;
      return matchStr.match(reg);
    }
  },
  data() {
    return {
      introductionArr: [
        {
          text: "这个是第一个区域",
          imgSrc: require("./assets/img/seed.png")
        },
        {
          text: "这个是第二个区域",
          imgSrc: require("./assets/img/sprout.png")
        },
        {
          text: "这个是第三个区域",
          imgSrc: require("./assets/img/branch.png")
        },
        {
          text: "这个是第四个区域",
          imgSrc: require("./assets/img/sapling.png")
        },
        {
          text: "这个是第五个区域",
          imgSrc: require("./assets/img/tree.png")
        }
      ],
      area: 1,
      stage: 1,
      sign: true,
      patent: 0
    };
  },
  computed: {
    text() {
      return this.introductionArr[this.stage - 1].text;
    },
    growth() {
      return this.stage * 20;
    }
  },
  methods: {
    click() {
      this.stage = 2;
    }
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
    width: 100%;
    height: 46px;
    padding: 0 8%;
    div {
      width: 46px;
      height: 46px;
      background-size: 100% 100%;
      &.left {
        float: left;
        background-image: url("./assets/img/icon_left.png");
      }
      &.right {
        float: right;
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
