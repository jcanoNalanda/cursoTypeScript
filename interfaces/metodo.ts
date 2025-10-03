;(() => {
    interface Client {
        name: string
        age?: number
        address: Address
        getFullAddress(id: number): string
    }

    //? Se pueden definir métodos dentro de las interfaces

    interface Address {
        id: number
        zip: string
        city: string
    }    

    const client: Client = {
        name: 'Juan',
        age: 30,
        address: {
            id: 123,
            zip: '12345',
            city: 'Madrid'
        },
        getFullAddress(id: number) {
            return this.address.city
        }
    }

    const client2: Client = {
        name: 'Pedro',
        age: 20,
        address: {
            id: 456,
            zip: '67890',
            city: 'Barcelona'
        },
        getFullAddress(id: number) {
            return this.address.city
        }
    }
})()
