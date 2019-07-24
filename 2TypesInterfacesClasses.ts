
//esto es un type, esta deprecated, ahora se utilizan interfaces y clases
type person = {firstName: string};

//si no asignamos un objeto con la propiedad firstName da error
const example3: person = {firstName: 'Dollan'};






// INTERFACES
export interface IPerson {
        firstName: string;
        middleName: string;
        lastName: string;
}

// si no le asignamos un objeto con esos 3 campos peta
const example1: IPerson = {firstName: 'Dollan', middleName: 'Dollan', lastName: 'Dollan'};