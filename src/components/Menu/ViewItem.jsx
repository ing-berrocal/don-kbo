import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ViewItem = ({ fnAddCart }) => {

    const { product } = useLoaderData();
    const [cantidadProducto, setCantidadProducto] = useState(0)
    const [valorProducto, setValorProducto] = useState(0)    

    console.log(product)

    const fnAddProducto = () => {
        setCantidadProducto(n => n + 1);
    }

    const fnMinProducto = () => {
        if (cantidadProducto > 0) {
            setCantidadProducto(n => n - 1);
        }
    }

    const fnTotalProducts = () => product.value * cantidadProducto;

    return (
        <>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card">
                        <img src={product.url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">Some .</p>
                            <p className="card-text">$ {product.value}</p>
                            <div className="row">
                                <div className="col">Cant: {cantidadProducto}</div>
                                <div className="col">
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-sm btn-primary"
                                            onClick={fnMinProducto}>-1</button>
                                        <button type="button" class="btn btn-sm btn-primary"
                                            onClick={fnAddProducto}>+1</button>
                                    </div>
                                </div>
                                <div className="col"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {product.isProm && <Items items={product.items} />}

            <div className="row">
                <div className="col">
                    <form>
                        <div>
                            Cantidad $ {fnTotalProducts()}
                        </div>
                        <div>
                            <button className={`btn btn-primary ${(fnTotalProducts() == 0) ? 'disabled' : ''} `} type="button">Agregar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

const Items = ({ items }) => {
    return (
        items.map(e => (
            <>
                <div>{e.title}: Min: {e.min_productos} - Max: {e.max_productos}</div>
                <ItemsProducts items={e.items} />                
            </>                        
        ))
    );
}

const ItemsProducts = ({ items }) => {
    const [numItems, setNumItems] = useState(0);
    return (
        items.map(e => (
            <>
                <div className="row">
                    <div className="col-10">
                        {e.title}
                    </div>
                    <div className="col-2">
                        <div className="input-group mb-3">
                            <button type="button" className="btn btn-outline-secondary">-1</button>
                            <input type="text" className="form-control" aria-label="0" value={numItems} />
                            <button type="button" className="btn btn-outline-secondary">+1</button>
                        </div>
                    </div>
                </div>
            </>
        )));
}

export { ViewItem };