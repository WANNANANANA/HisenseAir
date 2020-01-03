<template>
  <div class="introduction">
    <h3 class="title">智慧宏图展区介绍</h3>
    <div class="content">
      <p>这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话这是一段无限复制的话。</p>
      <img src="../assets/img/seed_bg.png" alt />
    </div>
  </div>
</template>
<script>
export default {
  name: "introduction",
  data() {
    return {};
  }
};
</script>
<style lang="less">
.introduction {
  position: relative;
  width: 100%;
  height: 42%;
  border: 4px solid rgb(255, 166, 0);
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
