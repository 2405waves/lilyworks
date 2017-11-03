$(function(){
        jQuery(".box").slide({          
          trigger:"mouseover",
          titCell:".num li",        
          mainCell:".pic",
          effect:"fade",                                   
          autoPlay:"true",
          delayTime:300,
          pnLoop:"true",
          easing:"swing", 
          titOnClassName:"active"
        });
      })