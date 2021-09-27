const root = document.documentElement;

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
document.addEventListener('click', event => {
	root.style.setProperty('--background', colorThemes[2].mainBackground);
});
