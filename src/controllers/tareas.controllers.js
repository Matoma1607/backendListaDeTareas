import Tarea from "../database/model/tarea.js";

export const leerPrueba = (req, res) => {
  res.send("Desde el backend del proyecto listaTarea");
};
export const crearTarea = async (req, res) => {
    try {
        const tareaNueva = new Tarea(req.body);
        await tareaNueva.save();
        res.status(201).json({
            mensaje:"El producto fue creado"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje:"Ocurrio un error"
        })
    }
  };
  
  