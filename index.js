function imcCalculator({ weight, height }) {
	const imc = weight / height ** 2;
	return imc;
}

const imc1 = imcCalculator({ weight: 84, height: 1.88 });
const imc2 = imcCalculator({ weight: 64, height: 1.60 });
const imc3 = imcCalculator({ weight: 94, height: 1.98 });

console.log('IMC 1:', imc1);
console.log('IMC 2:', imc2);
console.log('IMC 3:', imc3);