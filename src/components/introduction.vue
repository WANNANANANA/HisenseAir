<template>
  <div class="introduction" :class="stage">
    <h3 class="title">智慧宏图展区介绍</h3>
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
    stage: {
      type: Number,
      required: true
    }
  },
  created() {
    console.log(this.stageTitle);
  },
  data() {
    return {};
  },
  computed: {
    stageTitle() {
      return "part" + this.stage;
    }
  }
};
</script>
<style lang="less">
.introduction {
  &.part1 {
    border-color: rgb(156, 156, 253);
    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 10px;
      background: rgb(156, 156, 253);
    }
  }
  &.part2 {
    border-color: rgb(0, 255, 242);
    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 10px;
      background: rgb(0, 255, 242);
    }
  }
  &.part3 {
    border-color: rgb(189, 255, 83);
    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 10px;
      background: rgb(189, 255, 83);
    }
  }
  &.part4 {
    border-color: rgb(255, 208, 0);
    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 10px;
      background: rgb(255, 208, 0);
    }
  }
  &.part5 {
    border-color: rgb(253, 126, 175);
    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 10px;
      background: rgb(253, 126, 175);
    }
  }
  position: relative;
  width: 100%;
  height: 42%;
  border-width: 2px;
  border: 2px solid rgb(255, 166, 0);
  border-radius: 12px;
  padding-top: 30px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.5);
  h3 {
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(255, 166, 0);
    width: 76%;
    height: 32px;
    border-radius: 16px 16px;
    line-height: 32px;
    text-align: center;
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
      background-color: rgb(255, 234, 195);
    }
    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 10px;
      background: rgb(255, 166, 0);
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
