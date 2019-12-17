$(document).ready(function(){
  $(".Social, .text").css("color", "orange");
  $(".Search, .number").css("fontSize", "30px");
  $("input").attr("disabled", true);
  $("[href]").prepend("↗"); //добавление стрелочки перед каждой ссылкой
  $("[href]").attr("target", "_blank");

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

  //Ajax
  let button = document.createElement("button");
    button.setAttribute("id", "ajax");
    button.innerHTML = "Обновить страницу";
    document.getElementsByTagName('a')[0].setAttribute("id", "ajaxLoader");
    document.getElementsByTagName('body')[0].appendChild(button);
    $("button#ajax").click(function() {
        $("a#ajaxLoader").load("https://inxaoc.github.io/example/ajax-1.html");
    })


  let button2 = document.createElement("button");
  button2.setAttribute("id", "ajax2");
  button2.innerHTML = "JSON params";
  document.getElementsByTagName('body')[0].appendChild(button2);
  $("button#ajax2").click(function() {
      let obj = document.createElement("p");
      obj.setAttribute("id", "ajaxObj");
      document.getElementsByTagName('body')[0].appendChild(obj);
      $("p#ajaxObj").load("https://inxaoc.github.io/example/ajax.json", "abc=abc", parser);
  });

  function parser() {
    let json = document.getElementById('ajaxObj').innerHTML;
    document.getElementById('ajaxObj').innerHTML = '';
    let text = '';
    for (var i = 0; i < json.length; i++) {
        if (json[i] == '{' || json[i] == '[') {
            text += "<ul><li>";
        } else if (json[i] == '}' || json[i] == ']') {
            text += "</ul></ul>";
        } else if (json[i] == ',') {
            text += "</li><li>";
        } else if (json[i] == '"') {
            if (json[i - 1] == '{') {
                text += "<li>";
            } else if (json[i + 1] == '}') {
                text += "</li>";
            }
        } else text += json[i];
    }
    document.getElementById('ajaxObj').innerHTML = text;
    $("button#ajax2").attr("disabled",true);
}

});