var load_img = [];

load_img.push( 'http://taofen8image.oss-cn-hangzhou.aliyuncs.com/qixi-1.mp3' );
load_img.push( 'http://taofen8image.oss-cn-hangzhou.aliyuncs.com/qixi-2.mp3' );
load_img.push( 'http://taofen8image.oss-cn-hangzhou.aliyuncs.com/qixi-3.mp3' );
load_img.push( 'http://zt.hf.house365.com/ahzy/nvshen/images/m.m4a' );

load_img.push( 'https://img.alicdn.com/imgextra/i1/169328611/TB2oviPepXXXXXcXpXXXXXXXXXX_!!169328611.png' );
load_img.push( 'https://img.alicdn.com/imgextra/i2/169328611/TB2c7y0epXXXXbsXXXXXXXXXXXX_!!169328611.jpg' );
load_img.push( 'https://img.alicdn.com/imgextra/i3/169328611/TB2g0a6epXXXXXnXXXXXXXXXXXX_!!169328611.png' );
load_img.push( 'https://img.alicdn.com/imgextra/i3/169328611/TB2PUOPepXXXXcUXXXXXXXXXXXX_!!169328611.png' );
load_img.push( 'https://img.alicdn.com/imgextra/i4/169328611/TB2JMbLepXXXXaUXXXXXXXXXXXX_!!169328611.png' );
load_img.push( 'https://img.alicdn.com/imgextra/i4/169328611/TB23gSFepXXXXbBXpXXXXXXXXXX_!!169328611.gif' );
load_img.push( 'https://img.alicdn.com/imgextra/i4/169328611/TB23gSFepXXXXbBXpXXXXXXXXXX_!!169328611.gif' );
load_img.push( 'https://img.alicdn.com/imgextra/i4/169328611/TB24hHqepXXXXb0XXXXXXXXXXXX_!!169328611.jpg' );
load_img.push( 'https://img.alicdn.com/imgextra/i2/169328611/TB2ZJ56epXXXXXlXXXXXXXXXXXX_!!169328611.png' );
load_img.push( 'https://img.alicdn.com/imgextra/i3/169328611/TB2zVrtepXXXXcHXpXXXXXXXXXX_!!169328611.png' );
load_img.push( 'https://img.alicdn.com/imgextra/i4/169328611/TB2NBvvepXXXXaaXXXXXXXXXXXX_!!169328611.jpg' );
load_img.push( 'https://img.alicdn.com/imgextra/i2/169328611/TB2BnSKepXXXXaDXpXXXXXXXXXX_!!169328611.jpg' );
load_img.push( 'https://img.alicdn.com/imgextra/i1/169328611/TB2su2uepXXXXbYXpXXXXXXXXXX_!!169328611.jpg' );
load_img.push( 'https://img.alicdn.com/imgextra/i1/169328611/TB2x8u0epXXXXaMXXXXXXXXXXXX_!!169328611.png' );
load_img.push( 'https://img.alicdn.com/imgextra/i1/169328611/TB2paLxepXXXXcAXpXXXXXXXXXX_!!169328611.jpg' );
load_img.push( 'https://img.alicdn.com/imgextra/i1/169328611/TB2AATfepXXXXXXXpXXXXXXXXXX_!!169328611.jpg' );
load_img.push( 'https://img.alicdn.com/imgextra/i2/169328611/TB2dG9FepXXXXbmXpXXXXXXXXXX_!!169328611.png' );
load_img.push( 'https://img.alicdn.com/imgextra/i1/169328611/TB2wGW6epXXXXXZXXXXXXXXXXXX_!!169328611.jpg' );
load_img.push( 'https://img.alicdn.com/imgextra/i4/169328611/TB2xA2sepXXXXbDXXXXXXXXXXXX_!!169328611.jpg' );
load_img.push( 'https://img.alicdn.com/imgextra/i1/169328611/TB2flnhepXXXXa5XXXXXXXXXXXX_!!169328611.jpg' );
load_img.push( 'https://img.alicdn.com/imgextra/i4/169328611/TB2_VC8epXXXXbvXpXXXXXXXXXX_!!169328611.jpg' );

// ��ԴͼƬ����
jQuery.imgpreload(load_img, {
	all: function() {
		$('#loading').hide();
		$('#p-index').show();
		indexList();
	}
});
var wordArr = ['��','��','��','��','��','��', ',', '��', '��', '��', '��', '��', '��', '��', '��'];
function alertWord(i) {
	$('#noYou').append(wordArr[i]);
}

function daojishi(i) {
	$('#daojishi').html(i);
}


var isCanSwiperight = false;

