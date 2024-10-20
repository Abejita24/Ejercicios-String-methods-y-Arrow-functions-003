const soloNumeros = (cadena) => /^[0-9]+$/.test(cadena);
console.log(soloNumeros("12345"));
console.log(soloNumeros("12345c"));