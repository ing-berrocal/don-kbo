const URL_BASE = import.meta.env.BASE_URL;

const LABEL = {
    nav_titulo : 'Don Cubo',
    nav_index : 'Index',
    nav_menu : 'Restaurante',
}

const getText = (keyName) => {
    return LABEL[keyName];
}

const getURLProductoImagen = (url) => {
    return `${import.meta.env.BASE_URL}productos/${url}.png`;
}

export {
    getText,
    getURLProductoImagen
}