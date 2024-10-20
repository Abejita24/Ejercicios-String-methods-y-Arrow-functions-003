const palabraPal = (palabra) => {
    const palabraInv=palabra.split('').reverse().join('');
return palabra === palabraInv;
};
console.log(palabraPal("ana"));
console.log(palabraPal("JavaScript"));