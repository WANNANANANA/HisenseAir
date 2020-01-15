<template>
  <div id="app" :class="stageClass">
    <transition name="welcome">
      <div v-if="!seed" class="welcome">
        <div class="content">
          <p>
            <img src="./assets/img/welcome_text.png" alt />
            <img src="./assets/img/welcome_text2.png" alt />
          </p>
          <div class="spot">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <img src="./assets/img/seed_active.png" alt class="seed-active" />
          <img src="./assets/img/hand.png" alt class="hand" />
        </div>
      </div>
    </transition>
    <div class="exhibition" v-if="exhibition">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <introduction :stageClass="stageClass" :area="area"></introduction>
      <div class="icon">
        <router-link v-if="stage == 5" :to="'/cert/' + patent" class="left" tag="div"></router-link>
        <router-link to="/about" class="right" tag="div" @click.native="showAboutFun"></router-link>
      </div>
      <main>
        <div class="plant">
          <transition>
            <img v-if="sign" :class="changePlantClass" v-show="changeBg" :src="changePlantImg" alt />
          </transition>
          <transition>
            <img :class="plantClass" v-show="!changeBg" :src="plantImg" alt />
          </transition>
        </div>
        <transition name="watering">
          <div class="watering" :class="{active : potActive}" v-show="potActive">
            <div class="pot">
              <img src="./assets/img/pot.png" alt />
            </div>
            <div class="water">
              <img :style="{opacity: wateringShow1}" src="./assets/img/water3.png" alt />
              <img :style="{opacity: wateringShow2}" src="./assets/img/water2.png" alt />
              <img :style="{opacity: wateringShow3}" src="./assets/img/water1.png" alt />
            </div>
          </div>
        </transition>
      </main>
      <footer>
        <div class="footer-box">
          <div class="footer-growth">
            <div class="growth-bar">
              <div class="icon-bar">
                <span class="icon-one" :class="{active : growth >= 0}"></span>
                <span class="icon-two" :class="{active : growth >= 30}"></span>
                <span class="icon-three" :class="{active : growth >= 56}"></span>
                <span class="icon-four" :class="{active : growth >= 80}"></span>
                <span class="icon-five" :class="{active : growth >= 100}"></span>
              </div>
              <div class="progress">
                <img src="./assets/img/progress.png" :style="{marginLeft:percent}" alt />
              </div>
            </div>
          </div>
          <div class="footer-text">
            <span class="growth">{{growth}}</span>
          </div>
        </div>
      </footer>
      <div class="sky">
        <img src="./assets/img/cloud1.png" alt="">
      </div>
      <div class="bg">
        <div class="img" v-if="showChangeBg" :style="{backgroundImage: 'url(' + bgReplace + ')'}"></div>
        <transition>
          <div class="img" v-show="!changeBg" :style="{backgroundImage: 'url(' + bg + ')'}"></div>
        </transition>
        <div class="img about-img" v-show="showBlurBg"></div>
      </div>
    </div>
  </div>
</template>

<script>
import introduction from "./components/introduction";

