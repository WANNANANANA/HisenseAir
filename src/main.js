import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/reset.css'
import 'script-loader!./assets/js/wx'
import { ajax } from './assets/js/ajax'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

const link = window.location.href;

// console.log(App.data().stage);

function successFun(data) {
    data = JSON.parse(data);
    var app_id = data.app_id;
    var timestamp = data.timestamp;
    var noncestr = data.noncestr;
    var signature = data.signature;
    wx.config({
        debug: false,
        appId: app_id,
        timestamp: timestamp,
        nonceStr: noncestr,
        signature: signature,
        // JSSDK 1.4.0以上版本支持
        jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData', 'hideMenuItems']
    });

    wx.ready(function() {
        //     // var shareData = {
        //     //     title: '海信中央空调智慧体验中心', // 分享标题  
        //     //     desc: '聚集能量,植树为善', // 分享描述   
        //     //     link: link, // 分享链接   
        //     //     imgUrl: 'http://www.huizhangongsi.com/hisenseAir/img/logo.png', // 分享图片
        //     //     success: function() {
        //     //         return false;
        //     //     },
        //     //     cancel: function() {
        //     //         return false;
        //     //     }
        //     // };

        //     // //  分享给朋友及分享到QQ
        //     // wx.updateAppMessageShareData(shareData);
        //     // // 分享到朋友圈及分享到QQ空间
        //     // wx.updateTimelineShareData(shareData);

        wx.hideMenuItems({
            menuList: ["menuItem:share:appMessage", "menuItem:share:timeline"]
        });

    })
}

ajax({ url: './wx_api/api.php', ajaxData: { url: link }, success: successFun });