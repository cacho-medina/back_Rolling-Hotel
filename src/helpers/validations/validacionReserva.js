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
        .withMessage("la fecha de ingreso es obligatoria")
        .isISO8601()
        .toDate()
        .withMessage("La feche de inicio debe ser en formato valido de fecha (Date)"),
    check("salida")
        .notEmpty()
        .withMessage("la fecha de salida es obligatoria")
        .isISO8601()
        .toDate()
        .withMessage("La feche de inicio debe ser en formato valido de fecha (Date)"),
    check("monto")
        .notEmpty()
        .withMessage("el monto de la reserva es obligatorio"),
    check("userId")
        .notEmpty()
        .withMessage("el identificador del usuario es obligatorio"),
    check("habId")
        .notEmpty()
        .withMessage("el identificador de la habitacion es obligatorio"),
];

export default validacionReserva;
