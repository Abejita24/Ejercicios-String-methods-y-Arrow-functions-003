const eliminarCaract = (cadena) => cadena.replace(/[^a-zA-Z0-9]/g, '');
console.log(eliminarCaract("Hola@mundo!"));