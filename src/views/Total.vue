<template>
  <transition name="left-enter">
    <div class="total">
      <h3 class="title">展区图鉴</h3>
      <div class="content">
        <ul>
          <li :class="[ areaActive1 ? 'active' : 'inactive' ]">
            <div class="name">智慧宏图展区</div>
          </li>
          <li :class="[ areaActive2 ? 'active' : 'inactive ']">
            <div class="name">智尖科技展区</div>
          </li>
          <li :class="[ areaActive3 ? 'active' : 'inactive' ]">
            <div class="name">智舒生活展区</div>
          </li>
          <li :class="[ areaActive4 ? 'active' : 'inactive' ]">
            <div class="name">智联世界展区</div>
          </li>
          <li :class="[ areaActive5 ? 'active' : 'inactive' ]">
            <div class="name">智融万家展区</div>
          </li>
        </ul>
      </div>
      <div class="back" @click="back"></div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "total",
  beforeRouteEnter(to, from, next) {
    next(vm => {
      const none = to.params.none;
      vm.areaActive1 = none.indexOf(1) == -1 ? true : false;
      vm.areaActive2 = none.indexOf(2) == -1 ? true : false;
      vm.areaActive3 = none.indexOf(3) == -1 ? true : false;
      vm.areaActive4 = none.indexOf(4) == -1 ? true : false;
      vm.areaActive5 = none.indexOf(5) == -1 ? true : false;
    });
  },
  data() {
    return {
      areaActive1: "",
      areaActive2: "",
      areaActive3: "",
      areaActive4: "",
      areaActive5: ""
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
.left-enter-enter,
.left-enter-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.left-enter-enter-to,
.left-enter-leave {
  transform: translateX(0);
  opacity: 1;
}
.left-enter-enter-active,
.left-enter-leave-active {
  transition: all 0.3s linear;
}
.total {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 18;
  width: 100%;
  height: 100%;
  padding: 36px 7% 0 7%;
  background-color: rgba(0, 0, 0, 0.8);
  .title {
    position: absolute;
    top: 36px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 76%;
    height: 34px;
    background-color: rgba(60, 212, 0, 1);
    text-shadow: 2px 2px 2px #326a00;
    border-radius: 16px 16px;
    line-height: 34px;
    text-align: center;
    color: #fff;
    font-size: 23px;
    font-weight: 500;
  }
  .content {
    width: 100%;
    border: 1px solid #326a00;
    background-color: #fff;
    border-radius: 8px;
    ul {
      padding-top: 17px;
      li {
        position: relative;
        width: 100%;
        height: 86px;
        border-radius: 5px;
        background-size: 100% 100%;
        background-position: center center;
        margin-bottom: 2px;
        &:nth-of-type(1) {
          &.inactive {
            background-image: url("../assets/img/area1.png");
          }
          &.active {
            background-image: url("../assets/img/area1_a.png");
          }
        }
        &:nth-of-type(2) {
          &.inactive {
            background-image: url("../assets/img/area2.png");
          }
          &.active {
            background-image: url("../assets/img/area2_a.png");
          }
        }
        &:nth-of-type(3) {
          &.inactive {
            background-image: url("../assets/img/area3.png");
          }
          &.active {
            background-image: url("../assets/img/area3_a.png");
          }
        }
        &:nth-of-type(4) {
          &.inactive {
            background-image: url("../assets/img/area4.png");
          }
          &.active {
            background-image: url("../assets/img/area4_a.png");
          }
        }
        &:nth-of-type(5) {
          &.inactive {
            background-image: url("../assets/img/area5.png");
          }
          &.active {
            background-image: url("../assets/img/area5_a.png");
          }
        }
        .name {
          position: absolute;
          bottom: 10px;
          right: 1px;
          width: 104px;
          height: 18px;
          line-break: 18px;
          border-top-left-radius: 9px;
          border-bottom-left-radius: 9px;
          background-color: rgba(0, 0, 0, 0.6);
          color: #fff;
          font-size: 11px;
          text-align: center;
          letter-spacing: 1px;
          text-indent: 4px;
        }
      }
    }
  }
  .back {
    width: 110px;
    height: 45px;
    margin: 8% auto 0;
    background-clip: content-box;
    background-image: url(../assets/img/btn_sprite.png);
    background-size: 100%;
    background-position: 0px -2px;
  }
}
</style>