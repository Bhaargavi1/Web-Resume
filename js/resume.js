$(document).ready(function(){

   $(".skillbar").each(function(){
      $(this).find(".skillbar-bar").animate({
          width:$(this).attr('data-percent')
      },6000); 
   }); 
    $(".curtain , .curtain2").click(function(){
      $(".curtain").animate({width:'0px'});
      $(".curtain").css({"border-width":"0px"});
      $(".curtain2").animate({width:'0px'});
      $(".curtain2").css({"border-width":"0px"});
	    $("div").removeClass("curtains_closed").addClass("curtains_open");
    });
});

  var angle = 0;
    function galleryspin(sign) { 
    spinner = document.querySelector("#spinner");
    if (!sign) { 
      angle = angle + 45; 
    } 
    else {
     angle = angle - 45; 
   }
    spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
  }



