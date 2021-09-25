"use strict";
var root = document.documentElement;
document.addEventListener('click', function (event) {
    root.style.setProperty('--background', 'hsl(185, 42%, 37%)');
});
var colorThemes = [
    {
        mainBackground: "hsl(222, 26%, 31%)",
        keyPadBackround: "hsl(223, 31%, 20%)",
        screenBackground: "hsl(224, 36%, 15%)",
        keyBackground: "hsl(30, 25%, 89%)",
        keyShadow: "hsl(28, 16%, 65%)",
        secondaryKeyBackground: "hsl(225, 21%, 49%)",
        secondaryShadow: "hsl(224, 28%, 35%)",
        accentKeyBackground: "hsl(6, 63%, 50%)",
        accentKeyShadow: "hsl(6, 70%, 34%)",
        textColor: "hsl(30, 25%, 89%)",
        keyTextColor: "hsl(221, 14%, 31%)",
        secondaryKeyTextColor: "hsl(30, 25%, 89%)",
        accentKeyTextColor: "hsl(30, 25%, 89%)"
    },
    {
        mainBackground: "hsl(0, 0%, 90%)",
        keyPadBackround: "hsl(0, 5%, 81%)",
        screenBackground: "hsl(0, 0%, 93%)",
        keyBackground: "hsl(45, 7%, 89%)",
        keyShadow: "hsl(35, 11%, 61%)",
        secondaryKeyBackground: "hsl(225, 21%, 49%)",
        secondaryShadow: "hsl(224, 28%, 35%)",
        accentKeyBackground: "hsl(6, 63%, 50%)",
        accentKeyShadow: "hsl(6, 70%, 34%)",
        textColor: "hsl(30, 25%, 89%)",
        keyTextColor: "hsl(221, 14%, 31%)",
        secondaryKeyTextColor: "hsl(30, 25%, 89%)",
        accentKeyTextColor: "hsl(30, 25%, 89%)"
    }
];
