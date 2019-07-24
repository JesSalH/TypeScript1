export class Person {
        firstName: string;
        middleName: string;
        lastName: string;
        //pasar datos en el constructor es opcional
        constructor(data?: any) {
            // estos son valores por defecto si no se pasan esos datos
            this.firstName = data.firstName || 'Dylan';
            this.lastName = data.lastName || 'Israel';
            this.middleName = data.middleName;    
        }
    }