;(() => {
    function activarFuncion(
        firstName: string,
        secondName?: string,
        upper: boolean = false
    ): string {
        if (upper) {
            return `El nombre es ${firstName} ${secondName || '----'}`.toUpperCase()
        } else {
            return `El nombre es ${firstName} ${secondName || '----'}`
        }
    }

    console.log(activarFuncion('Juan', 'Perez', true))
})()
