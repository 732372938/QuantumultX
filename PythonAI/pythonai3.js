
/*
微信公众号：少年歌行PRO 制作
电报资源发布群（禁言纯净）@shao66 
电报水友交流群（资源同步）@sngxpro
电报私聊 @shaogebot
QQ群：654371081
圈X配置：
[rewrite_local]
^https:\/\/ws\.60he\.com\/(book.*|user.*) url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/PythonAI/pythonai3.js
[mitm]
hostname = ws.60he.com
*/





var body = $response.body;
var url = $request.url;

const path1 = '\/user.*';
const path2 = '\/book.*';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj.data["nickname"] = "公众号：少年歌行pro";
	obj.data["vip"] = 365;
	body = JSON.stringify(obj);  
 }
if (url.indexOf(path2) != -1) {
	obj.data["isFree"] = 1;
	body = JSON.stringify(obj);  
 }

$done({body});
