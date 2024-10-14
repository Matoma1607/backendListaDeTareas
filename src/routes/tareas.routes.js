import { Router } from "express";
import { crearTarea, leerPrueba } from "../controllers/tareas.controllers.js";

const router = Router();
router.route("/prueba").get(leerPrueba);
router.route("/tareas").post(crearTarea);

export default router;
