const convertirACamel = (frase) => {
    return frase.split(' ').map((palabra, index) => index === 0 ? palabra.toLowerCase(): 
palabra.charAt(0).toLowerCase()+palabra.slice(1).toLowerCase()).join('');
};
console.log(convertirACamel("Hola mundo en javascript"));