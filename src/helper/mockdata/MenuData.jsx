const dataMenu = [
    {
        id: 1,
        title: 'Promociones',
        productos:[
            {
                id: 'p-001',
                title: '2 Cubo x $ 5000',
                description: 'Promocion de 2 cubanos',
                isProm: true,
                value: 5000.0,
                url:'https://img.favpng.com/25/17/16/hamburger-vegetable-sandwich-panini-breakfast-sandwich-png-favpng-K5G49FcBEYLs8xFNLYv1fdz6Q_t.jpg',
                items:[
                    {
                        id: 1,
                        title: 'Cubanos',
                        min_productos: 2,
                        max_productos: 2,
                        items:[
                            {
                                id: 'p-c01',
                                title: 'Cubanito Jamón y Queso',
                                description: 'pan, butifarra, papa ripio, queso',
                                url:'https://img.favpng.com/25/17/16/hamburger-vegetable-sandwich-panini-breakfast-sandwich-png-favpng-K5G49FcBEYLs8xFNLYv1fdz6Q_t.jpg',
                                value: 1000.0
                            },
                            {
                                id: 'p-c02',
                                title: 'Cubanito Hawaiano',
                                description: 'pan, butifarra, papa ripio, queso',
                                url:'https://img.favpng.com/25/17/16/hamburger-vegetable-sandwich-panini-breakfast-sandwich-png-favpng-K5G49FcBEYLs8xFNLYv1fdz6Q_t.jpg',
                                value: 1000.0
                            },
                            {
                                id: 'p-c03',
                                title: 'Cubanito Tocino Maíz',
                                description: 'pan, butifarra, papa ripio, queso',
                                url:'https://img.favpng.com/25/17/16/hamburger-vegetable-sandwich-panini-breakfast-sandwich-png-favpng-K5G49FcBEYLs8xFNLYv1fdz6Q_t.jpg',
                                value: 1000.0
                            },
                            {
                                id: 'p-c04',
                                title: 'Cubanito Suiza',
                                description: 'pan, butifarra, papa ripio, queso',
                                url:'https://img.favpng.com/25/17/16/hamburger-vegetable-sandwich-panini-breakfast-sandwich-png-favpng-K5G49FcBEYLs8xFNLYv1fdz6Q_t.jpg',
                                value: 1000.0
                            },
                            {
                                id: 'p-c05',
                                title: 'Cubanito Chorizo',
                                description: 'pan, butifarra, papa ripio, queso',
                                url:'https://img.favpng.com/25/17/16/hamburger-vegetable-sandwich-panini-breakfast-sandwich-png-favpng-K5G49FcBEYLs8xFNLYv1fdz6Q_t.jpg',
                                value: 1000.0
                            }
                        ]
                    }   
                ]
            },
            {
                id: 'p-002',
                title: 'Combo Bigotón',
                description: 'Promocion de cubanitos para compartir y disfrutar',
                isProm: true,
                value: 30000.0,
                url:'https://img.favpng.com/25/17/16/hamburger-vegetable-sandwich-panini-breakfast-sandwich-png-favpng-K5G49FcBEYLs8xFNLYv1fdz6Q_t.jpg',
                items:[
                    {
                        id: 1,
                        title: 'Cubanos',
                        min_productos: 10,
                        max_productos: 10,
                        items:[
                            {
                                id: 'p-c01',
                                title: 'Cubanito Jamón y Queso',
                                description: 'pan, butifarra, papa ripio, queso',
                                url:'https://img.favpng.com/25/17/16/hamburger-vegetable-sandwich-panini-breakfast-sandwich-png-favpng-K5G49FcBEYLs8xFNLYv1fdz6Q_t.jpg',
                                value: 1000.0
                            },
                            {
                                id: 'p-c02',
                                title: 'Cubanito Hawaiano',
                                description: 'pan, butifarra, papa ripio, queso',
                                url:'https://img.favpng.com/25/17/16/hamburger-vegetable-sandwich-panini-breakfast-sandwich-png-favpng-K5G49FcBEYLs8xFNLYv1fdz6Q_t.jpg',
                                value: 1000.0
                            },
                            {
                                id: 'p-c03',
                                title: 'Cubanito Tocino Maíz',
                                description: 'pan, butifarra, papa ripio, queso',
                                url:'https://img.favpng.com/25/17/16/hamburger-vegetable-sandwich-panini-breakfast-sandwich-png-favpng-K5G49FcBEYLs8xFNLYv1fdz6Q_t.jpg',
                                value: 1000.0
                            },
                            {
                                id: 'p-c04',
                                title: 'Cubanito Suiza',
                                description: 'pan, butifarra, papa ripio, queso',
                                url:'https://img.favpng.com/25/17/16/hamburger-vegetable-sandwich-panini-breakfast-sandwich-png-favpng-K5G49FcBEYLs8xFNLYv1fdz6Q_t.jpg',
                                value: 1000.0
                            },
                            {
                                id: 'p-c05',
                                title: 'Cubanito Chorizo',
                                description: 'pan, butifarra, papa ripio, queso',
                                url:'https://img.favpng.com/25/17/16/hamburger-vegetable-sandwich-panini-breakfast-sandwich-png-favpng-K5G49FcBEYLs8xFNLYv1fdz6Q_t.jpg',
                                value: 1000.0
                            }
                        ]
                    },
                    {
                        id: 1,
                        title: 'Bebida',
                        min_productos: 1,
                        max_productos: 1,
                        items:[
                            {
                                id: 1,
                                title: 'manzana Post. 1.5 litros'
                            }
                        ]
                    }   
                ]
            }
        ]
    },
    {
        id: 2,
        title: 'Cubanos',
        productos:[
            {
                id: 'p-c01',
                title: 'Cubanito Jamón y Queso',
                description: 'pan, butifarra, papa ripio, queso',
                url:'https://img.favpng.com/25/17/16/hamburger-vegetable-sandwich-panini-breakfast-sandwich-png-favpng-K5G49FcBEYLs8xFNLYv1fdz6Q_t.jpg',
                value: 1000.0
            },
            {
                id: 'p-c02',
                title: 'Cubanito Hawaiano',
                description: 'pan, butifarra, papa ripio, queso',
                url:'https://img.favpng.com/25/17/16/hamburger-vegetable-sandwich-panini-breakfast-sandwich-png-favpng-K5G49FcBEYLs8xFNLYv1fdz6Q_t.jpg',
                value: 1000.0
            },
            {
                id: 'p-c03',
                title: 'Cubanito Tocino Maíz',
                description: 'pan, butifarra, papa ripio, queso',
                url:'https://img.favpng.com/25/17/16/hamburger-vegetable-sandwich-panini-breakfast-sandwich-png-favpng-K5G49FcBEYLs8xFNLYv1fdz6Q_t.jpg',
                value: 1000.0
            },
            {
                id: 'p-c04',
                title: 'Cubanito Suiza',
                description: 'pan, butifarra, papa ripio, queso',
                url:'https://img.favpng.com/25/17/16/hamburger-vegetable-sandwich-panini-breakfast-sandwich-png-favpng-K5G49FcBEYLs8xFNLYv1fdz6Q_t.jpg',
                value: 1000.0
            },
            {
                id: 'p-c05',
                title: 'Cubanito Chorizo',
                description: 'pan, butifarra, papa ripio, queso',
                url:'https://img.favpng.com/25/17/16/hamburger-vegetable-sandwich-panini-breakfast-sandwich-png-favpng-K5G49FcBEYLs8xFNLYv1fdz6Q_t.jpg',
                value: 1000.0
            }
        ]
    },
    {
        id: 3,
        title: 'Bebidas',
        productos:[
            {
                id: 'p-b01',
                title: 'Hit',
                url:'https://img.favpng.com/25/17/16/hamburger-vegetable-sandwich-panini-breakfast-sandwich-png-favpng-K5G49FcBEYLs8xFNLYv1fdz6Q_t.jpg',
                value: 1000.0
            }
        ]
    }
];

export  default dataMenu;