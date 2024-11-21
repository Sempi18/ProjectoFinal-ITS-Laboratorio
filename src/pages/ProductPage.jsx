import React, { useEffect, useState, useCallback } from "react";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/api";
import ProductTable from "../components/ProductTable";
import ProductForm from "../components/ProductForm";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función para cargar productos
  const loadProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (err) {
      setError("Error al cargar los productos");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  // Función para guardar producto
  const handleSave = async (product) => {
    setLoading(true);
    setError(null);
    try {
      if (product.id) {
        await updateProduct(product.id, product);
      } else {
        await createProduct(product);
      }
      loadProducts();
      setSelectedProduct(null);
    } catch (err) {
      setError("Error al guardar el producto");
    } finally {
      setLoading(false);
    }
  };

  // Función mejorada para editar
  const handleEdit = useCallback((product) => {
    setSelectedProduct(product);
    console.log("Producto seleccionado para editar:", product); // Verifica si el estado se actualiza
  }, []);

  // Función para eliminar producto
  const handleDelete = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await deleteProduct(id);
      loadProducts();
    } catch (err) {
      setError("Error al eliminar el producto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Gestión de Productos</h1>
      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ProductForm product={selectedProduct} onSave={handleSave} />
      <ProductTable
        products={products}
        onEdit={handleEdit} // Pasa la función handleEdit como prop
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ProductPage;
