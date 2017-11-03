  (function($){
    $(function(){
        var fact = false;
        //实现省份下拉效果
        $(".prince").click(function(){
          $(".princeWen").stop().slideToggle(600); 
          //箭头切换
          if(fact == false){
            $(".right1").css("display","none"); 
            $(".down1").css("display","block") ;
            fact=true;
          }else{
           $(".right1").css("display","block"); 
           $(".down1").css("display","none") ;      
          fact= false;
          }       
        })
     })
$(function(){
        jQuery(".box").slide({          
          trigger:"click",      
          mainCell:".picturess",
          effect:"fade",                                   
          autoPlay:"true", 
          delayTime:500,
          pnLoop:"true",          
        });
        
        jQuery(".sideMenu").slide({ 
          titCell:"h3",
          targetCell:"ul",
          effect:"slideDown", 
          delayTime:300 , 
          trigger:"mouseover", 
          triggerTime:150,
          defaultPlay:"true", 
          returnDefault:"true",
          easing:"swing"
          });
          
        jQuery(".sideMenu2").slide({ 
          titCell:"h3",
          targetCell:"ul",
          effect:"slideDown", 
          delayTime:300 , 
          trigger:"mouseover", 
          triggerTime:150,
          defaultPlay:"true", 
          returnDefault:"true",
          easing:"swing"
          });
       
        

      })

   
  })(jQuery)
  
  