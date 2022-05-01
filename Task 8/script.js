/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
	this.a = a;
	this.b = b;
	this.sum();
	this.multiplication();
	this.subtraction();
	this.division();
}

Calculator.prototype.sum = function () {
	let sum = this.a + this.b;
	console.log(`Sum: ${sum}`);
};

Calculator.prototype.subtraction = function () {
	let sub = this.a - this.b;
	console.log(`Subtraction: ${sub}`);
};

Calculator.prototype.multiplication = function () {
	let multi = this.a * this.b;
	console.log(`Multiplication: ${multi}`);
};

Calculator.prototype.division = function () {
	let div = this.a / this.b;
	console.log(`Division: ${div}`);
};

const numbers = new Calculator(20, 10);
