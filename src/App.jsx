import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import  { Nav } from './components/Principal/Nav';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <div className="container py-4 px-3 mx-auto">
      <h1>Hello, Bootstrap and Vite!</h1>
      <button className="btn btn-primary">Primary button</button>
    </div>
      {/* Input */}

      {/* Listado de gif */}

      {/* Gif Item */}

    </>

  );
}

export default App;

