
$(document).ready(function() {
      
    
       $(".homenav").click(function() {
  
      //     $('html,body').animate({        scrollTop: $("#home").offset().top},         slow');       });
jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});   
});
