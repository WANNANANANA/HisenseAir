<template>
  <transition name="left-enter">
    <div class="cert">
      <div class="show">
        <div class="back" @click="back">
          <img src="../assets/img/back_icon.png" alt />
        </div>
        <div class="pic">
          <p class="nickname">
            捐赠人：
            <span>{{nickname}}</span>
          </p>
          <p class="cretnum">
            证书编号：
            <span>{{cretNum}}</span>
          </p>
          <p class="date">
            日期：
            <span>{{date}}</span>
          </p>
          <img src="../assets/img/cret.png" alt />
        </div>
        <div class="button">
          <div class="left">
            <a href="https://open.huizhangongsi.com/lsshz/watering/photoIndex"></a>
          </div>
          <div class="right" @click="download"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import html2canvas from "html2canvas";

export default {
  name: "cert",
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.cretNum = to.params.patent;
      vm.nickname = to.params.nickname;
      vm.date = to.params.date;
    });
  },
  data() {
    return {
      cretNum: "",
      nickname: "",
      date: "",
    };
  },
  methods: {
    download() {
      const dom = document.getElementsByClassName("pic")[0];
      html2canvas(dom, {
        width: dom.offsetWidth,
        height: dom.offsetHeight,
        scale: 5,
      }).then((canvas) => {
        const el = document.createElement("a");
        el.href = canvas.toDataURL();
        el.download = "绿色先行者捐赠赠书";

        const event = new MouseEvent("click");
        el.dispatchEvent(event);
      });
    },
    back() {
      this.$router.back();
    },
  },
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
.cert {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 18;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  .show {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
  }
  .back {
    margin-bottom: 2vh;
    img {
      width: 80px;
    }
  }
  .pic {
    position: relative;
    width: 100%;
    font-size: 0;
    p {
      position: absolute;
      width: 100%;
      text-align: center;
      font-size: 12px;
      font-weight: bold;
      color: #4d78ad;
      &.cretnum {
        left: 50%;
        bottom: 8%;
        transform: translate(-50%, -50%);
      }
      &.nickname {
        top: 45%;
      }
      &.date {
        left: 33.5%;
        bottom: 15%;
        transform: scale(0.7, 0.7);
        font-size: 11px;
        color: #3e3a39;
        text-align: left;
        font-weight: 600;
        span {
          border-color: #393a39;
          color: #3e3a39;
        }
      }
      span {
        padding: 0px 15px;
        color: #4d78ad;
        font-size: 12px;
        font-weight: bold;
        border-bottom: 1px solid #4d78ad;
      }
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
      background-repeat: no-repeat;
    }
    .left {
      width: 110px;
      background-image: url("../assets/img/btn_sprite.png");
      background-size: 100%;
      background-position: 0px -100px;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }
    .right {
      width: 110px;
      background-image: url("../assets/img/save_icon.png");
      background-size: 100%;
      background-position: center center;
    }
  }
}
</style>
