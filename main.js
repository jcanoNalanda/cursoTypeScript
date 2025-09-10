"use strict";
;
(() => {
    const client = {
        name: 'Juan',
        age: 30,
        address: {
            id: 123,
            zip: '12345',
            city: 'Madrid'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Pedro',
        age: 20,
        address: {
            id: 456,
            zip: '67890',
            city: 'Barcelona'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
//# sourceMappingURL=main.js.map