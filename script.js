let value = prompt('введите символ');
let qnt = +prompt('введите количество');
let array = [];

function arrayFill(value, qnt) {
	for (let i = 0; i < qnt; i++) {
	array.push(value);
	}
	alert(array);
}

arrayFill(value, qnt);
