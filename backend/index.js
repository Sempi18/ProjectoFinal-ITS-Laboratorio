const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./config/database");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api", productRoutes);

// Conexión a la base de datos y servidor
const startServer = async () => {
  try {
    await sequelize.sync({ force: false }); // Cambia a `true` para reiniciar la base de datos
    console.log("Conexión a la base de datos exitosa.");

    app.listen(process.env.PORT, () => {
      console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error al conectar la base de datos:", error);
  }
};

startServer();
