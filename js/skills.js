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
	 $(".subheading").css({"display":"block"});
	 $(".others").fadeIn(2000);
});
});
