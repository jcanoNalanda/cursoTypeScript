// Todo este código no se puede ejecutar ya que el proyecto no está configurado. Es solo para ver el código

import { printObject, genericFunction, genericFunctionArrow } from './generic/generics';

printObject(12300)
printObject(new Date())
printObject({ a: 1, b: 2, c: 3 })
printObject('Hola a todos')

console.log(genericFunction(12300))
console.log(genericFunction({ a: 1, b: 2, c: 3 }))
console.log(genericFunction(new Date()).toFixed(2)) // Error porque Date no tiene el método toFixed
console.log(genericFunction('Hola a todos').toFixed(2)) // Error porque string no tiene el método toFixed

console.log(genericFunctionArrow('Hola a todos').toFixed(2)) // Error porque string no tiene el método toFixed
console.log(genericFunctionArrow('Hola a todos').toFixed(2)) // Error porque string no tiene el método toFixed