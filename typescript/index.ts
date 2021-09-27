//? Themes
const root = document.documentElement;
const $themeButton = document.querySelector(
	'.header__theme-switcher__button__container',
);

interface IColorTheme {
	mainBackground: string;
	keypadBackround: string;
	screenBackground: string;
	keyBackground: string;
	keyShadow: string;
	secondaryKeyBackground: string;
	secondaryKeyShadow: string;
	accentKeyBackground: string;
	accentKeyShadow: string;
	textColor: string;
	keyTextColor: string;
	secondaryKeyTextColor: string;
	accentKeyTextColor: string;
	themeButtonPosition: string;
}

const colorThemes: Array<IColorTheme> = [
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

const setTheme = (theme: IColorTheme): void => {
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

$themeButton?.addEventListener('click', event => {
	themeClickCounter++;
	setTheme(colorThemes[themeClickCounter % 3]);
});

//? Operations
const $screen = document.querySelector('.screen');
const numberButtons = document.querySelectorAll('.keypad__button.number');
const operationButtons = document.querySelectorAll('.keypad__button.operation');
const deleteButton = document.querySelector('.keypad__button.delete');
const equalsButton = document.querySelector('.keypad__button.equal');
const resetButton = document.querySelector('.keypad__button.reset');

class Calculator {
	currentValue: string = '';
	previousOperand: string = '';
	operation: string | null = null;
	clear() {
		this.currentValue = '';
		this.previousOperand = '';
	}
	delete() {
		this.currentValue = this.currentValue.slice(0, -1);
	}
	appendNumber(parameter: string) {
		if (parameter === '.' && this.currentValue.includes('.')) return;
		this.currentValue = this.currentValue + parameter;
	}
	chooseOperation(parameter: string) {
		if (this.currentValue === '') return;
		if (this.previousOperand !== '') {
			this.compute();
		}
		this.operation = parameter;
		this.previousOperand = this.currentValue;
		this.currentValue = '';
	}
	compute() {
		const previous = parseFloat(this.previousOperand);
		const current = parseFloat(this.currentValue);
		if (isNaN(previous) || isNaN(current)) return;
		switch (this.operation) {
			case '+':
				this.currentValue = String(previous + current);
				break;
			case '-':
				this.currentValue = String(previous - current);
				break;
			case '*':
				this.currentValue = String(previous * current);
				break;
			case '/':
				this.currentValue = String((previous / current).toFixed(2));
				break;
			default:
				return;
		}
		this.operation = null;
		this.previousOperand = '';
	}
	updateDisplay() {}
}

const numberFormatter = (parameter: string): string => {
	let [integer, decimal] = parameter.split('.');
	integer = integer
		.split('')
		.reverse()
		.map((letter, index) =>
			index === 0 ? letter : index % 3 === 0 ? letter + ',' : letter,
		)
		.reverse()
		.join('');
	return `${integer}${decimal === undefined ? '' : '.'}${decimal || ''}`;
};

let clickWillReset = false;

const calculator = new Calculator();

resetButton?.addEventListener('click', event => {
	calculator.clear();
	$screen!.innerHTML = '0';
	console.log('current: ', calculator.currentValue);
	console.log('previous: ', calculator.previousOperand);
});

numberButtons.forEach(button => {
	button.addEventListener('click', () => {
		if (clickWillReset) {
			calculator.clear();
			clickWillReset = false;
		}
		calculator.appendNumber(button.innerHTML);
		$screen!.innerHTML = numberFormatter(calculator.currentValue);
		console.log('current: ', calculator.currentValue);
		console.log('previous: ', calculator.previousOperand);
	});
});

operationButtons.forEach(button => {
	button.addEventListener('click', () => {
		if (clickWillReset) {
			calculator.clear();
			clickWillReset = false;
		}
		calculator.chooseOperation(button.innerHTML);
		$screen!.innerHTML = '0';
		console.log('current: ', calculator.currentValue);
		console.log('previous: ', calculator.previousOperand);
	});
});

equalsButton?.addEventListener('click', event => {
	clickWillReset = true;
	calculator.compute();
	$screen!.innerHTML = numberFormatter(calculator.currentValue);
	console.log('current: ', calculator.currentValue);
	console.log('previous: ', calculator.previousOperand);
});
