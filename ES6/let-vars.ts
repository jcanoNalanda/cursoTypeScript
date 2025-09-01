;(() => {
    
    type Avenger = {
        nick: string,
        ironman: string,
        cap: string,
        activo: boolean,
        poder: number
    }

    const avengers: Avenger = {
        nick: 'Nick Fury',
        ironman: 'Robert Downey Jr.',
        cap: 'Captain America',
        activo: true,
        poder: 140.12313
    }

    const printAvenger = ({ironman, ...resto}: Avenger) => {
        console.log(ironman, resto);
    }

    printAvenger(avengers);
})()
