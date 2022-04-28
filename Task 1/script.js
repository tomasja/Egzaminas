/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

// document.querySelector('form').addEventListener('submit', onSubmit);

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
	event.preventDefault();

	const inputWeight = document.getElementById('search').value;

	let lbWeight = inputWeight * 2.2046;
	let gWeight = inputWeight / 0.001;
	let ozWeight = inputWeight * 35.274;

	console.log(inputWeight);

	document.getElementById(
		'output'
	).innerText = `Jūsų svoris svarais (lb): ${lbWeight}
    Jūsų svoris gramais (g): ${gWeight}
    Jūsų svoris uncijomis (oz): ${ozWeight}`;
});
