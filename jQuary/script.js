$(document).ready(function(){
  $("p").css("fontSize","30px");
  $("p").css("color","orange");
  $("a").prepend("<div id='emoji'>↗</div>"); //добавление стрелочки перед каждой ссылкой
  $("a").attr("target","_blank"); //добавляет атрибут таргет, чтобы ссылка открывалась в новой вкладке
  //$("a").attr("href","$('a').replace('http',https')");//изменяет все http na https
  function del(){
  for(let i = 0; i<document.links.length; i++)
  {
  document.getElementById("emoji").remove();
  $("a").removeAttr("target");
  };
  }
  $(".par").append("<input type='reset' id='button'>");
  $("#button").click(function() {
  $("#emoji").remove();
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
});