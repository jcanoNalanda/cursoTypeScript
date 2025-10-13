export const printObject = (argument: any) => {
    console.log(argument)
}

export function genericFunction<T>(argument: T): T { //? funciones genéricas
    return argument
}

export const genericFunctionArrow = <T>(argument: T): T => argument //? funciones genéricas con arrow functions