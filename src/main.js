import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/reset.css'
import 'script-loader!./assets/js/wx'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

let link = window.location.href,
    search = window.location.search.slice(1),
    stage = search.match(/(^|&)stage=([^&]*)(&|$)/);
stage = stage == null ? null : stage[2];

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
        if (stage == 5) {
            var shareData = {
                title: '海信中央空调智慧体验中心', // 分享标题  
                desc: '聚集能量,植树为善', // 分享描述   
                link: link, // 分享链接   
                imgUrl: 'http://www.huizhangongsi.com/hisenseAir/logo.png', // 分享图片
                success: function() {
                    return false;
                },
                cancel: function() {
                    return false;
                }
            };
            //  分享给朋友及分享到QQ
            wx.updateAppMessageShareData(shareData);
            // 分享到朋友圈及分享到QQ空间
            wx.updateTimelineShareData(shareData);
        } else {
            wx.hideMenuItems({
                menuList: ["menuItem:share:appMessage", "menuItem:share:timeline", "menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:share:QZone"]
            });
        }
    })
}

axios.get('./wx_api/api.php', {
    params: {
        url: link
    }
}).then(successFun)