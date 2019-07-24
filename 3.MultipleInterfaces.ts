import { Bear, Man, Pig } from './interfaces';

let man: Man | Pig;
let bear: Bear;
let pig: Pig;

///creamos un objeto que hereda de las interfaces Man , Bear y Pig
let manBearPig: Bear & Man & Pig;
manBearPig.firstName = 'Dylan';


//o Tb se puede hacer asignando las intefaces a un type primero
type ManBearPig = Bear & Man & Pig

let manBearPig2: ManBearPig ;