const Product = require("../models/Product");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos." });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const product = await Product.create({ name, price });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el producto." });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;
    const product = await Product.findByPk(id);
    if (!product)
      return res.status(404).json({ error: "Producto no encontrado." });

    product.name = name;
    product.price = price;
    await product.save();

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el producto." });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product)
      return res.status(404).json({ error: "Producto no encontrado." });

    await product.destroy();
    res.json({ message: "Producto eliminado." });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el producto." });
  }
};
