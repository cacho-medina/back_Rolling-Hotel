import Reserva from "../database/models/reserva.js";
import Habitacion from "../database/models/habitacion.js";

export const postReserva = async (req, res) => {
    try {
        const { numeroHab, ingreso, salida } = req.body;

        //busca habitacion
        const habitacion = await Habitacion.findOne({ numero: numeroHab });
        if (!habitacion) {
            return res.status(404).json({ message: "La habitacion no existe" });
        }
        //comprueba estado de habitacion
        if (!habitacion.activa) {
            return res
                .status(404)
                .json({ message: "La habitacion no esta activa" });
        }
        //comprueba validez de fechas

        const hoy = new Date();
        const ingresoReserva = new Date(ingreso);
        const salidaReserva = new Date(salida);
        if (ingresoReserva < hoy)
            return res.status(400).json({
                mensaje: "Fecha de inicio invalida",
            });
        if (salidaReserva <= ingresoReserva)
            return res.status(400).json({
                mensaje: "Fecha de salida invalida",
            });

        //comprueba disponibilidad de fechas

        const fechaNodisponible = await Reserva.findOne({
            numeroHab,
            ingreso: { $lt: salida },
            salida: { $gt: ingreso },
        });
        if (fechaNodisponible) {
            return res.status(400).json({
                mensaje: "Habitacion ocupada",
            });
        }

        //calcular monto de reserva
        const diferenciaMilisegundos =
            salidaReserva.getTime() - ingresoReserva.getTime();

        // Convierte la diferencia de milisegundos a días
        const dias = diferenciaMilisegundos / (1000 * 3600 * 24);

        // Redondea hacia arriba la cantidad de días si es necesario
        const cantidadDias = Math.ceil(dias);
        //precio
        const monto = habitacion.precio * cantidadDias;

        const reserva = new Reserva({ ...req.body, monto });
        await reserva.save();
        res.status(201).json({ message: "Reserva registrada con exito!" });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            message: "Error! No se pudo registrar la reserva",
        });
    }
};
export const deleteReserva = async (req, res) => {
    try {
        const reserva = await Reserva.findById(req.params.id);
        if (!reserva) {
            res.status(404).json({
                message: "La reserva no fue encontrada",
            });
        }
        await Reserva.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Reserva eliminada con exito" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "La reserva no pudo ser eliminada" });
    }
};
export const getReservas = async (req, res) => {
    try {
        const reservas = await Reserva.find();
        res.status(200).json(reservas);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "Error al obtener reservas" });
    }
};
export const getReservaById = async (req, res) => {
    try {
        const reserva = await Reserva.findById(req.params.id);
        res.status(200).json(reserva);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "Reserva no encontrada" });
    }
};