export default {
  components: { introduction },
  created() {
    let plantArr = [
        {
          name: "seed",
          img: require("./assets/img/seed.png")
        },
        {
          name: "sprout",
          img: require("./assets/img/sprout.png")
        },
        {
          name: "branch",
          img: require("./assets/img/branch.png")
        },
        {
          name: "sapling",
          img: require("./assets/img/sapling.png")
        },
        {
          name: "tree",
          img: require("./assets/img/tree.png")
        }
      ],
      bgArr = [
        require("./assets/img/seed_bg.png"),
        require("./assets/img/sprout_bg.png"),
        require("./assets/img/branch_bg.png"),
        require("./assets/img/tree_bg.png"),
        require("./assets/img/tree_bg.png")
      ];
    let search = window.location.search.slice(1),
      { area, stage, sign, patent, seed } = this.getParams(search); // String类型

    if (seed == "true") {
      //  已经获取到种子 不需要再展示欢迎页
      this.seed = true;
      this.exhibition = true;

      // 避免后台第一阶段也传的是true
      if (stage == 1) {
        sign = false;
      }
      // 当要播放动画(即要进行浇水动作)的时候 且不是第一阶段 则当前显示阶段要换成stage-1 浇水后变成stage
      if (sign == "true" && stage != 1) {
        stage--;
        this.showChangeBg = true;
        this.bgReplace = bgArr[stage];
        this.changePlantClass = plantArr[stage].name;
        this.changePlantImg = plantArr[stage].img;
      }
      this.plantClass = plantArr[stage - 1].name;
      this.plantImg = plantArr[stage - 1].img;
      this.bg = bgArr[stage - 1];
      this.area = area;
      this.stage = stage;
      this.sign = sign;
      this.patent = patent;

      this.growthFun(0, stage);

      console.log(this.patent, this.stage, this.sign, this.area, this.seed);

      return false;
    } else {
      // seed为false 没获取种子 如果area是gate 仅展示欢迎页 如果是其它(gata_re) 那欢迎页展示之后随即进入浇水第一阶段
      this.seed = false;
      if (area == "gate" || area == null) {
        // 仅展示欢迎页 不进入浇水阶段
        return false;
      } else {
        // 展示欢迎页 3s后进入浇水阶段stage:1 相应area区域
        stage = 1;
        sign = false;

        this.plantClass = plantArr[0].name;
        this.plantImg = plantArr[0].img;
        this.bg = bgArr[0];
        this.area = area;
        this.stage = stage;
        this.sign = sign;
        this.patent = patent;
        this.exhibition = true; // 此步骤晚一点晚一点加载exhibition部分
        new Promise((resolve, reject) => {
          setTimeout(() => {
            this.seed = true;
            resolve();
          }, 5000);
        }).then(() => {
          setTimeout(() => {
            this.growthFun(0, 1);
          }, 1000);
        });
      }
    }
  },
  mounted() {
    // sign为true 播放浇水动画
    if (this.sign == "true") {
      let stage = this.stage;
      setTimeout(() => {
        this.wateringFun();
      }, stage * 1500);
    }
  },
  data() {
    return {
      bg: "",
      bgReplace: "",
      showChangeBg: false,
      changeBg: false,
      showBlurBg: false,
      area: "area_one", // 当前区域
      stage: 1, // 将到达的目标阶段
      sign: true, // 当前是否播放动画
      patent: 0, // 证书编号
      seed: true, // 是否已获取种子
      exhibition: false, // 是否继续浇水阶段
      plantClass: "",
      plantImg: "",
      changePlantClass: "",
      changePlantImg: "",
      growth: 0, // 初始化成长值
      potActive: false, // 控制浇水壶显示
      wateringShow1: 0, // 控制水滴1显示
      wateringShow2: 0, // 控制水滴2显示
      wateringShow3: 0, // 控制水滴3显示
      wateringNum: 3 // 浇水次数
    };
  },
  computed: {
    stageClass() {
      return "stage" + this.stage;
    },
    percent() {
      console.log(this.wateringFun, this.patent);
      return this.growth - 100 + "%";
    }
  },
  methods: {
    getParams(matchStr) {
      function createReg(key) {
        return new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
      }
      let area = matchStr.match(createReg("area")),
        stage = matchStr.match(createReg("stage")),
        sign = matchStr.match(createReg("sign")),
        patent = matchStr.match(createReg("patent")),
        seed = matchStr.match(createReg("seed"));

      return {
        area: area == null ? null : area[2],
        stage: stage == null ? 1 : stage[2],
        sign: sign == null ? false : sign[2],
        patent: patent == null ? null : patent[2],
        seed: seed == null ? true : seed[2]
      };
    },
    wateringFun() {
      let stage = this.stage;
      this.potActive = true;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.wateringShow3 = 1;
          resolve();
        }, 500);
      })
        .then(() => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              this.wateringShow2 = 1;
              resolve();
            }, 500);
          });
        })
        .then(() => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              this.wateringShow1 = 1;
              resolve();
            }, 500);
          });
        })
        .then(() => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              this.wateringShow1 = 0;
              this.wateringShow2 = 0;
              this.wateringShow3 = 0;
              resolve(this.wateringNum--);
            }, 500);
          });
        })
        .then(result => {
          if (this.wateringNum) {
            this.wateringFun();
          } else {
            this.potActive = false;
            setTimeout(() => {
              stage++;
              this.stage = stage;
              this.growthFun(stage - 1, stage);
              this.changeBg = true;
            }, 2000);
          }
        });
    },
    growthFun(startStage, endStage) {
      let baseGrowth = 20,
        startGrowth = startStage * baseGrowth,
        endGrowth = endStage * baseGrowth,
        timer = setInterval(() => {
          startGrowth++;
          this.growth = startGrowth;
          if (startGrowth == endGrowth) {
            clearInterval(timer);
          }
        }, 50);
    },
    showAboutFun() {
      this.showBlurBg = true;
    }
  }
};
</script>
<style lang="less">
.welcome-enter-active,
.welcome-leave-active {
  transition: opacity 1.5s linear;
}
.welcome-enter,
.welcome-leave-to {
  opacity: 0;
}
.welcome-enter-to,
.welcome-leave {
  opacity: 1;
}

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

