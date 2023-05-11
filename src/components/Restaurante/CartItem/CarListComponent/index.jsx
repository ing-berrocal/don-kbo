import React, { useContext } from "react";


import { RestaurantContex } from '../../../../helper/context/RestaurantContext';
import { useNavigate } from "react-router-dom";

const CartItemUIContainer = () => {

    const { cartItems, fnReset } = useContext(RestaurantContex);
    const { productos } = cartItems;
    const navigate = useNavigate();
    console.log(cartItems);

    const onButtonBack = () => navigate('/');

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-10">
                    <table className="table">
                        <thead>
                            <tr><th>Producto</th><th>Cantidad</th><th>Valor Total</th></tr>
                        </thead>
                        <tbody>
                            {
                                productos.map(producto => (
                                    <tr key={producto.id} className="col-12">
                                        <td>{producto.nombre}</td>
                                        <td>{producto.cantidad}</td>
                                        <td>$ {producto.total}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Total</td>
                                <td></td>
                                <td>$ 0</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <div className="row">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button className="btn btn-primary" onClick={onButtonBack}>Atras</button>
                    <button className="btn btn-success" onClick={() => { alert('Money!!') }}>Pagar</button>
                    <button className="btn btn-danger" onClick={() => {
                        if (confirm('¿Desea eliminar pedido?')) {
                            fnReset()
                        }
                    }}>Eliminar pedido</button>
                </div>
            </div>
        </React.Fragment>);
}

export { CartItemUIContainer }