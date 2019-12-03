function WordCount(str) { 
    return str.split(" ").length;
  }
  let str = "Любое предложение с любым количеством слов"
  document.write(str, '<br>');
  document.write('Количество букв и слов в предложении выше: ', str.length,' и ', WordCount(str), '<br>');
  document.write('URL: ', document.URL,'<br>');
  document.write('Имя протокола: ', document.location.protocol,'<br>');
  document.write('Имя файла: ', document.location.pathname.split('.')[0],'<br>');
  document.write('Расширение: ', document.location.pathname.split('.')[1],'<br>');
  let strGET = window.location.search.replace( '?', '');

  document.write('<b>Part 2</b><br>');
  let abc = 'Anchor +1';
  document.write('Новый анкор: ', abc.anchor('ban'), '<br>');
  document.write('Новый анкор2: ', abc.anchor('ban2'), '<br>');
  
  document.write('<a href="https://vk.com" target="_blank" id="VK">ВК</a><br>');
  document.write('<a href="https://google.com" target="_blank" id="google">Google</a><br>');
  
  document.write('<img src="https://vk.com/sticker/1-4303-128" id="new" width="150px" height="120px">');
  document.write('<img src="https://vk.com/sticker/1-3144-128" id="new2" width="100px" height="100px"><br>');
  
  document.write('Кол-во анкоров: ', document.anchors.length,'<br>');
  document.write('Кол-во ссылок: ', document.links.length,'<br>');
  document.write('Вывод имеющегося анкора: ', document.anchors[0].innerHTML, '<br>')
  document.write('Кол-во картинок: ', document.images.length,'<br>');
  document.write('Ширина первой картинки: ', document.images[0].width,'<br>');
  document.write('Ширина самой широкой картинки: ', Math.max.apply(Math, Array.from(document.images).map(function(o) { return o.width; })), '<br>');
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  document.write('Cумма всех высот картинок: ', Array.from(document.images).map(function(o) { return o.height; }).reduce(reducer),'<br>');
  document.write('id первой ссылки: ', document.links[0].id,'<br>');
  document.write('Название документа: ', document.title,'<br>');

  document.write('<b>Part 3</b><br>');
  
  for(i=0; i<10; i++){
    document.write('<form id="name', i,'">')
    document.write('<input type="button" class="ban" value="Имя формы" onClick="alert(\'Имя формы\')"></input>')
    document.write('<input type="button" value="Принадлежность" onClick="alert(',i,')"></input>')
    document.write('<input type="button" value="Пок. кол-во. полей" onClick="alert(',document.forms[i].childElementCount+1,')"></input>')
    document.write('</form>')
  }
  
  for(i=0; i<10; i+=2){
    document.write(document.forms[i].id, ', ')
  }
  document.write('<form id="form1"><input type="reset" value="Что делает эта кнопка?"></input><input type="text" placeholder="Ничего"></input></form>')
  document.write('<form id="form2"><input type="password"></input></form>');