//en la deficnicion decimos que es una funcion genrica (T)
// va a recibir un array de lo que sea T[]
// va a devolver un elemento de ese tipo T
function example(arg) {
    //ojo que no devuelve un array T[] sino su primer elemento, un T del Tipo que sea
    return arg[0];
}
//U ejemplo es llamar a esa funcion pasandole un array de number
console.log(example([5, 3, 6])); //devueve 5
