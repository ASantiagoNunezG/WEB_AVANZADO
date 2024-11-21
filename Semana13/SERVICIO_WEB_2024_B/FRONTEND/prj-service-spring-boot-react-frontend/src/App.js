import React from 'react';
import './App.css';
import ListClientesComponent from './components/ListClientesComponent'; // Asegúrate de que la ruta sea correcta
import ListProductosComponent from './components/ListProductosComponent'; // Agregado para la lista de productos
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddClienteComponent from './components/AddClienteComponent';
import AddProductoComponent from './components/AddProductoComponent'; // Agregado para la gestión de productos


function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            {/* Rutas de clientes */}
            <Route exact path='/' element={<ListClientesComponent />}></Route>
            <Route path='/clientes' element={<ListClientesComponent />}></Route>
            <Route path='/add-cliente' element={<AddClienteComponent />}></Route>
            <Route path='/edit-cliente/:id' element={<AddClienteComponent />}></Route>

            {/* Rutas de productos */}
            <Route exact path='/productos' element={<ListProductosComponent />}></Route> {/* Ruta para listar productos */}
            <Route path='/add-producto' element={<AddProductoComponent />}></Route> {/* Ruta para agregar un producto */}
            <Route path='/edit-producto/:id' element={<AddProductoComponent />}></Route> {/* Ruta para editar un producto */}
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
