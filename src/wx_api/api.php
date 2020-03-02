<?php
/**
 * Created by PhpStorm.
 * User: danger.yang
 * Date: 2019/11/8
 * Time: 20:03
 */
date_default_timezone_set('PRC');

$wx_arr = [
    'redirect_url'  => 'http://www.huizhangongsi.com/hisenseAir/', 
    'app_id' => 'wxc3d2077e367b9d2a', 
    'app_secret' => 'e6e58f3cc842ae4886d17640a4adf011',
    'authority_url' => 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=%s&redirect_uri=%s&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect', //授权URL
    'at_url'        => 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=%s&secret=%s&code=%s&grant_type=authorization_code', //授权登录获取access_token
    'userinfo_url'  => 'https://api.weixin.qq.com/sns/userinfo?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN',
    'base_at_url'   => 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=%s&secret=%s', //获取基础支持access_token

];


$data = getBaseWx($wx_arr);
$ticket = $data['ticket'];

$url = $_GET['url'];

$back = [
    'noncestr'  => md5(rand(1, 100)),
    'timestamp' => time(),
    'url'       => $url,
    'ticket'    => $ticket,
    'app_id'    => $wx_arr['app_id'],
];

$str = "jsapi_ticket={$back['ticket']}&noncestr={$back['noncestr']}&timestamp={$back['timestamp']}&url={$back['url']}";

$back['signature'] = sha1($str);

exit(json_encode($back));

//获取基础支持access_token
function getBaseWx($wx_arr = []) {
    $data = getAccessToken();
    if (!$data) {
        $url = sprintf($wx_arr['base_at_url'], $wx_arr['app_id'], $wx_arr['app_secret']);

        $json = @file_get_contents($url);

        $token_arr = @json_decode($json, true);
        if (!isset($token_arr['errcode']) && isset($token_arr['access_token'])) {
            $access_token = $token_arr['access_token'];

            $url = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=%s&type=jsapi';
            $url = sprintf($url, $access_token);

            $json = @file_get_contents($url);

            $ticket_arr = @json_decode($json, true);

            if ($ticket_arr['errcode'] == 0 && $ticket_arr['errmsg'] == 'ok') {
                $jsapi_ticket = $ticket_arr['ticket'];
            } else {
                $jsapi_ticket = null;
            }

            $data = [
                'access_token' => $access_token,
                'ticket'       => $jsapi_ticket,
                'expire_time'  => date('Y-m-d H:i:s', time()),
            ];
            $file_name = 'data.txt';
            if (file_exists($file_name)) {
                file_put_contents($file_name, serialize($data));
            } else {
                fopen($file_name, 'w');
                file_put_contents($file_name, serialize($data));
            }
        } else {
            getBaseWx($wx_arr);
        }
    }

    return $data;
}

//检测access_token是否过期
function getAccessToken() {
    $file_name = 'data.text';

    if (file_exists($file_name)) {
        $data = unserialize(file_get_contents($file_name));

        if (!isset($data['access_token']) || !isset($data['ticket']) || empty($data['access_token']) || empty($data['ticket'])) {
            $data = false;
        }

        if ($data['expire_time'] < date('Y-m-d H:i:s', time() - 7000)) {
            $data = false;  //已过期
        }
    } else {
        $data = false;
    }

    return $data;
}