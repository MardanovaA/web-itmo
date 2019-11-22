var string = "A text added with document.write()";
document.write(string, '<br>');
function Words(str){
    return str.split(" ").length;
}
document.write("Количество символов и слов: ", string.length, ', ', Words(string), '<br>');

document.write('URL: ', document.URL, '<br>');
document.write('Имя протокола: ', document.location.protocol, '<br>');
document.write('Имя файла: ', document.location.pathname.split('.')[0], '<br>');
document.write('Расширение: ', document.location.pathname.split('.')[1], '<br>');

//var strGET = window.location.search.replace('?', '');
//document.write('Подстрока параметров: ', strGET, '<br>');

document.write("<br> <br> Part 2 <br> <br>");

document.write('Новый анкор: ', "Hell".anchor("anc1"), ',   ');
document.write('Новый анкор2: ', "oy".anchor('anc2'), '<br>');
document.write('<a href="https://vk.com/doc88666898_522067275?hash=f8fc774c7bea3c173b&dl=41a36a29136fb68e4d" id="href1"> Href 1</a>, ');
document.write('<a href="https://vk.com/doc70287695_521138532?hash=bb140d5e51b334cd7b&dl=6927da2f231f3a2e81" id="Href2">Href 2</a><br>');
document.write('<img id="img1" src="https://www.gravatar.com/avatar/f09ca440e3426078cb2cb5bcb398abfe?s=32&d=identicon&r=PG" style="width: 10px" style="height:20px" id="img1">,    ');
document.write('<img id="img2" src="https://www.gravatar.com/avatar/f09ca440e3426078cb2cb5bcb398abfe?s=32&d=identicon&r=PG" style="height: 50px" id="img2"><br>');

document.write('Кол-во анкоров: ', document.anchors.length, '<br>');
document.write('Кол-во ссылок: ', document.links.length, '<br>');
document.write('Вывод 1 анкора: ', document.anchors[0].innerHTML, '<br>')
document.write('Кол-во картинок: ', document.images.length, '<br>');
document.write('Ширина первой картинки: ', document.images[0].width, '<br>');
document.write('Ширина самой широкой картинки: ', Math.max.apply(Math, Array.from(document.images).map(function (o) { return o.width; })), '<br>');
const reducer = (accumulator, currentValue) => accumulator + currentValue;
document.write('Cумма всех высот картинок: ', Array.from(document.images).map(function (o) { return o.height; }).reduce(reducer), '<br>');

document.write("<br> <br> Part 3 <br> <br>");
