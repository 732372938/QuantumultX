/*
微信公众号：少年歌行PRO 制作
电报资源发布群（禁言纯净）@shao66 
电报水友交流群（资源同步）@sngxpro
电报私聊 @shaogebot
QQ群：654371081
圈X配置：
[rewrite_local]
^https:\/\/www\.babybooks\.top\/v0\/profile url script-response-body babybooks.js
[mitm]
hostname = www.babybooks.top

*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const a = '\/v0\/profile';

if (url.indexOf(a) != -1) {
    obj.data.item.is_vip = ture,
	obj.data.item.vip_exp_time = 1800000000,
    body = JSON.stringify(obj);
}

$done({body});