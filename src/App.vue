<template>
  <div id="app" :class="stageClass">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <introduction :stageClass="stageClass" :area="area">
    </introduction>
    <div class="icon">
      <router-link v-show="stage == 5" :to="'/cert/' + patent" class="left" tag="div"></router-link>
      <router-link to="/about" class="right" tag="div"></router-link>
    </div>
    <main @click="click">
      <div class="plant">
        <transition>
          <img class="seed" v-show="stage == 1" src="./assets/img/seed.png" alt />
        </transition>
        <transition>
          <img class="sprout" v-show="stage == 2" src="./assets/img/sprout.png" alt />
        </transition>
        <transition>
          <img class="branch" v-show="stage == 3" src="./assets/img/branch.png" alt />
        </transition>
        <transition>
          <img class="sapling" v-show="stage == 4" src="./assets/img/sapling.png" alt />
        </transition>
        <transition>
          <img class="tree" v-show="stage == 5" src="./assets/img/tree.png" alt />
        </transition>
      </div>
      <div class="watering" :class="{active : potActive}">
        <div class="pot">
          <img src="./assets/img/pot.png" alt />
        </div>
        <div class="water">
          <img :style="{opacity: wateringShow1}" src="./assets/img/water3.png" alt />
          <img :style="{opacity: wateringShow2}" src="./assets/img/water2.png" alt />
          <img :style="{opacity: wateringShow3}" src="./assets/img/water1.png" alt />
        </div>
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
    this.stage = this.getParams(search, "stage");
    this.sign = this.getParams(search, "sign");
    this.patent = this.getParams(search, "patent");
    console.log(this.area, this.stage, this.sign, this.patent);

    this.growth = this.stage * 20;
    this.growthTo = (this.stage + 1) * 20;

    this.wateringFun();
  },
  mounted() {
    // if (this.stage && this.sign) {
    //   // 不为0 即不是第一阶段 且要播放动画
    //   let timer = setInterval(() => {
    //     this.growth++;
    //     if (this.growth >= this.growthTo) {
    //       clearInterval(timer);
    //     }
    //   }, 100)
    // } else {
    //   // 第一阶段 不浇水
    //   let timer = setInterval(() => {
    //     this.growth++;
    //     if (this.growth >= this.growthTo) {
    //       clearInterval(timer);
    //     }
    //   }, 100)
    // }
  },
  data() {
    return {
      area: 1,
      stage: 1, // 此阶段是当前阶段 浇水后stage + 1
      sign: true,
      patent: 0,
      key: false,
      growth: 0,
      growthTo: 0,
      potActive: true, // 控制浇水按钮
      wateringShow1: 0,
      wateringShow2: 0,
      wateringShow3: 0,
      wateringNum: 3 // 浇水次数
    };
  },
  computed: {
    stageClass() {
      return this.stage == 0
        ? "stage" + (this.stage + 1)
        : "stage" + this.stage;
    }
  },
  methods: {
    getParams(matchStr, key) {
      let reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)"),
        result = matchStr.match(reg);
      return result == null ? null : result[2];
    },
    wateringFun() {
      console.log("water");
      new Promise((resolve, reject) => {
        setTimeout(() => {
          this.wateringShow3 = 1;
          resolve();
        }, 600);
      })
        .then(() => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              this.wateringShow2 = 1;
              resolve();
            }, 600);
          });
        })
        .then(() => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              this.wateringShow1 = 1;
              resolve();
            }, 600);
          });
        })
        .then(() => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              this.wateringShow1 = 0;
              this.wateringShow2 = 0;
              this.wateringShow3 = 0;
              console.log("finish");
              resolve(this.wateringNum--);
            }, 600);
          });
        })
        .then(result => {
          if (this.wateringNum) {
            this.wateringFun();
          }
        });
    },
    changeGrowth() {},
    click() {
      this.stage++;
      // let timer = setInterval(() => {
      //   this.growth++;
      //   if (this.growth >= this.growthTo) {
      //     clearInterval(timer);
      //   }
      // }, 100);
    }
  }
};
</script>
<style lang="less">
.v-enter-active,
.v-leave-active {
  transition: opacity 2s linear;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-to,
.v-leave {
  opacity: 1;
}

@keyframes potRotate {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(-10deg);
  }
}
#app {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 36px 8% 0 8%;
  background-size: 100% 100%;
  transition: all 5s linear;
  &.stage1 {
    background-image: url("./assets/img/seed_bg.png");
    .watering {
      right: 20px;
      bottom: 60px;
    }
  }
  &.stage2 {
    background-image: url("./assets/img/sprout_bg.png");
    .watering {
      right: 20px;
      bottom: 90px;
    }
  }
  &.stage3 {
    background-image: url("./assets/img/branch_bg.png");
    .watering {
      right: 35px;
      bottom: 150px;
    }
  }
  &.stage4 {
    .watering {
      right: 46px;
      bottom: 180px;
    }
  }
  &.stage4,
  &.stage5 {
    background-image: url("./assets/img/tree_bg.png");
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
      width: 100%;
      height: 100%;
      img {
        position: absolute;
        left: 50%;
        bottom: 0px;
        transform: translate(-50%, 0);
        &.seed {
          width: 120px;
        }
        &.sprout {
          width: 100px;
        }
        &.branch {
          width: 116px;
        }
        &.sapling {
          width: 144px;
        }
        &.tree {
          width: 240px;
        }
      }
    }
    .watering {
      position: absolute;
      right: 20px;
      bottom: 20px;
      &.active {
        animation: potRotate 1.2s ease-out 0s 6 alternate;
      }
      .pot {
        transform: rotateZ(-50deg);
      }
      .water {
        position: absolute;
        top: 26px;
        right: 90%;
        width: 80px;
        height: 80px;
        img {
          &:nth-of-type(1) {
            width: 30px;
            transform: translate(10px, 20px);
          }
          &:nth-of-type(2) {
            width: 20px;
            transform: translate(0px, 5px);
          }
          &:nth-of-type(3) {
            width: 15px;
            transform: translate(0px, -10px);
          }
        }
      }
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
