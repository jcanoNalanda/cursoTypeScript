namespace Validations {

    export const validateText = (text: string): boolean => { // Se tiene que exportar para que sea accesible fuera del namespace
        return text.trim().length > 3;
    }

    export const validateDate = (date: Date): boolean => {
        return !isNaN(date.valueOf());
    }
}

console.log(Validations.validateText('Hola'));