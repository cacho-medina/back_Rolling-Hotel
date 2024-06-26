import mongoose, { Schema } from "mongoose";

const habitacionSchema = new Schema({
    numero: {
        type: Number,
        unique: true,
        required: true,
        min: 1,
        max: 100,
    },
    precio: {
        type: Number,
        required: true,
        min: 5000,
        max: 100000,
    },
    descripcion: {
        type: String,
        required: true,
        minLength: 30,
        maxLength: 500,
    },
    activa: {
        type: Boolean,
        required: true,
    },
    piso: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    personas: {
        type: Number,
        min: 1,
        max: 5,
    },
    imagen: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i.test(
                    value
                );
            },
            message: (props) => `${props.value} no es una url valida`,
        },
    },
});

const Habitacion = mongoose.model("Habitacion", habitacionSchema);

export default Habitacion;
