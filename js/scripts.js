$(document).ready(function() {
    $("#Design").click(function(){
      $(".design-hidden").toggle();
      $(".design-showing").toggle();
    });
    $("#Development").click(function() {
      $(".development-hidden").toggle();
      $(".development-showing").toggle();
    });
    $("#Product").click(function() {
      $(".product-showing").toggle();
      $(".product-hidden").toggle();
    }); 