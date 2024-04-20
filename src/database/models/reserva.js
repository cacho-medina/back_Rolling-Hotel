import mongoose, { Schema } from "mongoose";

const reservaSchema = new Schema({
    informacion: {
        type: String,
        maxLength: 1000,
    },
    userId: {
        type: String,
        required: true,
    },
    nombreHuesped: {
        type: String,
        required: true,
    },
    numeroHab: {
        type: Number,
        required: true,
    },
    ingreso: {
        type: String,
        required: true,
    },
    salida: {
        type: String,
        required: true,
    },
    monto: {
        type: Number,
        required: true,
    },
});

const Reserva = mongoose.model("Reserva", reservaSchema);

export default Reserva;