.watering-enter-active,
.watering-leave-active {
  transition: opacity 1s linear;
}
.watering-enter,
.watering-leave-to {
  opacity: 0;
}
.watering-enter-to,
.watering-leave {
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

@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(80%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes handAppear {
  0% {
    opacity: 0;
    transform: translateY(30%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes seedAppear {
  0% {
    opacity: 0;
    transform: translate(-50%, -30%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

@keyframes seedFloat {
  0% {
    transform: translate(-50%, 0%);
  }
  100% {
    transform: translate(-50%, -6%);
  }
}

@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes shine1 {
  0% {
    opacity: 0.5;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes shine2 {
  0% {
    opacity: 0.8;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(0.7);
  }
}

@keyframes shine3 {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0.7;
    transform: scale(0.8);
  }
}

#app {
  width: 100%;
  height: 100%;

  .welcome {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 20;
    width: 100%;
    height: 100%;
    background-color: #16201f;
    .content {
      width: 100%;
      height: 100%;
      background-image: url("./assets/img/welcome_bg.png");
      background-size: 100%;
      background-repeat: no-repeat;
      p {
        position: absolute;
        top: 48%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        text-align: center;
        img {
          &:nth-of-type(1) {
            width: 80%;
            opacity: 0;
            animation: appear 1s ease-out 3.5s 1 forwards;
          }
          &:nth-of-type(2) {
            width: 90%;
            opacity: 0;
            animation: appear 1s ease-out 4.5s 1 forwards;
          }
        }
      }
      .seed-active {
        position: absolute;
        top: 60%;
        left: 50%;
        width: 32%;
        opacity: 0;
        animation: seedAppear 1.5s ease-out 1.5s forwards,
          seedFloat 2s linear 3s infinite alternate;
      }
      .hand {
        position: absolute;
        top: 70%;
        left: 0px;
        width: 95%;
        animation: handAppear 1s ease-out forwards;
      }
      .spot {
        position: absolute;
        top: 50%;
        left: 0px;
        width: 100%;
        height: 30%;
        opacity: 0;
        animation: show 4s ease-out 1.5s 1 forwards;
        span {
          position: absolute;
          width: 20px;
          height: 20px;
          background-image: url("./assets/img/spot.png");
          background-size: 100%;
          background-position: 0px 0px;
          background-repeat: no-repeat;
          animation: shine1 0.8s linear infinite alternate;
          &:nth-of-type(1) {
            width: 20px;
            height: 20px;
            top: 36%;
            left: 32%;
            animation-name: shine2;
          }
          &:nth-of-type(2) {
            width: 10px;
            height: 10px;
            top: 38%;
            left: 36%;
            animation-name: shine3;
          }
          &:nth-of-type(3) {
            width: 8px;
            height: 8px;
            top: 36%;
            left: 28%;
            animation-name: shine1;
          }
          &:nth-of-type(4) {
            width: 8px;
            height: 8px;
            top: 30%;
            left: 38%;
            animation-name: shine3;
          }
          &:nth-of-type(5) {
            width: 10px;
            height: 10px;
            top: 30%;
            left: 40%;
            animation-name: shine2;
          }
          &:nth-of-type(6) {
            width: 8px;
            height: 8px;
            top: 35%;
            left: 42%;
            animation-name: shine1;
          }
          &:nth-of-type(7) {
            width: 8px;
            height: 8px;
            top: 26%;
            left: 33%;
            animation-name: shine3;
          }
          &:nth-of-type(8) {
            width: 6px;
            height: 6px;
            top: 26%;
            left: 33%;
            animation-name: shine2;
          }
          &:nth-of-type(9) {
            width: 5px;
            height: 5px;
            top: 27%;
            left: 32%;
            animation-name: shine1;
          }
          &:nth-of-type(10) {
            width: 25px;
            height: 25px;
            top: 25%;
            left: 50%;
            animation-name: shine3;
          }
          &:nth-of-type(11) {
            width: 10px;
            height: 10px;
            top: 34%;
            left: 56%;
            animation-name: shine2;
          }
          &:nth-of-type(12) {
            width: 8px;
            height: 8px;
            top: 40%;
            left: 60%;
            animation-name: shine1;
          }
          &:nth-of-type(13) {
            width: 15px;
            height: 15px;
            top: 37%;
            left: 62%;
            animation-name: shine3;
          }
          &:nth-of-type(14) {
            width: 5px;
            height: 5px;
            top: 42%;
            left: 65%;
            animation-name: shine2;
          }

          &:nth-of-type(15) {
            width: 20px;
            height: 20px;
            top: 34%;
            left: 70%;
            animation-name: shine1;
          }
          &:nth-of-type(16) {
            width: 18px;
            height: 18px;
            top: 30%;
            left: 78%;
            animation-name: shine3;
          }
          &:nth-of-type(17) {
            width: 18px;
            height: 18px;
            top: 30%;
            left: 92%;
            animation-name: shine2;
          }
          &:nth-of-type(18) {
            width: 8px;
            height: 8px;
            top: 24%;
            left: 94%;
            animation-name: shine3;
          }
          &:nth-of-type(19) {
            width: 12px;
            height: 12px;
            top: 22%;
            left: 96%;
            animation-name: shine1;
          }
          &:nth-of-type(20) {
            width: 6px;
            height: 6px;
            top: 42%;
            left: 96%;
            animation-name: shine2;
          }
          &:nth-of-type(21) {
            width: 12px;
            height: 12px;
            top: 12%;
            left: 2%;
            animation-name: shine3;
          }
          &:nth-of-type(22) {
            width: 8px;
            height: 8px;
            top: 14%;
            left: 6%;
            animation-name: shine1;
          }

          &:nth-of-type(23) {
            width: 30px;
            height: 30px;
            top: 44%;
            left: 6%;
            animation-name: shine2;
          }
          &:nth-of-type(24) {
            width: 10px;
            height: 10px;
            top: 54%;
            left: 4%;
            animation-name: shine3;
          }
          &:nth-of-type(25) {
            width: 8px;
            height: 8px;
            top: 57%;
            left: 5%;
            animation-name: shine1;
          }
          &:nth-of-type(26) {
            width: 30px;
            height: 30px;
            top: 86%;
            left: 40%;
            animation-name: shine2;
          }
          &:nth-of-type(27) {
            width: 26px;
            height: 26px;
            top: 85%;
            left: 43%;
            animation-name: shine3;
          }
          &:nth-of-type(28) {
            width: 10px;
            height: 10px;
            top: 72%;
            left: 40%;
            animation-name: shine1;
          }
          &:nth-of-type(29) {
            width: 16px;
            height: 16px;
            top: 82%;
            left: 36%;
            animation-name: shine2;
          }
          &:nth-of-type(30) {
            width: 12px;
            height: 12px;
            top: 80%;
            left: 36%;
            animation-name: shine3;
          }
          &:nth-of-type(31) {
            width: 15px;
            height: 15px;
            top: 80%;
            left: 39%;
            animation-name: shine1;
          }
          &:nth-of-type(32) {
            width: 10px;
            height: 10px;
            top: 86%;
            left: 56%;
            animation-name: shine2;
          }
          &:nth-of-type(33) {
            width: 8px;
            height: 8px;
            top: 82%;
            left: 50%;
            animation-name: shine3;
          }
          &:nth-of-type(34) {
            width: 20px;
            height: 20px;
            top: 76%;
            left: 50%;
            animation-name: shine1;
          }
        }
      }
    }
  }
  .exhibition {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 36px 8% 0 8%;

    .introduction {
      height: 36%;
    }
    .icon {
      position: absolute;
      top: 41%;
      left: 0px;
      z-index: 8;
      width: 100%;
      height: 46px;
      padding: 0 8%;
      div {
        height: 46px;
        background-size: 100% 100%;
        &.left {
          float: left;
          width: 76px;
          background-image: url("./assets/img/icon_left.png");
        }
        &.right {
          float: right;
          width: 50px;
          background-image: url("./assets/img/icon_right.png");
        }
      }
    }
    main {
      position: relative;
      width: 100%;
      height: 45%;
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
            width: 38%;
          }
          &.sprout {
            width: 32.5%;
          }
          &.branch {
            width: 37%;
          }
          &.sapling {
            width: 46%;
          }
          &.tree {
            left: 52%;
            width: 76%;
          }
        }
      }
      .watering {
        position: absolute;
        right: 20px;
        bottom: 20px;
        &.active {
          animation: potRotate 1s ease-out 0s 6 alternate;
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
      z-index: 16;
      width: 100%;
      height: 19%;
      .footer-box {
        position: absolute;
        left: 50%;
        bottom: 0;
        z-index: 15;
        transform: translate(-50%, 0);
        margin-bottom: 4.2vh;
        width: 84%;
        height: 50px;
        box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 2px;
        border-radius: 25px;
        .footer-growth {
          width: 100%;
          height: 100%;
          background-color: #cb8f51;
          box-shadow: #f8e8b0 1px 2px 2px inset;
          border-radius: 25px;
          .growth-bar {
            position: relative;
            width: 280px;
            max-width: 89%;
            height: 100%;
            margin: 0 auto;
            background-image: url("./assets/img/growth_bg.png");
            background-size: 100%;
            background-repeat: no-repeat;
            background-position: center center;
            .icon-bar {
              display: flex;
              align-items: center;
              justify-content: space-between;
              position: absolute;
              top: 0px;
              left: 0px;
              width: 100%;
              height: 100%;
              z-index: 9;
              span {
                display: inline-block;
                width: 30px;
                height: 30px;
                background-image: url("./assets/img/icon_sprite.png");
                background-size: 90%;
                &.icon-one {
                  background-position: 1px -1px;
                }
                &.icon-two {
                  background-position: 1px -33px;
                }
                &.icon-three {
                  background-position: 1px -64px;
                }
                &.icon-four {
                  background-position: 1px -96px;
                }
                &.icon-five {
                  background-position: 1px -127px;
                }
                &.active {
                  background-image: url("./assets/img/active_icon_sprite.png");
                  background-size: 90%;
                  background-repeat: no-repeat;
                  &.icon-one {
                    background-position: 1px -1px;
                  }
                  &.icon-two {
                    background-position: 1px -33px;
                  }
                  &.icon-three {
                    background-position: 1px -64px;
                  }
                  &.icon-four {
                    background-position: 1px -96px;
                  }
                  &.icon-five {
                    background-position: 1px -127px;
                  }
                }
              }
            }
            .progress {
              position: absolute;
              top: 50%;
              left: 50%;
              z-index: 8;
              transform: translate(-50%, -50%);
              width: 94%;
              font-size: 0;
              overflow: hidden;
              img {
                margin-left: -80%;
                width: 100%;
              }
            }
          }
        }
        .footer-text {
          position: absolute;
          top: 40px;
          right: 0px;
          z-index: -12;
          width: 100px;
          height: 72px;
          line-height: 36px;
          transform: translate(0, -100%);
          background-image: url("./assets/img/footer_text.png");
          background-size: 100%;
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
              margin: 0px 3px 0px 8px;
              vertical-align: text-bottom;
            }
          }
        }
      }
    }
    .sky {
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: -9;
      width: 100%;
      height: 100%;
      img {
        position: absolute;
        top: 40%;
        left: 50%;
        width: 30%;
      }
    }
    .bg {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: 0;
      z-index: -10;
      overflow: hidden;
      .img {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center center;
        &.about-img {
          background-image: url("./assets/img/blur_bg.png");
        }
      }
    }
  }

  &.stage1 {
    main {
      .watering {
        right: 20px;
        bottom: 60px;
      }
    }
  }
  &.stage2 {
    main {
      .watering {
        right: 20px;
        bottom: 90px;
      }
    }
  }
  &.stage3 {
    main {
      .watering {
        right: 35px;
        bottom: 150px;
      }
    }
  }
  &.stage4 {
    main {
      .watering {
        right: 46px;
        bottom: 180px;
      }
    }
  }
}

// 媒体查询查询的是pt 不是px
// iphoneX
// @media only screen and (min-device-width: 375px) and (min-device-height: 812px) {
//   #app {
//     .welcome {
//       .content {
//         p {
//           top: 40%;
//         }
//       }
//     }
//   }
// }
</style>
