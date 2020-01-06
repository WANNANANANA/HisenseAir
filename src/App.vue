<template>
  <div id="app" :class="stageClass">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <introduction :stageClass="stageClass">
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
        <!-- <img src="./assets/img/seed.png" alt /> -->
      </div>
      <div class="pot">
        <img src="./assets/img/pot.png" alt />
      </div>
    </main>
    <footer>
      <div class="content">
        <div class="growth-bar">
          <div class="progress">
            <img src="./assets/img/progress.png" alt />
          </div>
        </div>
        <div class="footer-text">
          <span class="growth">{{growth}}</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import introduction from "./components/introduction";

export default {
  components: { introduction },
  created() {
    let search = window.location.search.slice(1);

    this.area = this.getParams(search, "area");
    this.stage = this.getParams(search, "stage") - 1;
    this.sign = this.getParams(search, "sign");
    this.patent = this.getParams(search, "patent");
    console.log(this.area, this.stage, this.sign, this.patent);

    this.growth = this.stage * 20;
    this.growthTo = (this.stage + 1) * 20;
  },
  mounted() {
    if (this.stage && this.sign) {
      // 不为0 即不是第一阶段 且要播放动画
      let timer = setInterval(() => {
        this.growth++;
        if (this.growth >= this.growthTo) {
          clearInterval(timer);
        }
      }, 100);
    } else {
      // 第一阶段 不浇水
      let timer = setInterval(() => {
        this.growth++;
        if (this.growth >= this.growthTo) {
          clearInterval(timer);
        }
      }, 100);
    }
  },
  data() {
    return {
      introductionArr: [
        {
          text: "这个是第一个区域内容",
          imgSrc: require("./assets/img/seed.png")
        },
        {
          text: "这个是第二个区域内容",
          imgSrc: require("./assets/img/sprout.png")
        },
        {
          text: "这个是第三个区域内容",
          imgSrc: require("./assets/img/branch.png")
        },
        {
          text: "这个是第四个区域内容",
          imgSrc: require("./assets/img/sapling.png")
        },
        {
          text: "这个是第五个区域内容",
          imgSrc: require("./assets/img/tree.png")
        }
      ],
      area: 1,
      stage: 1, // 此阶段是当前阶段 浇水后stage + 1
      sign: true,
      patent: 0,
      key: false,
      growth: 0,
      growthTo: 0
    };
  },
  computed: {
    stageClass() {
      return this.stage == 0
        ? "stage" + (this.stage + 1)
        : "stage" + this.stage;
    },
    text() {
      return this.introductionArr[this.area - 1].text;
    }
  },
  methods: {
    getParams(matchStr, key) {
      let reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)"),
        result = matchStr.match(reg);
      return result == null ? null : result[2];
    },
    changeGrowth() {},
    click() {
      this.stage++;
      let timer = setInterval(() => {
        this.growth++;
        if (this.growth >= this.growthTo) {
          clearInterval(timer);
        }
      }, 100);
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
  background-size: 100% 100%;
  transition: all 1s linear;
  &.stage1 {
    background-image: url("./assets/img/seed_bg.png");
    .plant {
      width: 112px;
      background-image: url("./assets/img/seed.png");
      transition: all 0.5s linear;
    }
  }
  &.stage2 {
    background-image: url("./assets/img/sprout_bg.png");
    .plant {
      width: 96px;
      background-image: url(./assets/img/sprout.png);
      transition: all 1s linear;
    }
  }
  &.stage3 {
    background-image: url("./assets/img/branch_bg.png");
    .plant {
      width: 116px;
      background-image: url("./assets/img/branch.png");
      transition: all 2s linear;
    }
  }
  &.stage4 {
    background-image: url("./assets/img/tree_bg.png");
    .plant {
      width: 144px;
      background-image: url("./assets/img/sapling.png");
      transition: all 3s linear;
    }
  }
  &.stage5 {
    background-image: url("./assets/img/tree_bg.png");
    .plant {
      width: 240px;
      background-image: url("./assets/img/tree.png");
      transition: all 4s linear;
    }
  }

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
      height: 100%;
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: bottom center;
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
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: 12;
    width: 100%;
    height: 18%;
    .growth-bar {
      position: relative;
      width: 90%;
      height: 100%;
      margin-left: 5%;
      background-image: url("./assets/img/growth_bg.png");
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center center;
      .progress {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 96%;
        font-size: 0;
        overflow: hidden;
        img {
          margin-left: -80%;
          width: 100%;
        }
      }
    }
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
        top: 40px;
        right: 0px;
        z-index: -8;
        width: 100px;
        height: 72px;
        line-height: 26px;
        border: #cb8f51 4px solid;
        border-top-left-radius: 6px;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        box-shadow: #666 0px 0px 2px inset;
        background-color: #f8e8b0;
        transform: translate(0, -100%);
        .growth {
          color: #0aaf12;
          &::before {
            display: inline-block;
            content: "";
            width: 48px;
            height: 20px;
            background-image: url("./assets/img/growText.png");
            background-repeat: no-repeat;
            background-size: 100%;
            background-position: center;
            margin: 0 5px;
            vertical-align: text-bottom;
          }
        }
      }
    }
  }
}
</style>
