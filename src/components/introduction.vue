<template>
  <div class="introduction" :class="stageClass">
    <h3 class="title">智联世界展区介绍</h3>
    <div class="content">
      <slot>
        <p>这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话。</p>
        <img src="../assets/img/seed_bg.png" alt />
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "introduction",
  props: {
    stageClass: {
      // 这里接收当前阶段值 浇水后stage + 1 文字不变 但是边框颜色要随背景变化
      type: Number | String,
      default: ""
    }
  }
};
</script>
<style lang="less">
.introduction {
  &.stage1 {
    border-color: rgba(254, 183, 35, 1);
    .title {
      text-shadow: 2px 2px 2px #845700;
      background-color: rgba(254, 183, 35, 1);
    }
    .content {
      &::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        background-color: rgba(254, 183, 35, 1);
      }

      &::-webkit-scrollbar {
        /*滚动条整体样式*/
        background-color: rgba(254, 183, 35, 0.3);
      }
    }
  }
  &.stage2 {
    border-color: rgba(176, 196, 108, 1);
    .title {
      text-shadow: 2px 2px 2px #638000;
      background-color: rgba(176, 196, 108, 1);
    }
    .content {
      &::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        background-color: rgba(176, 196, 108, 1);
      }
      &::-webkit-scrollbar {
        /*滚动条整体样式*/
        background-color: rgba(176, 196, 108, 0.3);
      }
    }
  }
  &.stage3 {
    border-color: rgba(117, 215, 29, 1);
    .title {
      text-shadow: 2px 2px 2px #33730d;
      background-color: rgba(117, 215, 29, 1);
    }
    .content {
      &::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        background-color: rgba(117, 215, 29, 1);
      }
      &::-webkit-scrollbar {
        /*滚动条整体样式*/
        background-color: rgba(117, 215, 29, 0.3);
      }
    }
  }
  position: relative;
  width: 100%;
  height: 42%;
  border-width: 2px;
  border: 2px solid rgba(60, 212, 0, 1);
  border-radius: 12px;
  padding-top: 30px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 1s linear;
  .title {
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 76%;
    height: 32px;
    background-color: rgba(60, 212, 0, 1);
    text-shadow: 2px 2px 2px #326a00;
    border-radius: 16px 16px;
    line-height: 32px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
  }
  .content {
    width: 98%;
    height: 100%;
    font-size: 15px;
    padding: 0px 20px 0px 20px;
    overflow: scroll;
    &::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 4px;
      height: 1px;
      background-color: rgba(60, 212, 0, 0.3);
    }
    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 10px;
      background-color: rgba(60, 212, 0, 1);
    }
    &::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      border-radius: 10px;
    }
    img {
      width: 100%;
    }
  }
}
</style>
