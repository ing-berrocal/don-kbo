import { useState, useId, useEffect } from "react";
import { ProductoService } from "../ProductoContainer/ProductService";
import { useParams, useNavigate } from "react-router-dom";

const ProductoFormUI = () => {

    let { productoId } = useParams();

    const [getProducts, categoriaProductos, updateProduct, getProduct] = ProductoService();

    let method = 'POST';

    const navigate = useNavigate();

    const [useProducto, setUserProducto] = useState({
        id: 0,
        categoria: categoriaProductos[0],
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
        }else{
            method = 'PUT';
        }

    }, []);

    const [useItems, setUserItems] = useState([]);

    const selectCategoriaId = useId();
    const inputCodigo = useId();
    const inputNombre = useId();
    const inputDescripcion = useId();
    const inputValor = useId();
    const checkboxEsActivo = useId();

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
        console.log(json)
        updateProduct(method, json)
            .then(console.log);

        //console.log(target.name)
    }

    return (
        <>
            <div className="row">
                <div className="col-8  offset-md-2">
                    <form className="row" method="POST" onSubmit={onSubmitEvent}>
                        <div className="col-md-6">
                            <label htmlFor={selectCategoriaId} className="form-label">Categoria</label>
                            <select id={selectCategoriaId} className="form-select" aria-label="Default select example"
                                onChange={onChangeEvent} name="categoria" required={true}>
                                {categoriaProductos.map(categoria => (<option key={`cat-${categoria.title}`} value={categoria.id}
                                >{categoria.title}</option>))}

                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor={inputCodigo} className="form-label">Codigo</label>
                            <input id={inputCodigo} type="text" className="form-control" disabled={true}
                                name="codigo"
                                value={useProducto.codigo}
                                onChange={onChangeEvent} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor={inputNombre} className="form-label">Nombre</label>
                            <input id={inputNombre} type="text" className="form-control" required={true}
                                name="nombre"
                                value={useProducto.nombre}
                                onChange={onChangeEvent} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor={inputDescripcion} className="form-label">Descripción</label>
                            <textarea id={inputDescripcion} className="form-control" rows="3" required={true} name="descripcion"
                                value={useProducto.descripcion} onChange={onChangeEvent}>

                            </textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor={inputValor} className="form-label">Valor</label>
                            <input id={inputValor} type="number" className="form-control" required={true}
                                name="valor"
                                value={useProducto.valor}
                                onChange={onChangeEvent} />
                        </div>
                        <div className="mb-3 form-check">
                            <input className="form-check-input" type="checkbox" checked={useProducto.estaActivo} id={checkboxEsActivo}
                                name="estaActivo" onChange={onChangeCheckEvent} />
                            <label className="form-check-label" htmlFor={checkboxEsActivo}>
                                Esta Activo
                            </label>
                        </div>
                        {useProducto.categoria === 'prom' && 
                            <PromocionFormUI 
                                useItems={useItems} 
                                onChangeItemEvent={onChangeItemEvent}
                                getProducts={getProducts} 
                                categoriaProductos={categoriaProductos.filter(f=>'prom'!=f.id)} /
                        >}
                        <div className="col-md-12">
                            <button type="button" className="btn btn-secondary"
                            onClick={()=>navigate('/admin/productos')}>Cancelar</button>
                            <button type="submit" className="btn btn-primary">Agregar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

const PromocionFormUI = ({ onChangeItemEvent, useItems, getProducts, categoriaProductos }) => {


    const inputCodigo = useId();
    const inputItemNombre = useId();
    const inputCantidad = useId();

    const [filter, setFilter] = useState();
    const [productos, setProductos] = useState([]);
    const [productosAgregados, setProductosAgregados] = useState([]);

    const [useItem, setUserItem] = useState(
        {
            id: 0,
            nombre: '',
            num_items: 0,
            max_items: 0,
            productos: []
        });
    
        const disableButtonAddProducts = ()=>{
            return (useItem.mombre == '' || useItem.num_items < 1);
        }

    const onChangeEvent = ({ target }) => {

        const { name, value } = target;
        console.log(name, value);
        const cop = { ...useItem };
        cop[name] = value;
        setUserItem(cop)
        //console.log(target.name)
    }

    const onChangeSelectEvent = ({ target }) => {
        const { name, value } = target;
        setFilter(value);
    }

    const addProductosTY = (p)=>{

    }

    useEffect(() => {
        //obtenemos los productos
        getProducts()
            .then(ps => {
                setProductos(p=> p = ps.filter(f => f.categoria != 'prom'));
            });
    }, []);


    return (<div className="col-12">

        <form className="row">
            <div className="col-6">
                <label htmlFor={inputItemNombre} className="form-label">Nombre</label>
                <input id={inputItemNombre} type="text" className="form-control" required={true}
                    name="nombre"
                    value={useItem.nombre}
                    onChange={onChangeEvent} />
            </div>
            <div className="col-3">
                <label htmlFor={inputCantidad} className="form-label">Cantidad</label>
                <input id={inputCantidad} type="text" className="form-control" required={true}
                    name="num_items"
                    value={useItem.num_items}
                    onChange={onChangeEvent} />
            </div>
            <div className="col-3">
                <label htmlFor={inputCodigo} className="form-label">Categoria</label>
                <select id={inputCodigo} className="form-select" aria-label="Default select example"
                    onChange={onChangeSelectEvent} name="categoria" required={true}>
                    {categoriaProductos.map(categoria => (<option key={`cat-${categoria.title}`} value={categoria.id}
                    >{categoria.title}</option>))}

                </select>
            </div>
            <div className="col-3">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProductModal"
                disabled={disableButtonAddProducts()}>
                    Agregar Productos
                </button>
            </div>


            <div className="col-12">
                <div>
                    {productosAgregados.map(p => (<span key={p.nombre}>{p.nombre}</span>))}
                </div>
            </div>


            <div className="col-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Productos</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            useItems.map(item => (
                                <tr key={item.nombre}>
                                    <td>{item.nombre}</td>
                                    <td>{item.cantidad}</td>
                                    <td>{item.productos.map(p => (<span className="badge rounded-pill text-bg-primary">{p.nombre}</span>))}</td>
                                    <td>
                                        <button className="btn btn-danger">Eiminar</button>
                                    </td>
                                </tr>
                            ))
                        }
                        <tr>

                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-keyboard="false">
                <PromocionAddFormUI filter={filter} productos={productos} onChangeEvent={onChangeEvent} setProductosAgregados={setProductosAgregados}/>                       
            </div>
        </form>
    </div>);
}

