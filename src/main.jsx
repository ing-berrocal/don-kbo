import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import './index.css';
import './scss/styles.scss';

import * as bootstrap from 'bootstrap'

import { Main } from './components/Principal/MainContainer';
import { MenuContainer } from './components/Restaurante/MenuContainer';
import { ViewItem } from './components/Menu/ViewItem';
import Root from './components/Principal/Root';

import {useMenuRestaurant} from './helper/customHook/useMenuRestaurant';

const [categorias,productos,getProduct] = useMenuRestaurant();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{
      index:true,
      element: <Main />,
    },
    {
      path: "/restaurant",
      loader: ()=>{ return {nombre:'jkl'}},
      element: <MenuContainer Categorias={categorias} productos={productos}/>,
    },
    {
      path: "/restaurant/add/:id",
      element: <ViewItem fnAddCart={()=>{}}/>,
      loader: ({params})=>{
        return { product: getProduct(params.id) };
      },
      action: async ({ request, params }) => {
        const formData = await request.formData();
        const updates = Object.fromEntries(formData);
        await updateContact(params.contactId, updates);
        return redirect(`/contacts/${params.contactId}`);
      }
    }]
  },
  {
    path: "/element",
    element: (<div>Element</div>),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={ router }/>
  </React.StrictMode>,
)
