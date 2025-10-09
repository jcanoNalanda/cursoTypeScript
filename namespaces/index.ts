import { genericFunctionArrow } from './generic/generics';
import { Hero } from './interfaces/hero';
// Todo este código no se puede ejecutar ya que el proyecto no está configurado. Es solo para ver el código

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston',
    dangerLevel: 130
}

console.log( genericFunctionArrow<Hero>(deadpool).name ); //? uso de la función genérica con interfaz Hero