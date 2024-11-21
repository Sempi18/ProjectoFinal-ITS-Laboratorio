import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Estilos globales
import App from "./App"; // Componente principal de la aplicación
import reportWebVitals from "./reportWebVitals"; // Métricas de rendimiento

// Crear el contenedor raíz
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderizar la aplicación en el DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Reporte de métricas de rendimiento
reportWebVitals();
