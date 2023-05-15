import { useState, useId, useEffect } from "react";
import { ProductoService } from "../ProductoContainer/ProductService";
import { useParams } from "react-router-dom";

const ProductoFormUI = () => {

    let { productoId } = useParams();

    const [getProducts, categoriaProductos, updateProduct, getProduct] = ProductoService();

    const [useProducto, setUserProducto] = useState({
        id: 0,
        codigoCategoria: '',
        codigo: '',
        nombre: '',
        descripcion: '',
        valor: 0,
        estaActivo: true,
        items: []
    });

    useEffect(() => {
        if (productoId !== undefined) {
            getProduct(productoId)
                .then((p) => {
                    setUserProducto(p);
                    setUserItems(p.items)
                });
        }
    }, []);

    const [useItems, setUserItems] = useState([]);




    const selectCategoriaId = useId();
    const inputCodigo = useId();
    const inputNombre = useId();
    const inputDescripcion = useId();
    const inputValor = useId();
    const checkboxEsActivo = useId();

    const inputItemNombre = useId();

    const onChangeEvent = ({ target }) => {

        const { name, value } = target;
        console.log(name, value);
        const cop = { ...useProducto };
        cop[name] = value;
        setUserProducto(cop)
        //console.log(target.name)
    }

    const onChangeItemEvent = ({ target }) => {

    }

    const onChangeCheckEvent = ({ target }) => {

        const { name, checked } = target;
        console.log(name, checked);
        const cop = { ...useProducto };
        cop[name] = checked;
        setUserProducto(cop);
    }

    const onSubmitEvent = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        var object = {};
        formData.forEach(function (value, key) {
            if (value === 'on') value = true;
            object[key] = value;
        });
        var json = JSON.stringify(object);
        updateProduct('POST', json);

        //console.log(target.name)
    }

    return (
        <>
            <div className="row">
                <div className="col-8  offset-md-2">
                    <form className="row" method="POST" onSubmit={onSubmitEvent}>
                        <div class="col-md-6">
                            <label htmlFor={selectCategoriaId} class="form-label">Categoria</label>
                            <select id={selectCategoriaId} className="form-select" aria-label="Default select example"
                                onChange={onChangeEvent} name="codigoCategoria" required={true}>
                                {categoriaProductos.map(categoria => (<option key={categoria.title} value={categoria.id}>{categoria.title}</option>))}

                            </select>
                        </div>
                        <div class="col-md-6">
                            <label htmlFor={inputCodigo} class="form-label">Codigo</label>
                            <input id={inputCodigo} type="text" className="form-control" disabled={true}
                                name="codigo"
                                value={useProducto.codigo}
                                onChange={onChangeEvent} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor={inputNombre} class="form-label">Nombre</label>
                            <input id={inputNombre} type="text" className="form-control" required={true}
                                name="nombre"
                                value={useProducto.nombre}
                                onChange={onChangeEvent} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor={inputDescripcion} class="form-label">Descripción</label>
                            <textarea id={inputDescripcion} className="form-control" rows="3" required={true} name="descripcion"
                                value={useProducto.descripcion} onChange={onChangeEvent}>

                            </textarea>
                        </div>
                        <div class="mb-3">
                            <label htmlFor={inputValor} class="form-label">Valor</label>
                            <input id={inputValor} type="number" className="form-control" required={true}
                                name="valor"
                                value={useProducto.valor}
                                onChange={onChangeEvent} />
                        </div>
                        <div class="mb-3 form-check">
                            <input className="form-check-input" type="checkbox" checked={useProducto.estaActivo} id={checkboxEsActivo}
                                name="estaActivo" onChange={onChangeCheckEvent} />
                            <label className="form-check-label" htmlFor={checkboxEsActivo}>
                                Esta Activo
                            </label>
                        </div>
                        {useProducto.codigoCategoria === 'prom' && <PromocionFormUI useItems={useItems} onChangeItemEvent={onChangeItemEvent}
                        getProducts={getProducts}/>}
                        <div class="col-md-12">
                            <button type="submit" class="btn btn-primary">Submit</button>
                            <button type="submit" class="btn btn-primary">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

const PromocionFormUI = ({ onChangeItemEvent, useItems, getProducts }) => {

    const selectProductoId = useId();
    const inputCodigo = useId();
    const inputItemNombre = useId();
    const inputCantidad = useId();
    const inputValor = useId();
    const checkboxEsActivo = useId();

    const [productos, setProductos] = useState([]);
    const [productosSeleccionados, setProductosSeleccionados] = useState([]);

    const [useItem, setUserItem] = useState(
        {
            id: 0,
            nombre: '',
            num_items: 0,
            max_items: 0,
            productos: []
        });

    const onChangeEvent = ({ target }) => {

        const { name, value } = target;
        console.log(name, value);
        const cop = { ...useProducto };
        cop[name] = value;
        setUserProducto(cop)
        //console.log(target.name)
    }

    let productosFiltro = [];

    useEffect(()=>{
        getProducts()
        .then(ps=>{
            setProductos(ps.filter(f=>f.categoria !=='prom'));
        });
    },[])

    return (<div class="col-12">

        <form className="row">
            <div class="col-6">
                <label htmlFor={inputItemNombre} class="form-label">Nombre</label>
                <input id={inputItemNombre} type="text" className="form-control" required={true}
                    name="nombre"
                    value={useItem.nombre}
                    onChange={onChangeItemEvent} />
            </div>
            <div class="col-3">
                <label htmlFor={inputCantidad} class="form-label">Cantidad</label>
                <input id={inputCantidad} type="text" className="form-control" required={true}
                    name="nombre"
                    value={useItem.num_items}
                    onChange={onChangeItemEvent} />
            </div>
            <div class="col-3">
            </div>

            <div class="col-9">
                <label htmlFor={selectProductoId} class="form-label">Productos</label>
                <select id={selectProductoId} className="form-select" aria-label="Default select example"
                    onChange={onChangeEvent} name="productiId" required={true}>
                    {productos.map(producto => (<option key={producto.nombre} value={producto.id}>{producto.nombre}</option>))}

                </select>
            </div>
            <div class="col-3">
                <button className="btn btn-primary" onClick={() => { }}>Agregar Producto</button>
            </div>
            <div class="col-12">
                <div>
                    { productosSeleccionados.map(p=>(<span key={p.nombre}>p.nombre</span>))}
                </div>
            </div>
            

            <div class="col-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Productos</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            useItems.map(item => (
                                <tr key={item.nombre}>
                                    <td>{item.nombre}</td>
                                    <td>{item.cantidad}</td>
                                    <td>{item.productos.map(p => p.nombre).join(',')}</td>
                                    <td></td>
                                </tr>
                            ))
                        }
                        <tr>

                        </tr>
                    </tbody>
                </table>
            </div>
        </form>

    </div>);
}

export { ProductoFormUI };