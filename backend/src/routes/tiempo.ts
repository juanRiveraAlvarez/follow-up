import {Request, Response} from "express";
import config from "../config/config";
import jwt from "jsonwebtoken";
import Tiempo from "../models/tiempo.schema";

export const guardar_tiempo = async (req: Request, res: Response) => {
    if (
        req.body.milisegundos_tiempo &&
        req.body.fecha_exacta_tiempo &&
        req.body.dias_tiempo &&
        req.body.id_tarea &&
        req.body.correo_usuario
    ) {
        const tiempo = new Tiempo({
            milisegundos_tiempo: req.body.milisegundos_tiempo,
            fecha_exacta_tiempo: req.body.fecha_exacta_tiempo,
            dias_tiempo: req.body.dias_tiempo,
            id_tarea: req.body.id_tarea,
            correo_usuario: req.body.correo_usuario
        });
        await tiempo.save();
        res.send("guardado");
    } else {
        res.send("no");
    }
};

export const obtener_tiempo = async (req: Request, res: Response) => {
};
