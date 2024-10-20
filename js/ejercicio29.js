const eliminarRepetidas = (cadena) => cadena.split('').filter((letra,index,array)=>letra !== array[index-1]).join('');
console.log(eliminarRepetidas("aabbccdde"));