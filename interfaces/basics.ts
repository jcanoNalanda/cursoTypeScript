;(() => {
    interface Hero {
        name: string
        age?: number
        powers: number[]
        getName?: () => string
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name
        }
    }

    //? La diferencia entre type y interface es que las interfaces se pueden extender
})()
