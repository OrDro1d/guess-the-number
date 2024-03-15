let isDarkMode = false;
let isGamePlayed = false;
// Элементы веб-страницы
const body = document.querySelector("body");
const main = document.querySelector("main");
const themeMode = document.querySelector(".theme-mode");
const guessInput = document.querySelector(".guess-input");
const guessButton = document.querySelector(".guess-button");
const questioneer = document.querySelector(".questioneer");
const questioneerMessage = document.querySelector(".questioneer-message");
// Функции
const setDeafault = () => {
	questioneer.style.backgroundColor = "antiquewhite";
	questioneerMessage.textContent = "Угадайте число!";
	guessInput.style.backgroundColor = "white";
	guessInput.textContent = "";
	guessButton.textContent = "Отправить";
};

const guessCheck = () => {
	const randNum = Math.trunc(Math.random() * 10);
	if (guessInput.value !== "") {
		if (guessInput.value === String(randNum)) {
			questioneerMessage.textContent =
				"Хмм, а ты не так глуп как я думал... Совершенно верно!";
			questioneer.style.backgroundColor = "#8cfd6c";
			guessInput.style.backgroundColor = "#8cfd6c";
			console.log(" -- ", guessInput.value, randNum);
		} else {
			questioneerMessage.textContent =
				"ХАХАХХА. Одна ошибка и ты... ОШИБСЯ!";
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
// Сама программа
guessButton.addEventListener("click", guessCheck);
themeMode.addEventListener("click", changeTheme);
