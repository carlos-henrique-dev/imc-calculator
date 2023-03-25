function imcCalculator(weight, height) {
	const imc = weight / height ** 2;
	return imc;
}

const weight = 84;
const height = 1.88;

const imc = imcCalculator(weight, height);

console.log(imc);