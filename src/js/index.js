
import '../css/swiper-3.4.0.min.css';
import '../css/index.css';

function submit(){
	//con为评价内容
	var con = $('textarea')[1].value;
	console.log($('textarea')[1].value);
	layer.closeAll();
	layer.open({
		content: '评论提交成功',
		time: 3,
	})
}
$(document).ready(function(){
//初始化美洽客服
(function(m, ei, q, i, a, j, s) {
	m[i] = m[i] || function() {
		(m[i].a = m[i].a || []).push(arguments)
	};
	j = ei.createElement(q),
		s = ei.getElementsByTagName(q)[0];
	j.async = true;
	j.charset = 'UTF-8';
	j.src = 'https://static.meiqia.com/dist/meiqia.js?_=t';
	s.parentNode.insertBefore(j, s);
})
(window, document, 'script', '_MEIQIA');
_MEIQIA('entId', '44676');
_MEIQIA('fallback', 1);
 _MEIQIA('withoutBtn');
 
 
 
  $(".news-list-nav li").click(function(){
	$(".news-list-nav .active").removeClass("active");
    $(this).addClass("active");
  });
  
  function isWx(){
		var ua = window.navigator.userAgent.toLowerCase();
		//mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
		if (ua.match(/MicroMessenger/i) == 'micromessenger') {
			return true;
		} else {
			return false;
		}
	}
	//微信端不显示顶部标题
	if(isWx()){
		$(".header-box").css('display','none');
	}
	
	
	
$(document).ready(function(){
	//点赞
	$('.dianzan').click(function(){
		var num = parseInt($(this).context.children[1].innerText);
		$(this).context.children[1].innerText = num + 1;
	});
	
	//弹出评论框
	$('.article-btn-group .comment').click(function(){
		layer.open({
		  type: 1,
		  content: $('.comment-input').html(),
		  anim: 'up',
		  shadeClose: false
	  });
	});
	
		
});
	
	$(".btn").click(function(){
		alert('cs');
	})
	
	if(document.getElementsByClassName('news-list-nav').length){
		var oNavY = $(".news-list-nav").offset().top;
		 $(document).scroll(function(){
			var top = $(document).scrollTop();
			if(top > oNavY){
				$('.news-list-nav').addClass('in-top');
			}else{
				$('.in-top').removeClass('in-top');
			}
		});
	}
   
	var mySwiper = new Swiper('.swiper-container', {
		scrollbarHide: true,
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 0,
		grabCursor: true,
	})
	
	
	$(".close-btn").click(function(){
		$('.bottom-ad-box').css('display','none');
		$('.article-btn-group').css('bottom','1rem');
	})

	//不在微信端点击分享，提示进入微信
		$(".share").click(function(){
			if(isWx()){
				layer.open({
				  type: 1,
				  title: false,
				  closeBtn: 0,
				  shadeClose: true,
				  skin: 'shade-img',
				  content: $(".shade-box-all").html(),
				});
				$('.layui-m-layermain .layui-m-layersection').css('display','block');
			}else{
				layer.open({
					content: '请在微信端点击分享',
					btn: '我知道了',
					shadeClose: false,
					  title: false,
					  closeBtn: 0,
					})
			}
		})
		
});