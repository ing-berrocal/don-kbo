const URL_BASE = import.meta.env.BASE_URL;
const APP_NAME = import.meta.env.VITE_REACT_APP_MENU_TITULO;

const LABEL = {
    nav_titulo : APP_NAME,
    nav_index : 'Index',
    nav_menu : 'Restaurante',
    nav_restaurantes : import.meta.env.VITE_NAV_MAPS,
}

const getText = (keyName) => {
    return LABEL[keyName];
}

const getURLProductoImagen = (url) => {
    console.log(import.meta.env)
    console.log(import.meta.env.preview)
    return `${import.meta.env.VITE_API_HOTS_IMAGENES}${URL_BASE}/productos/${url}.png`;
}

export {
    getText,
    getURLProductoImagen
}