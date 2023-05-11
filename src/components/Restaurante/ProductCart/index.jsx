import { useState,useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { RestaurantContex } from '../../../helper/context/RestaurantContext';
import { getURLProductoImagen } from '../../labels';

const ProductoItemCarUIComponente = () => {

    const { fnAddToCart } = useContext(RestaurantContex);


    const { producto } = useLoaderData();
    const [cantidadProducto, setCantidadProducto] = useState(0);

    const [fnAddCantidad,fnItemAddCategoria,
        fnItemAddSubProducto,
        fnItemIsValid,
        fnGet] = useCarHook(producto);


    const fnAddProducto = () => {
        setCantidadProducto(n => n + 1);
        fnAddCantidad(cantidadProducto+1);

    }

    const fnMinProducto = () => {
        if (cantidadProducto > 0) {
            setCantidadProducto(n => n - 1);
            fnAddCantidad(cantidadProducto)
        }
    }

    const fnTotalProducts = () => producto.valor * cantidadProducto;

    const fnAddCar = () => {
       if(fnItemIsValid()){
        fnAddToCart(fnGet())
       }
    }


    return (
        <>
            <div className="row">
                <div className="col-md-4 offset-md-1">
                    <div className="card">
                        <img src={getURLProductoImagen(producto.urlImagen)} className="img-fluid rounded-start" alt="Imagen de producto" />
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">Some .</p>
                            <p className="card-text">$ {producto.valor}</p>
                            <div className="row">

                                <div className="col">
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-primary" onClick={fnMinProducto}>-</button>
                                        <button type="button" className="btn btn-outline-secondary">{cantidadProducto}</button>
                                        <button type="button" className="btn btn-primary" onClick={fnAddProducto}>+</button>
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    Cantidad $ {fnTotalProducts()}
                                </div>
                                <div className="col">
                                    <button className={`btn btn-primary ${(fnTotalProducts() == 0) ? 'disabled' : ''} `} type="button"
                                    onClick={fnAddCar}>Agregar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {producto.categoria === 'prom' && (
                producto.items.map(e=>{
                    fnItemAddCategoria(e);
                    return (<ProductoPromocion key={e.id} fnItemAddSubProducto={fnItemAddSubProducto} cantidadProducto={cantidadProducto} promocion={e} />)
                })
            )}
        </>
    );
}

const ProductoPromocion = ({ fnItemAddSubProducto, cantidadProducto, promocion }) => {

    const maxItems = (promocion.maxItems * cantidadProducto);
    const [numPromocionItems, setNumPromocionItems] = useState(0);

    /*
    maxItems: 30
    minItems: 30
    */

    const fnSetProductoPromocion = (setNumSelecionado, num, producto, numSelecionado)=>{
        if ( 0 <= (numSelecionado + num) &&  (numPromocionItems + num) <= maxItems) {
            setNumSelecionado(n => n + num);
            setNumPromocionItems(n => n + num);
            fnItemAddSubProducto(promocion.id,numPromocionItems + num,producto,numSelecionado + num)
        }
        
    }

    const fnNumItem = ({ minItems, maxItems }, producto) => {
        const [numSelecionado, setNumSelecionado] = useState(0);
        return [numSelecionado, (num) => fnSetProductoPromocion(setNumSelecionado, num, producto, numSelecionado)];
    }

    return (
        <>
            <div className="row">
                <div className="col-md-4 offset-md-4">{promocion.nombre}: Max: {maxItems} - Seleccion: {numPromocionItems}</div>
            </div>
            {
                promocion.productos.map(e => {
                    const [a, b] = fnNumItem(promocion,e);
                    return (
                        <div key={e.nombre} className="row">
                            <div className="col-6">
                                {e.nombre}
                            </div>
                            <div className="col-4">
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-primary" onClick={() => { b(-1) }}>-</button>
                                    <button type="button" className="btn btn-outline-secondary" onClick={() => { b(1) }}>{a}</button>
                                    <button type="button" className="btn btn-primary" onClick={() => { b(1) }}>+</button>
                                </div>

                            </div>
                        </div>
                    );
                })
            }
        </>

    );
}

const useCarHook = (producto) => {

    const [carItem, setCarItem] = useState({
        id: producto.id,
        nombre: producto.nombre,
        valor: producto.valor,
        cantidad: 0,
        total: 0,
        items: {}
    });

    const fnAddCantidad = (cantidad) => {
        carItem.cantidad=cantidad;
        carItem.total = (carItem.valor*cantidad)
    }


    const fnAddCategoria = (categoria) => {
        if (carItem.items[categoria.id] === undefined) {
            carItem.items[categoria.id] = {
                max: categoria.maxItems,
                cantidad: 0,
                productos: {}
            }
        }
    }

    const fnAddSubProducto = (categoriaId, categoriaCantidad, producto, cantidad) => {

        let cat = carItem.items[categoriaId];
        cat.cantidad = categoriaCantidad;

        if(cantidad == 0){
            delete cat.productos[producto.id];
        }else{
            cat.productos[producto.id] = {
                id: producto.id,
                cantidad: cantidad
            };
        }
    }

    const fnIsValid = () => {

        let validado = true;
        if(carItem.cantidad === 0){
            validado = false;
        }else{
            for(let i in carItem.items){
                if(carItem.items[i].cantidad != carItem.items[i].max){
                    validado = false;
                    break;
                }
            }
        }
        return validado;
    }

    const fnGet = () => carItem

    return [fnAddCantidad,fnAddCategoria, fnAddSubProducto, fnIsValid, fnGet];
}

export { ProductoItemCarUIComponente };