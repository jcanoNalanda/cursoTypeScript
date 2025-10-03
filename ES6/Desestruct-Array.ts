;(() => {
    const avengersArr: [string, boolean, number] = ['Cap. America', true, 123.123]

    const [capitan, boolean, number] = avengersArr

    console.log({ number, capitan, boolean })

    /* Respuesta console log    
        {
            "number": 123.123,
            "capitan": "Cap. America",
            "boolean": true
        } 
    */
})()
