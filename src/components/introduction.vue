<template>
  <div class="introduction" :class="stageClass">
    <slot>
      <div class="sort" v-if="area == 1">
        <h3 class="title">智慧宏图</h3>
        <div class="content">
          <p>海信日立公司成立于2003年1月8日，是由海信集团与日立空调共同投资在青岛建立的集商用空调技术开发、产品制造、市场销售和用户服务为一体的大型合资企业，拥有大型变频多联式空调系统生产基地。</p>
          <img src="../assets/img/1-1.jpg" alt />
          <p>海信中央空调立足于合资平台，致力于打造全门类的中央空调大众消费品牌，旗下产品涵盖家用多联机、中小产品、水机产品、商用多联机等多种系列，可覆盖各种商用及家用项目领域，产品远销70多个国家。</p>
          <img src="../assets/img/1-2.jpg" alt />
        </div>
      </div>
      <div class="sort" v-if="area == 2">
        <h3 class="title">智尖科技</h3>
        <div class="content">
          <p>海信中央空调以科技推动产品创新，全面掌握世界领先的核心技术，控制技术，变频技术，全直流技术，换热技术和冷媒散热技术五大核心技术汇聚成了海信中央空调的精益品质。</p>
          <img src="../assets/img/2-1.jpg" alt />
          <p>三期整体规划展现在沙盘模型之上，通过触控联动屏幕可全面了解海信空调的智慧控制系统，全方位感知海信的硬核科技实力。</p>
          <img src="../assets/img/2-2.jpg" alt />
        </div>
      </div>
      <div class="sort" v-if="area == 3">
        <h3 class="title">智舒生活</h3>
        <div class="content">
          <p>海信智慧生态家，通过真正的绿色产品技术，力求为每一位用户带来更舒适的家居生活。</p>
          <img src="../assets/img/3-1.jpg" alt />
          <p>人感智慧系统-通过感应现场人员数量自动控制空调温度。</p>
          <img src="../assets/img/3-2.jpg" alt />
          <p>海信5G技术，采用自主研发的NB-IoT窄带物联网系统，为用户提供全生命周期的智慧空气。</p>
          <img src="../assets/img/3-3.jpg" alt />
          <img src="../assets/img/3-4.jpg" alt />
          <p>四度两感生态系统——海信中央空调从温度、湿度、洁净度、新鲜度、风感、听感-四度两感六个方面来为用户打造全健康的生活环境。</p>
          <h4>客厅-温度</h4>
          <p>极致控温，极端环境也能强劲制冷制热</p>
          <img src="../assets/img/3-5.jpg" alt />
          <h4>餐厅-洁净度</h4>
          <p>搭载Nanoe技术，各类有害杂质均能轻松净化，逐一击破</p>
          <img src="../assets/img/3-6.jpg" alt />
          <h4>起居室-风感</h4>
          <p>3D环绕送风，全屋尽享舒适</p>
          <img src="../assets/img/3-7.jpg" alt />

          <h4>书房-新鲜度</h4>
          <p>双向换气，清新空气无限循环</p>
          <img src="../assets/img/3-8.jpg" alt />
          <h4>卧室-听感</h4>
          <p>采用自主设计的直流电机，运转节能、效率更高，同时搭配涡轮风扇，大幅减少回风阻力，运行震动更小，运行更安静</p>
          <img src="../assets/img/3-9.jpg" alt />
          <h4>衣帽间-湿度</h4>
          <p>低温除湿，精准调控湿度，营造最佳舒适环境。</p>
          <img src="../assets/img/3-10.jpg" alt />
          <h4>全应用系统</h4>
          <p>连接生活各个方面，全方位保障舒适生活。</p>
          <img src="../assets/img/3-11.jpg" alt />
        </div>
      </div>
      <div class="sort" v-if="area == 4">
        <h3 class="title">智联世界</h3>
        <div class="content">
          <p>公建产品展示区，展区背景利用楼宇形态进行串联，空调产品阵列展示，主力产品包括M2系列多联机、G2系列多联机、三管制水源多联机、风冷模块、NEW X系列多联机和商用热水机。滑轨移屏结合实物动态展示相应空调内部构造和功能特性。</p>
          <img src="../assets/img/4-1.jpg" alt />
        </div>
      </div>
      <div class="sort" v-if="area == 5">
        <h3 class="title">智融万家</h3>
        <div class="content">
          <p>海信中央空调一直致力于为客户提供全流程的服务体验，现已拥有220名厂家专业技术人员，3000家授权安装商，1200家授权认证的服务商，从技术的专业性、安装的规范性、服务的及时性三个方面保证用户的使用。</p>
          <img src="../assets/img/5-1.jpg" alt />
        </div>
      </div>
    </slot>
  </div>
</template>
<script>
export default {
  name: "introduction",
  props: {
    stageClass: {
      // 这里接收当前阶段值 浇水后stage + 1 文字不变 但是边框颜色要随背景变化
      type: String,
      default: ""
    },
    area: {
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
  .sort {
    width: 100%;
    height: 100%;
  }
  .title {
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 76%;
    height: 32px;
    background-color: rgba(60, 212, 0, 1);
    text-shadow: 2px 2px 2px #326a00;
    transition: all 1s linear;
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
    p {
      font-size: 14px;
      text-indent: 2em;
      line-height: 20px;
      padding: 10px 0px;
      &:first-child {
        padding-top: 0px;
      }
    }
    h4 {
      text-align: center;
      padding-top: 15px;
    }
    img {
      width: 100%;
    }
  }
}
</style>
