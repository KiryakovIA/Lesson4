task1();



function task1() {
	console.log('Task 1')
	let num = +prompt('Введите число от 0 до 999');
	console.log(getObject(num));
}


function getObject(num) {
	let res = {};
	if (num >= 0 && num <= 999)
	{
		res.hundreds = Math.floor(num / 100);
		num = num % 100;
		res.tens = Math.floor(num / 10);
		num = num % 10;
		res.units =  num;
	}
	else
	{
		console.log('Ошибка. Введите число от 0 до 999');
	}
	return res;
}