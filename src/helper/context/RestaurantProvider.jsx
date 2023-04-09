import { useCart } from '../customHook/useCart';
import {RestaurantContex} from './RestaurantContext';

export const RestaurantProvider = ({children}) => {

    const [cartItems,fnAddToCart] = useCart();

    return (
        <RestaurantContex.Provider value={{
            user: {
                id:'xxxxx-xxxx',
                nombre: 'Daniel Berrocal',
                email: 'email@email.com',
                url: 'http//...'
            },
            cartItems,fnAddToCart
          }}>
            {children}
        </RestaurantContex.Provider>
    )
}