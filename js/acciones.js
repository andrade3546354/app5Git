// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready", function(){
		$('#sonar'.tap(function() {
			navigator.notification.beep(2);
		});//cierre del beep
		$('#vibrar').tap(function(){
			navigator.notificatio.vibrate(2000);
		});//cierre de vibrar
	},false); //cierre del deviceready
});//cierre ready
