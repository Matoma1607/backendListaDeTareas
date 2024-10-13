import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

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
app.get("/prueba", (req, res) => {
  console.log("desde la funcion de prueba");
  res.send("Desde el backend del proyecto listaTarea");
});
