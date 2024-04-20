import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionReserva = [
    check("nombreHuesped")
        .notEmpty()
        .withMessage("el nombre del huesped es obligatorio"),
    check("numeroHab")
        .notEmpty()
        .withMessage("el numero de la habitacion es obligatorio")
        .isNumeric()
        .withMessage("El numero de habitacion tiene que ser un valor numerico"),
    check("ingreso")
        .notEmpty()
        .withMessage("la fecha de ingreso es obligatoria"),
    check("salida").notEmpty().withMessage("la fecha de salida es obligatoria"),
    check("monto")
        .notEmpty()
        .withMessage("el monto de la reserva es obligatorio"),
    check("userId")
        .notEmpty()
        .withMessage("el identificador del usuario es obligatorio"),
    (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionReserva;
