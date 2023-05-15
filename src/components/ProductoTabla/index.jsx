import { useNavigate } from "react-router-dom";

const ProductoTablaUI = ({ productos }) => {

    const navigate = useNavigate();

    const onClickNavigate = ({id})=>{
        navigate(`/admin/producto/form/${id}?edit=false`)
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        <th>Valor</th>
                        <th>Esta activo</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map(producto => (
                            <tr key={producto.codigo}>
                                <td>{producto.categoria}</td>
                                <td>{producto.codigo}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.valor}</td>
                                <td>Activo?</td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-primary"
                                        onClick={()=>onClickNavigate(producto)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                            </svg>
                                        </button>
                                        <button type="button" class="btn btn-primary">Middle</button>
                                        <button type="button" class="btn btn-primary">Right</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>
        </>
    );
}

export { ProductoTablaUI };