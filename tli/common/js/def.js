/**
Name:Default Script
URL:https://nushigo.github.io/tli/common/js/def.js
Author:MoshiNuku!!(Wa,Ki,Yo,Nu)
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