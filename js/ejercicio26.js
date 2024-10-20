const palabraMasLarga = (cadena) => {
    const palabras = cadena.split('');
    return palabras.reduce((longitud,palabra) => palabra.length > longitud.length ? palabra : longitud, '');
};
console.log(palabraMasLarga("Aprender javascript es emocionante"));