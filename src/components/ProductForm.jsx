import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const ProductForm = ({ product, onSave }) => {
  const [formData, setFormData] = useState(product || { name: "", price: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <InputText name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Precio:</label>
        <InputText
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>
      <Button label="Guardar" type="submit" />
    </form>
  );
};

export default ProductForm;