$(function() {
	$(document).on('touchmove', function(ev){ev.preventDefault()});
	
	var indexCanRight = true;
	//��ҳ
	touch.on('#p-index', 'swiperight', function(ev) {
		if(!isCanSwiperight) return;
		if(!indexCanRight) return;
		indexCanRight = false;
		$('#p-index').hide();
		$('#p-chat').show();
		for(var i=0; i<wordArr.length; i++) {
			setTimeout("alertWord('" + i + "')", 300*(i+1));
		}
		setTimeout(function(){
			$('#wordSend').show();
		}, 3000);
	});
	
	touch.on('#slideIndex2', 'swipeup', function(ev) {
		if(!indexCanRight) return;
		indexCanRight = false;
		$('#p-index').hide();
		$('#p-chat').show();
		for(var i=0; i<wordArr.length; i++) {
			setTimeout("alertWord('" + i + "')", 300*(i+1));
		}
		setTimeout(function(){
			$('#wordSend').show();
		}, 3000);
	});
	
	//������
	$('#chatImgSpan').bind('touchend',function(event) {
		event.preventDefault();
		$('#p-chat').hide();
		$('#p-weixin-1').show();
		
		$('#daojishi').show();
		for(var i=4,j=1; i>0; i--,j++) {
			setTimeout("daojishi('" + i + "')", 1000*j);
		}
		
		setTimeout(function() {
			$('#daojishi').hide();
			$("#weixin-1-max").show();
            $("#weixin-1-tk").show();
		}, 5000);
	});
	
	//Լ��
	$('#yuehuiOk').bind('touchend',function(event) {
		event.preventDefault();
		$('#p-weixin-1').hide();
		$('#p-weixin-2').show();
		setTimeout(function() {
			$("#weixin-2-max").show();
            $("#weixin-2-tk").show();
		}, 1000);
	});
	
	//���ﳵ
	$('#gouwucheOk').bind('touchend',function(event) {
		event.preventDefault();
		document.getElementById('audio-3').play();
		$('#p-weixin-2').hide();
		$('#p-weixin-3').show();
		
		//�ӵ绰
		/*
		touch.on('#target', 'touchstart', function(ev) {
			ev.preventDefault();
		});
		var target = document.getElementById("target");
		if(target) {
			target.style.webkitTransition = 'all ease 0.4s';
			touch.on(target, 'swiperight', function(ev) {
				this.style.webkitTransform = "translate3d(" + 380 + "px,0,0)";
				setTimeout(function() {
					$('#p-weixin-3').hide();
					$('#p-weixin-4').show();
					document.getElementById('audio-3').pause();
					document.getElementById('audio-4').play();
				}, 600);
			});
		}
		*/
		$('#playArea').bind('touchend',function(event) {
			$('#p-weixin-3').hide();
			$('#p-weixin-4').show();
			document.getElementById('audio-3').pause();
			document.getElementById('audio-4').play();
			setTimeout(function() {
				$('#p-weixin-4').hide();
				$('#p-weixin-5').show();
			}, 9000);
		});
		
		//�ӵ绰
		$('#playArea2').bind('touchend',function(event) {
			$('#p-weixin-3').hide();
			$('#p-weixin-4').show();
			document.getElementById('audio-3').pause();
			document.getElementById('audio-4').play();
			setTimeout(function() {
				$('#p-weixin-4').hide();
				$('#p-weixin-5').show();
			}, 10000);
		});
	});
})

function indexList() {
	setTimeout(function(){
		$('#p-index .weixin').prepend('<li class="on"><p>���� <span>2����ǰ</span></p><p style="padding-bottom:10px"><span style="float:left;font-size:32px;color:#fff">�װ��ģ����ڸ����أ� </span><span style="float:left"><img src="https://img.alicdn.com/imgextra/i4/169328611/TB23gSFepXXXXbBXpXXXXXXXXXX_!!169328611.gif"></span><span style="float:left">...</span></p></li>');
		document.getElementById('audio-1').play();
	},600);
	
	setTimeout(function(){
		$('#p-index .weixin li:eq(0)').removeClass('on');
		$('#p-index .weixin').prepend('<li class="on" style="background:url(https://img.alicdn.com/imgextra/i3/169328611/TB2g0a6epXXXXXnXXXXXXXXXXXX_!!169328611.png) 0 23px no-repeat;"><p>���� <span>1����ǰ</span></p><p>δ������ (3)</p></li>');
	},1200);
	
	setTimeout(function(){
		$('#p-index .weixin li:eq(0)').removeClass('on');
		$('#p-index .weixin').prepend('<li class="on"><p>���� <span>1����ǰ</span></p><p>��ô�����ӵ绰�أ��ٲ����Ҿ�Ҫ�����㿩~</p></li>');
	},1800);
	setTimeout(function(){
		$('#p-index .weixin li:eq(0)').removeClass('on');
		$('#p-index .weixin').prepend('<li class="on"><p>���� <span>����</span></p><p style="padding-bottom:10px"><span style="float:left;font-size:32px;color:#fff">�װ��գ�������Ϧ������Լ���~ </span><span style="float:left"><img src="https://img.alicdn.com/imgextra/i1/169328611/TB2oviPepXXXXXcXpXXXXXXXXXX_!!169328611.png"></span></p></li>');
	},2400);
	setTimeout(function(){
		$('#p-index .weixin li:eq(0)').removeClass('on');
		$('#p-index .weixin').prepend('<li class="on"><p>���� <span style="color:#35353a">����</span></p><p>���ڵ���Ŷ</p><p><span>�������鿴</span></p></li>');
	},3000);
	
	setTimeout(function(){
		$('#slideIndex').fadeIn(800);
		$('#slideIndex2').fadeIn(800);
		isCanSwiperight = true;
	},3000);
}

function wordSendClick() {
	$('#noYou').html('');
	$('#wordSend').hide();
	$('#sendWordSpan').show();
	setTimeout(function(){
		document.getElementById('audio-2').play();
		$("#chatImg").css("-webkit-transition", "all .5s ease-in-out");
	    $("#chatImg").css({"-webkit-transform":"translateY(0px)"});
	}, 500);
}
