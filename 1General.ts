
import { Bear } from './bear.model'; 

const bear = new Bear(3);

//Así checkeamos que el objeto bear es de la clase Bear
if (bear instanceof Bear) {
    console.log("Hello from TypeScript");
}


//2 Formas de castear con Typescript

let definetlyNotAString: any = 'I am a string';
//1.- asi
let strLength = (definetlyNotAString as string).length;
//2.-
let strLength = (<string> definetlyNotAString).length;


//array types
const example1: string[] = ['Hello World'];

const example2: (number | boolean)[] = [1, 2, true];

//Tuples
const exampleTuple: [string, number] = ['https://www.YouTube.com/CodingTutorials360', 30];


//Object
function sayHello(person: Person): string {
    return `Say Hello to My Little Friend, ${person.firstName}!`    
}

sayHello(new Person({firstName: 'Peter'}))


//error con tipo never
function neverExample(): never {
    throw Error;
}