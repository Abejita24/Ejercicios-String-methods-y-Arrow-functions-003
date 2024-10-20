const truncar = (cadena, num) => cadena.length > num ? cadena.slice(0, num) + "...":cadena;
console.log(truncar("JavaScript es genial" , 10 ));