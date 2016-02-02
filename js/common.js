// 图片预加载及进度条
window.addEventListener('DOMContentLoaded', function() {
    "use strict";
    var ql = new QueryLoader2(document.querySelector("body"), {
        barColor: "#666",
        backgroundColor: "#eee",
        percentage: true,
        barHeight: 10,
        minimumTime: 500,
        fadeOutTime: 3000
    });
});


$(document).ready(function(){
	
	
	// 轮播背景
	$("#teaser").bgswitcher({
		images: ["img/main1.jpg", "img/main2.jpg", "img/main3.jpg", "img/main4.jpg", "img/main5.jpg", "img/main6.jpg", "img/main7.jpg", "img/main8.jpg", "img/main9.jpg"],
		duration: 1000
	});
	
	
	// 绘文字循环切换
	$('.nosee').dynamo({
		speed: 500,
		delay: 1000,
		lines: ["🙈", "🙉", "🙊"]
	});
	
	
	$('.noseetxt').dynamo({
		speed: 500,
		delay: 1000,
		lines: ["非礼勿视", "非礼勿听", "非礼勿言"]
	});
	
	
// 演習場を移動する要素
var moveElement = document.getElementById('circle');
// 円の半径
var radius = 20;
// 円の中心座標
var centerX = 20 - 10;
var centerY = 20 - 10;
// 円の角度
var angle = 0;

// アニメーションの実行
setInterval(function() {
	circumference();
}, 5);

// アニメーションの処理
function circumference() {
	// 角度毎の円周上の座標を取得
	var moveX = Math.cos(Math.PI / 180 * angle) * radius + centerX;
	var moveY = Math.sin(Math.PI / 180 * angle) * radius + centerY;
	// 座標位置に移動
	moveElement.style.left = moveX + 'px';
	moveElement.style.top = moveY + 'px';

	if(angle < 360) {
		// 角度を1度増やす
		angle++;
	} else {
		// 角度を0に戻す
		angle = 0;
	}
}
	
	
	
	
	// lightbox
	$(".lbx").fancybox({
		margin: 0,
		padding: 0,
		width: 350,
		height: 270,
		mouseWheel: 'false',
		autoCenter: 'true',
		helpers:{
			overlay:{
				css:{
					"background":"rgba(0,0,0,0.5)"
				}
			}
		},
		afterClose: function(){
			$("#lb").removeClass("face2");
		}
	});
	
	
	// 每次打开lightbox生成随机金额
	$(".lbx").click(function(document){
		var val = Math.round( Math.random()*200 )/100;
		$(".num").html(val);
	});
	
	
	// 点击发红包按钮显示二维码
	$(".btn span").click(function(document){
		$("#lb").addClass("face2");
	});
	
	
});




