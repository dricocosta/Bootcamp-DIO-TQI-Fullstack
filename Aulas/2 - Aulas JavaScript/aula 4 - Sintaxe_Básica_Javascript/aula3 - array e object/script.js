// o que são vetores ou arrays

// Como declarar um array
let array = ['string', 1, true];
console.log(array);

// array pode guardar vários tipos de dados
let arrayPrincipal = ['string', 1, true, ['array1'], ['array2'], ['array3']];
console.log(arrayPrincipal);
console.log(arrayPrincipal[3]);

// Manipulação de arrays // 

// forEach
array.forEach(function(item, index){console.log(item, index)});

// Push - adiciona item no final do array
array.push('novo item');
console.log(array);

// Pop - remove item no final do array
array.pop();
console.log(array);

// Shift - remove item no inicio do array
array.shift();
console.log(array);

// unshift - adiciona item no inicio do array
array.unshift('novo item no inicio');
console.log(array);

// indexOf - retorna o indice de um valor

console.log(array.indexOf(true));

// splice - remove ou substitui um item pelo indice
array.splice(0, 3);
console.log(array);

// slice - retorna uma parte de um array existente
let novoArray = array.slice(0, 3);
console.log(novoArray);





