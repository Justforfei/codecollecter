<?php
header("Content-Type:text/html;charset=gb2312");
require_once("./public.php");  //���ط���
//�Ϸ�����
 $appid="wx7f7bbdcd99e6fe8a";
 $jsapi_ticket = getcontents("http://weixin.hefei.cc/games/api/ticketapi.php");
//���ɷ�����Կ
$url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$timestamp = time();
$nonceStr = "heka".rand(1,1000)."string";
$string = "jsapi_ticket=".$jsapi_ticket."&noncestr=".$nonceStr.'&timestamp='.$timestamp."&url=$url";
$signature = sha1($string);
 echo $shareScript='<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script><script type="text/javascript">
window.shareData = {
        "imgUrl": "http://zt.hf.house365.com/ahzy/nvshen/images/dt.jpg",
        "sendFriendLink": "http://zt.hf.house365.com/ahzy/nvshen/index.php",
        "tTitle": "Ů����Ϯ������������㣡",
        "tContent":"��һ�̣���һ��ϣ���Լ��ǵ���~"
    };
    wx.config({
        debug: false, 
        appId: "'.$appid.'", 
        timestamp: '.$timestamp.',
        nonceStr:  "'.$nonceStr.'",
        signature: "'.$signature.'",
        jsApiList: ["onMenuShareTimeline",
            "onMenuShareAppMessage",
            "onMenuShareQQ",
            "onMenuShareWeibo",
			"chooseImage",
			"uploadImage"
			]
    });
    
    wx.ready(function (res) {
         //��������Ȧ
        wx.onMenuShareTimeline({
            title: window.shareData.tTitle, // �������
            link: window.shareData.sendFriendLink, // ��������
            imgUrl: window.shareData.imgUrl, // ����ͼ��
            success: function (res) {
                // �û�ȷ�Ϸ����ִ�еĻص�����
            },
            cancel: function () {
                // �û�ȡ�������ִ�еĻص�����
            }
        });
        //���������
        wx.onMenuShareAppMessage({
            title: window.shareData.tTitle, // �������
            desc: window.shareData.tContent, // ��������
            link: window.shareData.sendFriendLink, // ��������
            imgUrl: window.shareData.imgUrl, // ����ͼ��
            success: function (res) {
                // �û�ȷ�Ϸ����ִ�еĻص�����
            },
            cancel: function () {
                // �û�ȡ�������ִ�еĻص���
            }
        });
        //����qq
        wx.onMenuShareQQ({
            title: window.shareData.tTitle, // �������
            desc: window.shareData.tContent, // ��������
            link: window.shareData.sendFriendLink, // ��������
            imgUrl: window.shareData.imgUrl, // ����ͼ��
            success: function (res) {
                // �û�ȷ�Ϸ����ִ�еĻص�����
            },
            cancel: function () {
                // �û�ȡ�������ִ�еĻص�����
            }
        });
        //����΢��
        wx.onMenuShareWeibo({
            title: window.shareData.tTitle, // �������
            desc: window.shareData.tContent, // ��������
            link: window.shareData.sendFriendLink, // ��������
            imgUrl: window.shareData.imgUrl, // ����ͼ��
            success: function (res) {
                // �û�ȷ�Ϸ����ִ�еĻص�����
            },
            cancel: function () {
                // �û�ȡ�������ִ�еĻص�����
            }
        });
    });



</script>';
?>