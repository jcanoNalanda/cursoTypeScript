;(() => {
    interface Client {
        name: string
        age?: number
        address: Address
    }

    interface Address {
        id: number
        zip: string
        city: string
    }

    //? Las interfaces pueden ser anidadas para crear estructuras complejas

    const client: Client = {
        name: 'Juan',
        age: 30,
        address: {
            id: 123,
            zip: '12345',
            city: 'Madrid'
        }
    }

    const client2: Client = {
        name: 'Pedro',
        age: 20,
        address: {
            id: 456,
            zip: '67890',
            city: 'Barcelona'
        }
    }
})()
