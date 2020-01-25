function calcuCool(par1, par2) {
	let suma = 0;
	let resta = 0;
	let multiplica = 0;
	let divide = 0;
	
	if (arguments.length < 2) {
		let raizX = Math.sqrt(par1);
	return raizX.toFixed(3);
	} else {
		if (isNaN(par1) || isNaN(par2)) {
			return ("Tienes que introducir un número para que pueda funcionar correctamente.")
		} else {
			suma = par1 + par2;
			resta = par1 - par2;
			multiplica = par1 * par2;
			divide = par1 / par2;
		}

		let result = [suma.toFixed(3), resta.toFixed(3), multiplica.toFixed(3), divide.toFixed(3)];
		console.log("El resultado de los dos números que has facilitado es: " + result[0] + "," + result[1] + "," + result[2] + "," + result[3])
	}
}

