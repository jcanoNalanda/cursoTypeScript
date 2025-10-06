 //No funciona, solo es un ejemplo de como se usa namespaces. Se necesita un entorno commonjs para que funcione
 
import { Hero as HeroClass, Hero2, Hero3  } from "./classes/Hero"; // importa varias clases 
import powers from "./data/powers"; // importa el default


 const ironman = new HeroClass('Ironman', 100, 40);

 console.log (ironman)
 console.log (powers) 