const PromocionAddFormUI = ({ filter, productos, onChangeEvent, getProducts, setProductosAgregados }) => {

    const selectProductoId = useId();

    const [productoSeleccionado, setProductoSeleccionado] = useState();
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [productosSeleccionados, setproductosSeleccionados] = useState([]);

    const onChangeSelectEvent = ({target}) => {
        var dataset = target.options[target.selectedIndex].dataset;
        setProductoSeleccionado(productosFiltrados[dataset.productIndex]);
    }

    useEffect(() => {
//        myModalEl = window.document.getElementById('addProductModal');
        const pf = productos.filter(f=> f.categoria == filter);
        setProductosFiltrados(pf);
        setProductoSeleccionado(pf[0])

    }, [filter,productos]);

    const onButtonEventAddProduct = (e) => {
        e.preventDefault();
        if(!(productoSeleccionado == null || productoSeleccionado == undefined)){
            const newSeleccionados = [...productosSeleccionados,productoSeleccionado];

            const k = newSeleccionados.map(p=>p.id);
            const f = productosFiltrados.filter(f=> k.indexOf(f.id) == -1);            
            setProductosFiltrados(f);
            setproductosSeleccionados(newSeleccionados);
            if(k.length > 0)
                setProductoSeleccionado(f[0]);
        }
        
    }

    const onCloseButton = (e)=>{
        e.preventDefault();
        setproductosSeleccionados([]);
    }

    const onAddButton = (e) => {
        setProductosAgregados(productosSeleccionados)
        onCloseButton(e);
    }

    return (
        
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="row">
                            <div className="col-9">
                                <label htmlFor={selectProductoId} className="form-label">Productos</label>
                                <select id={selectProductoId} className="form-select" aria-label="Default select example"
                                    onChange={onChangeSelectEvent} name="productiId" required={true}>
                                    {productosFiltrados.map((producto,index) => (
                                        <option selected={productoSeleccionado?.id == producto.id} key={`sub-${producto.nombre}`}
                                            data-product-index={index}
                                            value={producto.id}>{producto.nombre}</option>))}

                                </select>
                            </div>
                            <div className="col-3">
                                <button className="btn btn-primary" onClick={onButtonEventAddProduct}>Agregar Producto</button>
                            </div>
                            <div className="col-12">
                                {productosSeleccionados.map(pr => (<span className="badge bg-primary text-wrap" key={`nmb-${pr.nombre}`}>{pr.nombre}</span>))}
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                        onClick={onCloseButton}>Cancelar</button>
                        <button type="button" className="btn btn-primary"
                        onClick={onAddButton} data-bs-dismiss="modal">Agregar</button>
                    </div>
                </div>
            </div>
        
    )
}

export { ProductoFormUI };