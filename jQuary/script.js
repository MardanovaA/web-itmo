$(document).ready(function(){
  $(".Social, .text").css("color", "orange");
  $(".Search, .number").css("fontSize", "30px");
  $("input").attr("disabled", true);
  $("[href]").prepend("↗"); //добавление стрелочки перед каждой ссылкой
  $("[href]").attr("target", "_blank");
  $("[href]").each(function() {
      $(this).attr("href", $(this).attr("href").replace("http://", "https://"));
  });

  $(".DeleteButton").click(function() {
    $("[href]").each(function() {
        $(this).contents().eq(0).remove();
    });
    $("[href]").removeAttr("target");
    $(this).attr('disabled', true);
  });

  $("a").each(function() {
    if($(this).attr("href").indexOf("http:") != -1) {
    $(this).attr("href", $(this).attr("href").replace("http", "https"));
    }
  });

  // Эффекты
  $('#13').click(function(){
    $('#12').fadeOut('slow', function() {});
  });

  $('#23').click(function(){
    $('#22').fadeTo("fast", "0.5", function() {});
  });

  $('#33').click(function(){
    $('#32').slideToggle("slow", function() {});
  });

  $("#42").hide();
  $('#43').click(function(){
    $('#42').show();
  });

  $('#53').click(function(){
    $('#52').animate({ fontSize: '20px' })
  });
});