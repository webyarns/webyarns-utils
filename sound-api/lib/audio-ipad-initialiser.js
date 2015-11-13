$(function(){

   $("#ipad-audio-init").bind("touchend click", function(){
       var $audioList = $("audio");
       $audioList.each(function(i,elem){
            elem.play();
            elem.pause();
        });
       $(this).remove();
       Reveal.next();
    });

});