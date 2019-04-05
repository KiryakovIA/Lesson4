var questions = [];
task1();
task3();



function task1()
{
	console.log('Task 1')
	let num = +prompt('Введите число от 0 до 999');
	console.log(getObject(num));
}


function getObject(num)
{
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

function task3() {
	defineQuestions();

	let play = true;
	let round = 0;
	while(play == true && round < questions.length)
	{	
		play = makeRound(round);
		round++;
	}

	if (play)
	{
		console.log('Ваш выигрыш ' + 3000000);
	}
}


function defineQuestions()
{
	defineQuestion(500, 'Что вставляют в степлер?', 'патроны', 'ядра', 'снаряды', 'скобы', 4);
	defineQuestion(1000, 'Что планирует человек, собирающийся «залечь на дно»?', 'спрятаться и затаиться', 'пойти на рыбалку', 'заняться дайвингом', 'утопиться', 1);
	defineQuestion(2000, 'Что такое «карамба»?', 'испанское ругательство', 'щупальца каракатицы', 'разбитая иномарка', 'столица Караханидского государства', 1);
	defineQuestion(3000, 'Откуда все мы вышли, если верить если верить песне «Смело, товарищи, в ногу!»?', 'из гоголевской шинели', 'из отряда приматов', 'из вагона', 'из народа', 4);
	defineQuestion(5000, 'У кого в гостях Винни-Пух попал в безвыходное положение?', 'у Пятачка', 'у Кролика', 'у Совы', 'у ослика Иа-Иа', 2);
	defineQuestion(10000, 'Что означает аббревиатура «имхо», которая часто встречается в интернет-общении?', 'вопреки вышеизложенному', 'несмотря на авторитеты', 'уточняя подробности', 'по моему мнению', 4);
	defineQuestion(15000, 'Что любит каждый сибарит?', 'науку и образование', 'физкультуру и спорт', 'роскошь и удовольствие', 'боль и унижение', 3);
	defineQuestion(25000, 'Как закончить строчку стихотворения Маяковского: «Двое в комнате. Я и…»?', 'лень', 'Ленин', 'Лиля', 'Леннон', 2);
	defineQuestion(50000, 'С чем связано возникновение выражения «пуститься во все тяжкие»?', 'с пушками', 'с бочками', 'с колоколами', 'с каретами', 3);
	defineQuestion(100000, 'Как держит хвост довольная кошка?', 'тромбоном', 'саксофоном', 'геликоном', 'трубой', 4);
	defineQuestion(200000, 'Что отдыхающий использует на пляже?', 'стояк', 'лежак', 'армяк', 'товарняк', 2);
	defineQuestion(400000, 'Чем, как говорят, поросло то, что стерлось из памяти?', 'бельем', 'быльем', 'сырьем', 'старьем', 2);
	defineQuestion(800000, 'Как заканчивается название пьесы Александра Островского «На всякого мудреца довольно…»?', 'остроты', 'суеты', 'простоты', 'ерунды', 3);
	defineQuestion(1500000, 'Какой вопрос обычно задает ведущий аукциона?', 'Кто больше?', 'Кто меньше?', 'Кто следующий?', 'Кто последний?', 1);
	defineQuestion(3000000, 'Как называется река, на которой стоит город Уфа?', 'Белая', 'Красная', 'Синяя', 'Зеленая', 1);
}

function defineQuestion(cost, text, answer1, answer2, answer3, answer4, correct)
{
	let qwestion = 
	{
		number: questions.length + 1,
		cost: cost,
		text: text,
		answers: [answer1, answer2, answer3, answer4],
		correct: correct
	};
	questions.push(qwestion);
}


function generateQuestion(question) {
	let text = "Раунд "+ qwestion.number + ' на '+ qwestion.cost +'\r';
	text += qwestion.text + '\r';
	text += '0 - Забрать деньги\n';
	for (let i = 0; i < qwestion.answers.length; i++)
	{
		text += (i + 1) + ' - ' + qwestion.answers[i] + '\n';
	}
	return text;
}

function makeRound(round)
{
	qwestion = questions[round];
	let text = "Раунд "+ qwestion.number + ' на '+ qwestion.cost +'\r';
	text += qwestion.text + '\r';
	for (let i = 0; i < qwestion.answers.length; i++)
	{
		text += (i + 1) + ' - ' + qwestion.answers[i] + '\n';
	}

	if (round > 0)
		text += '0 - забрать деньги'
	
	let val = prompt(text);
	if (val == 0 && round > 0)
	{
		console.log('Ваш выигрыш ' +  questions[round - 1].cost);
		return false;
	}
	else if (val == qwestion.correct)
	{
		console.log('Ответ верный. Вы заработали ' + qwestion.cost);
		return true;
	}
	else
	{
		let cost;
		if (round > 10)
		{
			cost = 100000;
		}
		else if (round > 5)
		{
			cost = 5000;
		}
		else
		{
			cost = 0;
		}
		console.log('Ответ не верный. Правильный ответ: ' + qwestion.answers[qwestion.correct - 1]);
		console.log('Ваш выигрыш ' +  cost);
		return false;
	}
}