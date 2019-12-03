function createTable() {
	//Берет значения введенные пользователем
	let height = document.getElementById('form').children[0].value;
	let width = document.getElementById('form').children[1].value;
	//Создает таблицу
	document.getElementById('tab').innerHTML += '<table id="table"><tbody id="tbody"></tbody></table>';
	for (let i = 0; i < height; i++){
		document.getElementById('tbody').innerHTML += '<tr></tr>';
		for (let j = 0; j < width; j++){
			document.getElementById('tbody').children[i].innerHTML += '<td><form><input type="text" value="textarea"></input><input type="button" value="Сохранить" onclick="saveText(' + i + ', ' + j + ')"></input><form></td>';
		}
	}
	//Скрывает форму ввода значения
	document.getElementById('func').removeChild(document.getElementById('form'));
	//Создает шапку с функциями изменений таблицы
	for (let k = 0; k < 5; k++){
		document.getElementById('func').innerHTML += '<div class="funcs"></div>';
	}
	localStorage.setItem('height', height);
	localStorage.setItem('width', width);
	document.getElementById('func').children[0].innerHTML += '<form><input type="text" value="Введите ширину таблицы"></input><select><option disabled selected>Рамка</option><option>hidden</option><option>dotted</option><option>dashed</option><option>solid</option></select><input id="prim" type="button" onclick="changeTableWidth()" value="Применить ширину и рамку"></input></form>';
	document.getElementById('func').children[1].innerHTML += '<form><input id="header" type="text" value="Введите заголовок"></input><input type="button" onclick="createHeader()" value="Создать заголовок"></input></form>';
	document.getElementById('func').children[2].innerHTML += '<form><input type="text" value="Удалить строку" id="remRow"></input><input type="button" onclick="deleteRow()" value="Удалить"></input></form>';
	document.getElementById('func').children[3].innerHTML += '<input type="button" onclick="magic()" value="Великий рандом!"></input>';
	document.getElementById('func').children[4].innerHTML += '<input type="button" onclick="removeTable()" value="Удалить таблицу"></input>';
}

//Сохранить значения, введенные в таблицу
function saveText(row, column) {
	let cell = document.getElementById('tbody').children[row].children[column];
	let mustRemove = cell.children[0];
	let savedText = mustRemove.children[0].value;
	cell.removeChild(mustRemove);
	cell.innerHTML += '<p>' + savedText + '</p>';
}
//Меняет ширину и рамку
function changeTableWidth() {
	document.getElementById('table').style = 'width: ' + document.getElementsByTagName('select')[0].previousSibling.value + 'px; border: 2px ' + document.getElementsByTagName('select')[0].value + ' black;';
}
//Заголовок
function createHeader() {
	document.getElementById('tbody').innerHTML = '<tr><td>'+ document.getElementById('header').value +'</td></tr>' + document.getElementById('tbody').innerHTML;
}

function deleteRow() {
	let row = document.getElementById('remRow').value;
	let limit = document.getElementById('tbody').children.length;
	if ((1 <= row) && (row <= limit) && (Math.floor(row) == row)){
		document.getElementById('tbody').children[row-1].remove();
		return;
	}
	alert("Ошибка, попобуйте другое значение")
	return;
}

function magic(){
	//выбирает рандомное действие и ячейку, обращается к нужной ячейке
	let mag = Math.ceil(Math.random() * 5);
	let row = Math.floor(Math.random() * localStorage.getItem('height')), column = Math.floor(Math.random() * localStorage.getItem('width'));
	let randomCeil = document.getElementById('tbody').children[row].children[column].firstChild;
	switch (mag){
		case 1:
			//Удаляет сожержимое
			randomCeil.parentNode.innerHTML += '<form><input type="text" value="textarea"></input><input type="button" value="Сохранить" onclick="saveText(' + row + ', ' + column + ')"></input><form>';
			document.getElementById('tbody').children[row].children[column].firstChild.remove();
			break;
		case 2:
			//Меняет цвет текста
			let fc1 = Math.floor(Math.random() * 256), fc2 = Math.floor(Math.random() * 256), fc3 = Math.floor(Math.random() * 256);
			randomCeil.style = 'color: rgb('+fc1+', '+fc2+', '+fc3+'); ';
			break;
		case 3:
			//Меняет цвет фона
			let bg1 = Math.floor(Math.random() * 256), bg2 = Math.floor(Math.random() * 256), bg3 = Math.floor(Math.random() * 256);
			randomCeil.style = 'background-color: rgb('+bg1+', '+bg2+', '+bg3+');';
			break;
		case 4:
			//Изменение шрифта
			let font = Math.ceil(Math.random() * 11 + 14);
			randomCeil.style = 'font-size: '+font+'px;';
			break;
		case 5:
			alert('Магия не получилась, попробуйте еще раз :с');
			break;
	}
	
}

function removeTable(){
	document.getElementById('func').innerHTML = '<form id="form"><input name="height" type="text" value="height"></input><input name="width" type="text" value="width"></input><input type="submit" onclick="createTable()"></input></form>';
	document.getElementById('tab').innerHTML = '';
}
