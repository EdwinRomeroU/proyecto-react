const misProductos = [
    {id: 1, nombre: 'Arete A', categoria: 'Aretes', precio: 100, img:"../public/img/aretes_1.jpeg", stock: 10, descripcion: 'Arete de plata'},
    {id: 2, nombre: 'Arete B', categoria: 'Aretes', precio: 200, img:'../public/img/aretes_2.jpeg', stock: 20, descripcion: 'Arete de oro'},
    {id: 3, nombre: 'Anillo A', categoria: 'Anillos', precio: 300, img:'../public/img/anillo_1.jpeg', stock: 30, descripcion: 'Anillo de plata'},
    {id: 4, nombre: 'Anillo B', categoria: 'Anillos', precio: 400, img:'../public/img/anillo_2.jpeg', stock: 40, descripcion: 'Anillo de oro'},
];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 2000);
    });
}

export const getProductoById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos.find(prod => prod.id === id));
        }, 2000);
    });
}

export const getProductosByCategoria = (categoriaId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos.filter(prod => prod.categoria === categoriaId));
        }, 2000);
    });
}
