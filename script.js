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
		if (guessInput.value >= 10) {
			questioneerMessage.textContent =
				"Введите цифру от нуля до десяти. Вы знаете как в эту игру играть?";
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
	if (isDarkMode) {
		body.style.backgroundColor = "white";
		themeMode.style.backgroundColor = "#444";
		themeMode.style.borderColor = "black";
		main.style.boxShadow = "10px 10px 20px darkgray";
		isDarkMode = false;
	} else {
		body.style.backgroundColor = "#222";
		themeMode.style.backgroundColor = "#dbdbdb";
		themeMode.style.borderColor = "white";
		main.style.boxShadow = "10px 10px 20px black";
		isDarkMode = true;
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
