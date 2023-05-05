const restaurantes = [
    {
        id: 2,
        name: 'Centro',
        address: 'Cra. 6 #33-51, CENTRO, Montería, Córdoba.',
        point : {
            lat : 8.7576391687925,
            lng: -75.8821572189165
        }
    },
    {
        id: 1,
        name: 'Rio de Janeiro',
        address: 'Calle 21 N3A, Cra. 13 W #local 3, Montería, Córdoba.',
        point : {
            lat : 8.752872690979803,
            lng: -75.8945613612458
        }
    }
];

const getRestaurantInfo = ()=> new Promise((resolve,rejected)=>resolve({data:restaurantes}));

export { getRestaurantInfo };