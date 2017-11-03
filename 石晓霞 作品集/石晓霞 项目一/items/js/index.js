$(function(){
$(".footerChatImg").hover(function(){
    $(".small").qrcode({width: 80,height: 80,text: "http://www.blhere.com"}).stop().show();
   },function(){
    $(".small").stop().hide();
    $(".small").html("");
   })

})