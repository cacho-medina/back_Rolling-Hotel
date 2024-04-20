import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionHabitacion = [
    check("numero")
        .notEmpty()
        .withMessage("El numero de la habitacion es obligatorio")
        .isLength({ min: 1, max: 100 })
        .withMessage("El numero de la habitacion debe estar entre 1 y 100"),
    check("precio")
        .notEmpty()
        .withMessage("El precio de la habitacion es obligatorio")
        .isNumeric()
        .withMessage("El precio debe ser un valor numerico")
        .custom((value) => {
            if (value >= 5000 && value <= 100000) {
                return true;
            } else {
                throw new Error(
                    "El precio debe ser un valor entre 5000 y 100000"
                );
            }
        }),
    check("descripcion")
        .notEmpty()
        .withMessage("La descripcion de la habitacion es obligatoria")
        .isLength({ min: 30, max: 500 })
        .withMessage("La descripcion debe tener entre 30 y 500 caracteres"),
    check("activa")
        .notEmpty()
        .withMessage("El estado de la habitacion es obligatorio"),
    check("piso")
        .notEmpty()
        .withMessage("El piso de la habitacion es obligatorio")
        .isLength({ min: 1, max: 5 })
        .withMessage("El piso de la habitacion debe estar entre 1 y 5"),
    check("personas")
        .isLength({ min: 1, max: 5 })
        .withMessage(
            "La cantidad de personas de la habitacion debe estar entre 1 y 5"
        ),
    check("imagen")
        .notEmpty()
        .withMessage("La imagen es obligatoria")
        .matches(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i)
        .withMessage(
            "La imagen debe tener el formato de una url valida y terminar en (png|jpg|jpeg|gif|svg)"
        ),
    (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionHabitacion;
