let isDarkMode = false;
let isGamePlayed = false;

const correctGuessAnswers = [
	"Хмм, а ты не так глуп как я думал... Совершенно верно!",
	"Неплохо, я действительно загадал именно эту цифру!",
	"На этот раз ты отгадал, сыграем ещё раз?",
	"Да, молодец.",
	"Угадал!",
	"Верно!",
];
const wrongGuessAnswers = [
	"ХАХАХХА. Одна ошибка и ты... ОШИБСЯ!",
	"Ииииии... Неверно! Попробуем ещё раз?",
	"Nope. Try again!",
	"Никак нет!",
	"Не-а!",
	"Неверно!",
	"А вот и нет!",
	"Попробуй. Ещё. Раз.",
];
// Элементы веб-страницы
const body = document.querySelector("body");
const main = document.querySelector("main");
const themeMode = document.querySelector(".theme-mode");
const helpButton = document.querySelector(".help-button");
const guessInput = document.querySelector(".guess-input");
const guessButton = document.querySelector(".guess-button");
const questioneer = document.querySelector(".questioneer");
const questioneerMessage = document.querySelector(".questioneer-message");
const toDeveloper = document.querySelector(".to-developer");
// Функции
const setDeafault = () => {
	questioneer.style.backgroundColor = "antiquewhite";
	questioneerMessage.textContent = "Угадайте число!";
	guessInput.style.backgroundColor = "white";
	guessInput.value = "";
	guessButton.textContent = "Отправить";
};

const guessCheck = () => {
	const randNum = Math.trunc(Math.random() * 9);
	if (guessInput.value !== "") {
		if (guessInput.value.length != 1) {
			questioneerMessage.textContent =
				"Введите цифру от нуля до десяти. Вы ведь знали это, да?";
			questioneer.style.backgroundColor = "#ffff69";
			guessInput.style.backgroundColor = "#ffff69";
			console.log(" -- ", guessInput.value, randNum);
		} else if (guessInput.value === String(randNum)) {
			questioneerMessage.textContent =
				correctGuessAnswers[Math.floor(Math.random() * 6)];
			questioneer.style.backgroundColor = "#8cfd6c";
			guessInput.style.backgroundColor = "#8cfd6c";
			console.log(" -- ", guessInput.value, randNum);
		} else {
			questioneerMessage.textContent =
				wrongGuessAnswers[Math.floor(Math.random() * 8)];
			questioneer.style.backgroundColor = "#ff6b6b";
			guessInput.style.backgroundColor = "#ff6b6b";
			console.log(" -- ", guessInput.value, randNum);
		}
		guessButton.textContent = "Попробовать ещё раз?";
		guessButton.addEventListener(
			"click",
			setDeafault,
			(options = { once: true })
		);
	}
};

const changeTheme = () => {
	form = document.querySelector("form");
	if (isDarkMode) {
		body.style.backgroundColor = "white";
		themeMode.style.backgroundColor = "#444";
		themeMode.style.borderColor = "black";
		main.style.boxShadow = "10px 10px 20px darkgray";
		if (form !== null) form.style.boxShadow = "10px 10px 20px darkgray";
		isDarkMode = false;
	} else {
		body.style.backgroundColor = "#222";
		themeMode.style.backgroundColor = "#dbdbdb";
		themeMode.style.borderColor = "white";
		main.style.boxShadow = "10px 10px 20px black";
		if (form !== null) form.style.boxShadow = "10px 10px 20px black";
		isDarkMode = true;
	}
};

const makeForm = () => {
	const form = document.createElement("form");
	form.hidden = true;

	const input = document.createElement("input");
	const labelForEmail = document.createElement("label");
	const labelForTextArea = document.createElement("label");
	const textArea = document.createElement("textarea");
	const button = document.createElement("button");

	labelForEmail.setAttribute("for", "email");
	labelForEmail.textContent = "Ваш E-mail: ";
	input.id = "email";
	input.type = "email";
	input.style.display = "block";
	input.style.margin = "10px 30px 30px 30px";
	labelForTextArea.setAttribute("for", "text");
	labelForTextArea.textContent = "Ваше сообщение: ";
	textArea.id = "text";
	textArea.style.display = "block";
	textArea.style.margin = "10px 30px 30px 30px";
	button.style.backgroundColor = "lightgray";
	button.style.border = "1px solid darkgray";
	button.style.borderRadius = "5px";
	button.style.fontSize = "16px";
	button.style.cursor = "pointer";
	button.style.padding = "10px";
	button.textContent = "Отправить";
	form.style.position = "fixed";
	form.style.right = "15px";
	form.style.bottom = "45px";
	form.style.zIndex = "1";
	form.style.backgroundColor = "antiquewhite";
	form.style.padding = "30px";
	form.style.borderRadius = "20px";

	if (isDarkMode) {
		form.style.boxShadow = "10px 10px 20px black";
	} else {
		form.style.boxShadow = "10px 10px 20px darkgray";
	}

	form.appendChild(labelForEmail);
	form.appendChild(input);
	form.appendChild(labelForTextArea);
	form.appendChild(textArea);
	form.appendChild(button);

	document.body.insertBefore(form, main);
};

makeForm();

const showForm = () => {
	if (document.querySelector("form").hidden === true) {
		toDeveloper.textContent = "Скрыть форму";
		document.querySelector("form").hidden = false;
	} else {
		toDeveloper.textContent = "Открыть форму";
		document.querySelector("form").hidden = true;
	}
};

const helpAlert = () => {
	alert(
		"Добро пожаловать на нашу маленькую игру!\nУсловия просты: Вам нужно отгадать одну цифру от нуля до десяти. Возникли сложности? Неработает игра? Перезапустите компьютер, я не знаю. Ну или попробуйте связаться со мной.\nУдачи!"
	);
};
// Сама программа
guessButton.addEventListener("click", guessCheck);
themeMode.addEventListener("click", changeTheme);
helpButton.addEventListener("click", helpAlert);
toDeveloper.addEventListener("click", showForm);
