import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import "./src/database/databaseConnection.js";
import tareaRouter from "./src/routes/tareas.routes.js";

//1-Configurar un puerto
const app = express();

app.set("port", process.env.PORT || 4001);
app.listen(app.get("port"), () => {
  console.info("Estoy escuchando el puerto " + app.get("port"));
});
//2-Configurar middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "/public")));
//3-Configurar las rutas
app.use("/api",tareaRouter)
