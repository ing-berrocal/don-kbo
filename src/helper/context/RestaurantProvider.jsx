import { useCart } from '../customHook/useCart';
import { useLogin } from '../customHook/useLogin';
import {RestaurantContex} from './RestaurantContext';

export const RestaurantProvider = ({children}) => {

    const [usuario, roles, token, 
        estaAutenticado, setAutenticateUser, logout] = useLogin();
    const [cartItems,fnAddToCart, fnReset] = useCart();

    return (
        <RestaurantContex.Provider value={{
            usuario, roles, token,
            estaAutenticado,setAutenticateUser,logout,
            cartItems,fnAddToCart,fnReset
          }}>
            {children}
        </RestaurantContex.Provider>
    )
}