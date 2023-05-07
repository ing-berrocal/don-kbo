import { useState } from 'react'
import {
  BrowserRouter,
  createBrowserRouter,
  createHashRouter,
  HashRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import './App.css'

import { RestaurantProvider } from './helper/context/RestaurantProvider';


import { RestaurantUIContainer } from './components/Restaurante';
import { MenuUIContainer } from './components/Restaurante/Menu';
import { ProductoItemCarUIComponente } from './components/Restaurante/ProductCart';
import { CartItemUIContainer } from './components/Restaurante/CartItem';
import Root from './components/site/Root';

import { useMenuRestaurant } from './helper/customHook/useMenuRestaurant';

function App() {

  const [categorias, productos, getProduct] = useMenuRestaurant();

  const router = createHashRouter([

    {
      path: "/",
      loader: () => { return { nombre: 'jkl' } },
      element: <RestaurantUIContainer />,
      children: [
        {
          index: true,
          element: <MenuUIContainer {...{categorias,productos}} />,
        },
        {
          path: "add/:id",
          element: <ProductoItemCarUIComponente fnAddCart={() => { }} />,
          loader: ({ params }) => {
            return { producto: getProduct(params.id) };
          },
          action: async ({ request, params }) => {
            const formData = await request.formData();
            const updates = Object.fromEntries(formData);
            await updateContact(params.contactId, updates);
            return redirect(`/contacts/${params.contactId}`);
          }
        },
        {
          path: "car",
          element: <CartItemUIContainer cartItems={{}} />
        },
        {
          path: "/ubicacion",
          element: <Root />
        },
      ]
    },
    {
      path: "/element",
      element: (<div>Element</div>),
    },
  ], {

  });

  return (
    <RestaurantProvider>
      <RouterProvider router={router} >
      </RouterProvider>
    </RestaurantProvider>
  );
}

export default App;

