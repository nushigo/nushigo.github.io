/**
Name:Default Script
URL:http://172.18.2.242/~kzg7/common/js/def.js
Author:MoshiNuku!!(Wakabayashi,Kiuchi,Yomoda,Nukui)
Last Update:2016/07/21
**/

/* �y�[�W��[�փX�N���[�� */
/** #�������Ƀy�[�W���Ȃ牽���ł��ړ������A�L�~�͉����֍s���H **/
$(function(){
	$('a[href^=#]').click(function(){
		var speed = 1000;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});