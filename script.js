// const main = document.querySelector("main");
// main.onclick = () => {
// 	main.style.backgroundColor = "lightgray";
// };
const darkMode = false;

const body = document.querySelector("body");
const main = document.querySelector("main");
const themeMode = document.querySelector(".theme-mode");
const guessInput = document.querySelector(".guess-input");
const guessButton = document.querySelector(".guess-button");
const guessButtonHover = document.querySelector(".guess-button:hover");
const questioneer = document.querySelector(".questioneer");
const questioneerMessage = document.querySelector(".questioneer-message");

const guessCheck = () => {
	const randNum = Math.trunc(Math.random() * 10);
	if (guessInput.value !== "") {
		if (guessInput.value === String(randNum)) {
			questioneerMessage.textContent =
				"Хмм, а ты не так глуп как я думал... Совершенно верно!";
			questioneer.style.backgroundColor = "#8cfd6c";
			console.log(guessInput.value, randNum);
		} else {
			questioneerMessage.textContent =
				"ХАХАХХА. Одна ошибка и ты... ОШИБСЯ!";
			questioneer.style.backgroundColor = "#ff6b6b";
			console.log(guessInput.value, randNum);
		}
	}
};

const changeTheme = () => {
	if (darkMode) {
		body.style.backgroundColor = "white";
		main.style.boxShadow = "10px 10px 20px darkgray";
		darkMode = false;
	} else {
		body.style.backgroundColor = "#222";
		main.style.boxShadow = "10px 10px 20px black";
		darkMode = true;
	}
};

guessButton.addEventListener("click", guessCheck);
themeMode.addEventListener("click", changeTheme);
