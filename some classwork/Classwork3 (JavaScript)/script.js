document.write("A text added with document.write()<br>");
document.write("<b>This is a bold text added with document.write()</b><br>");
document.write(`Number of anchors: ${document.getElementsByTagName("a").length}<br>`);
document.write(`innerHTML of the first anchor: ${document.getElementsByTagName("a")[0].innerHTML}<br>`);
document.write(`Number of forms: ${document.getElementsByTagName("form").length}<br>`);
document.write(`Name of the first form: ${document.getElementsByTagName("form")[0].name}<br>`);
document.write(`Number of imgs: ${document.getElementsByTagName("img").length}<br>`);
document.write(`Id of the first img: ${document.getElementsByTagName("img")[0].id}<br>`);
document.write(`Number of links: ${document.getElementsByTagName("link").length}<br>`);
document.write(`Id of the first link: ${document.getElementsByTagName("link")[0].id}<br>`);
document.write(`Name of the domain: ${window.location.hostname}<br>`);
document.write(`Document title: ${document.title}<br>`);
document.write(`Document URL: ${document.URL}<br>`);
document.write("<br />");

document.write(`Name of the button: ${document.getElementsByTagName("input")[0].name}<br>`);
document.write(`Type of the button: ${document.getElementsByTagName("input")[0].type}<br>`);
document.write(`innerHTML of the button: ${document.getElementsByTagName("input")[0].value}<br>`);
document.write(`Button is in form with id: ${document.getElementsByTagName("input")[0].parentNode.id}<br> `);
document.write("<br />");

document.write(`Значение каждого элемента в формах: <br>`)
for (i=0;i<document.getElementsByTagName("form").length;i++)
    {
        document.write(document.getElementsByTagName("form")[i].innerHTML);
        document.write("<br />");
    }
document.write("<br />");
document.write(`Action and enctype of form: ${document.getElementsByTagName("form")[0].action} and ${document.getElementsByTagName("form")[0].enctype}<br>`)
document.write(`Количество элементов в форме: ${document.getElementsByTagName("form")[0].length} <br>`);
document.write("<br />");
document.write(`Альтернативный текст к картинке 1: ${document.getElementsByTagName("img")[0].alt} <br>`);
document.write(`Название к картинке 1: ${document.getElementsByTagName("img")[0].name} <br>`);

function ChangeTable(){
    if (document.getElementById("table1").style.border != "20px solid darkgray"){
        document.getElementById("table1").style.border="20px solid darkgray";
        document.getElementById("table1").cellSpacing="10";
    }
    else {
        document.getElementById("table1").style.border="20px solid darkblue";
        document.getElementById("table1").cellSpacing="5";
    }
}

function DeleteRow(id){
    document.getElementById(id).deleteRow(0);
}
function InsertRow1(id){
    var tbody = document.getElementById(id).getElementsByTagName("TBODY")[0];
    var row = document.createElement("TR");
    var td1 = document.createElement("TD");
    td1.appendChild(document.createTextNode("1"));
    var td2 = document.createElement("TD");
    td2.appendChild (document.createTextNode("2"));
    var td3 = document.createElement("TD");
    td3.appendChild (document.createTextNode("3"));
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    tbody.appendChild(row);
}