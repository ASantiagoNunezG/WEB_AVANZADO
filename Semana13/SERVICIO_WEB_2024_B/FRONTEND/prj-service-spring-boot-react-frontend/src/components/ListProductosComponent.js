import React, { useEffect, useState } from 'react';
import ProductoService from '../services/ProductoService';
import { Link } from 'react-router-dom';

export const ListProductosComponent = () => {
    const [productos, setProductos] = useState([]);

    // Cargar la lista de productos al montar el componente
    useEffect(() => {
        listarProductos();
    }, []);

    // Función para obtener todos los productos
    const listarProductos = () => {
        ProductoService.getAllProductos()
            .then(response => {
                setProductos(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log('Error al obtener productos:', error);
            });
    };

    // Función para eliminar un producto
    const deleteProducto = (productoId) => {
        ProductoService.deleteProducto(productoId)
            .then(response => {
                listarProductos(); // Volver a cargar los productos después de eliminar
            })
            .catch(error => {
                console.log('Error al eliminar el producto:', error);
            });
    };

    return (
        <div className='container' style={{ marginTop: "80px" }}>
            <h2 className='text-center'>Listado de Productos</h2>

            <Link to='/add-producto' className='btn btn-primary'>
                Agregar Producto
            </Link>

            <table className="table table-secondary table-hover" style={{ marginTop: "20px" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Cantidad Inventario</th>
                        <th>Categoría</th>
                        <th>Proveedor</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map(producto => (
                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.descripcion}</td>
                                <td>S/.{producto.precio}</td>
                                
                                <td>{producto.cantidadInventario}</td>
                                <td>{producto.categoria ? producto.categoria.nombre : 'N/A'}</td>
                                <td>{producto.proveedor ? producto.proveedor.nombre : 'N/A'}</td>
                                <td>
                                    <Link className='btn btn-info' to={`/edit-producto/${producto.id}`}>
                                        Actualizar
                                    </Link>
                                    <button
                                        style={{ marginLeft: "10px" }}
                                        className='btn btn-danger'
                                        onClick={() => deleteProducto(producto.id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListProductosComponent;
