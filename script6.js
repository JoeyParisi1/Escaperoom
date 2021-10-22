$(document).ready(function() {
  
$("[id=digit]").click(function() {
 $(".lock").addClass($(this).attr('class'));
    
$(".lock.6.3.9").css("background", "green").html("Next Link= https://codepen.io/Joeyparisi/pen/ZEJWqYM");
  });  
})