import mongoose, {Schema} from "mongoose";

const tareaSchema = new Schema({
    titulo:{
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 100,
        unique: true
    },
    descripcion:{
        type: String,
        required: true,
        trim: true,
        minLength: 5,
        maxLength: 500
    },
    completado:{
        type: Boolean,
        default: false
    },
    fechaCreacion:{
        type: Date,
        default: Date.now
    },
    fechaActualizacion:{
        type: Date,
        default: Date.now
    }
});

const Tarea = mongoose.model("Tarea",tareaSchema);

export default Tarea;