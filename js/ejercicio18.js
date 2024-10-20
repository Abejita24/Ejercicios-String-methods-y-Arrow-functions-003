const eliminarVocales = (cadena) => cadena.replace(/[aeiouáéíóúAEIOUÁÉÍÓÚÜ]/g, '');
console.log(eliminarVocales("JavaScript"));