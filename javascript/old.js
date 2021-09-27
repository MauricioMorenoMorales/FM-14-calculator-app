const root = document.documentElement;
const $screen = document.querySelector('.screen');

const colorThemes = [
	{
		mainBackground: 'hsl(222, 26%, 31%)',
		keypadBackround: 'hsl(223, 31%, 20%)',
		screenBackground: 'hsl(224, 36%, 15%)',
		keyBackground: 'hsl(30, 25%, 89%)',
		keyShadow: 'hsl(28, 16%, 65%)',
		secondaryKeyBackground: 'hsl(225, 21%, 49%)',
		secondaryKeyShadow: 'hsl(224, 28%, 35%)',
		accentKeyBackground: 'hsl(6, 63%, 50%)',
		accentKeyShadow: 'hsl(6, 70%, 34%)',
		textColor: 'hsl(30, 25%, 89%)',
		keyTextColor: 'hsl(221, 14%, 31%)',
		secondaryKeyTextColor: 'hsl(30, 25%, 89%)',
		accentKeyTextColor: 'hsl(30, 25%, 89%)',
		themeButtonPosition: 'flex-start',
	},
	{
		mainBackground: 'hsl(0, 0%, 90%)',
		keypadBackround: 'hsl(0, 5%, 81%)',
		screenBackground: 'hsl(0, 0%, 93%)',
		keyBackground: 'hsl(45, 7%, 89%)',
		keyShadow: 'hsl(35, 11%, 61%)',
		secondaryKeyBackground: 'hsl(185, 42%, 37%)',
		secondaryKeyShadow: 'hsl(185, 58%, 25%)',
		accentKeyBackground: 'hsl(25, 98%, 40%)',
		accentKeyShadow: 'hsl(25, 99%, 27%)',
		textColor: 'hsl(60, 10%, 19%)',
		keyTextColor: 'hsl(60, 10%, 19%)',
		secondaryKeyTextColor: 'hsl(0, 0%, 90%)',
		accentKeyTextColor: 'hsl(0, 0%, 90%)',
		themeButtonPosition: 'center',
	},
	{
		mainBackground: 'hsl(268, 75%, 9%)',
		keypadBackround: 'hsl(268, 71%, 12%)',
		screenBackground: 'hsl(268, 71%, 12%)',
		keyBackground: 'hsl(268, 47%, 21%)',
		keyShadow: 'hsl(290, 70%, 36%)',
		secondaryKeyBackground: 'hsl(281, 89%, 26%)',
		secondaryKeyShadow: 'hsl(285, 91%, 52%)',
		accentKeyBackground: 'hsl(176, 100%, 44%)',
		accentKeyShadow: 'hsl(177, 92%, 70%)',
		textColor: 'hsl(52, 100%, 62%)',
		keyTextColor: 'hsl(52, 100%, 62%)',
		secondaryKeyTextColor: 'hsl(0, 0%, 90%)',
		accentKeyTextColor: 'hsl(0, 0, 100%)',
		themeButtonPosition: 'flex-end',
	},
];

let themeClickCounter = 0;
let themeButtonClickCounter = 0;
let numberInMemory = 0;
let result;
let currentOperation = null;
let currentNumber = [];
let numberWillResetCurrentValue = false;
let clickWillResetMemoryNumber = false;

const setTheme = theme => {
	root.style.setProperty('--main-background', theme.mainBackground);
	root.style.setProperty('--keypad-background', theme.keypadBackround);
	root.style.setProperty('--screen-background', theme.screenBackground);
	root.style.setProperty('--key-background', theme.keyBackground);
	root.style.setProperty('--key-shadow', theme.keyShadow);
	root.style.setProperty(
		'--secondary-key-background',
		theme.secondaryKeyBackground,
	);
	root.style.setProperty('--secondary-key-shadow', theme.secondaryKeyShadow);
	root.style.setProperty('--accent-key-background', theme.accentKeyBackground);
	root.style.setProperty('--accent-key-shadow', theme.accentKeyShadow);
	root.style.setProperty('--text-color', theme.textColor);
	root.style.setProperty('--key-text-color', theme.keyTextColor);
	root.style.setProperty(
		'--secondary-key-text-color',
		theme.secondaryKeyTextColor,
	);
	root.style.setProperty('--accent-key-text-color', theme.accentKeyTextColor);
	root.style.setProperty('--theme-button-position', theme.themeButtonPosition);
};

