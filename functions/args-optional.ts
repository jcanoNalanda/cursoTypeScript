;(() => {
    function activarFuncion(firstName: string, secondName?: string): string {
        return `El nombre es ${firstName} ${secondName || '----'}`
    }

    console.log(activarFuncion('Juan', 'Perez'))
})()