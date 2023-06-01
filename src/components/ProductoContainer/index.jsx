import { useEffect,useState } from "react";
import { ProductoTablaUI } from "../ProductoTabla";
import { ProductoService } from "./ProductService";
import { useNavigate } from "react-router-dom";

const ProductoContainerUI = ()=>{

    const [getProducts] = ProductoService();

    const [productos, setProductos] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        getProducts()
        .then(setProductos);
    },[])

    return (
        <>
        <div className="row">
            <div className="col-3">
                <button className="btn btn-primary" 
                onClick={()=>{
                    navigate('/admin/producto/form?edit=true')
                }}>Agregar</button>
            </div>
            <div className="col-9"></div>
            <div className="col-8  offset-md-2">
                <ProductoTablaUI productos={productos}/>
            </div>
        </div>
        </>
    );
}

export { ProductoContainerUI };