let makeOperation = () => {
	switch (currentOperation) {
		case 'sum':
			numberInMemory = Number(
				Number(numberInMemory + Number(currentNumber.join('')))
					.toFixed(2)
					.replace(/[.,]00$/, ''),
			);
			break;
		case 'rest':
			numberInMemory = Number(
				Number(numberInMemory - Number(currentNumber.join('')))
					.toFixed(2)
					.replace(/[.,]00$/, ''),
			);
			break;
		case 'multiplication':
			numberInMemory = Number(
				Number(numberInMemory * Number(currentNumber.join('')))
					.toFixed(2)
					.replace(/[.,]00$/, ''),
			);
			break;
		default:
			break;
	}
};

document.addEventListener('click', event => {
	if (
		event.target.matches('.header__theme-switcher__button__container') ||
		event.target.matches('.header__theme-switcher__button__container *')
	) {
		themeButtonClickCounter++;
		setTheme(colorThemes[themeButtonClickCounter % 3]);
		console.log(currentNumber);
		console.log(numberInMemory);
	}
	//Adds numbers to the current number
	if (event.target.matches('.keypad__button.number')) {
		if (numberWillResetCurrentValue) {
			currentNumber = [];
			numberWillResetCurrentValue = false;
		}
		if (clickWillResetMemoryNumber) {
			numberInMemory = 0;
			clickWillResetMemoryNumber = false;
		}
		currentNumber.push(event.target.innerHTML);
		$screen.innerHTML = currentNumber.join('');
		console.log(currentNumber);
		console.log(numberInMemory);
	}
	//Adds only a single point
	if (event.target.matches('.keypad__button.point')) {
		if (currentNumber.includes('.')) return;
		currentNumber.push(event.target.innerHTML);
		$screen.innerHTML = currentNumber.join('');
		console.log(currentNumber);
		console.log(numberInMemory);
	}
	// Deletes last element on current number
	if (event.target.matches('.keypad__button.delete')) {
		if (clickWillResetMemoryNumber) {
			numberInMemory = 0;
			currentNumber = [];
		}
		currentNumber.pop();
		$screen.innerHTML = 0;
		console.log(currentNumber);
		console.log(numberInMemory);
	}
	//Stores the currentNumber in memory and resets currentNumber
	if (event.target.matches('.keypad__button.operation')) {
		if (clickWillResetMemoryNumber) {
			currentNumber = [];
			clickWillResetMemoryNumber = false;
			numberInMemory = 0;
			$screen.innerHTML = 0;
			return;
		}
		numberInMemory = Number(currentNumber.join(''));
		currentNumber = [];
		$screen.innerHTML = 0;
		console.log(currentNumber);
		console.log(numberInMemory);
		numberWillResetCurrentValue = true;
		switch (event.target.innerHTML) {
			case 'x':
				currentOperation = 'multiplication';
				break;
			case '/':
				currentOperation = 'division';
				break;
			case '+':
				currentOperation = 'sum';
				break;
			case '-':
				currentOperation = 'rest';
				break;
		}
	}
	if (event.target.matches('.keypad__button.equal')) {
		makeOperation();
		numberWillResetCurrentValue = true;
		clickWillResetMemoryNumber = true;
		$screen.innerHTML = numberInMemory;
		console.log(currentNumber);
		console.log(numberInMemory);
	}
});
