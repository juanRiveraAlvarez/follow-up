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
    if (req.body._id) {
        const resulset = await Tiempo.find({
            id_tarea: req.body._id
        })
        let acuml = 0
        let acumm = 0
        let acummm = 0
        let acumj = 0
        let acumv = 0
        let acums = 0
        let acumd = 0

        for (let i = 0; i < resulset.length; i++) {
            if (resulset[i].dias_tiempo == 'lunes') {
                acuml = acuml + parseInt(resulset[i].milisegundos_tiempo)
            }
            else if (resulset[i].dias_tiempo == 'martes') {
                acumm = acumm + parseInt(resulset[i].milisegundos_tiempo)
            }

            else if (resulset[i].dias_tiempo == 'miercoles') {
                acummm = acummm + parseInt(resulset[i].milisegundos_tiempo)
            }

            else if (resulset[i].dias_tiempo == 'jueves') {
                acumj = acumj + parseInt(resulset[i].milisegundos_tiempo)
            }
            else if (resulset[i].dias_tiempo == 'viernes') {
                acumv = acumv + parseInt(resulset[i].milisegundos_tiempo)
            }
            else if (resulset[i].dias_tiempo == 'sabado') {
                acums = acums + parseInt(resulset[i].milisegundos_tiempo)
            }
            else if (resulset[i].dias_tiempo == 'domingo') {
                acumd = acumd + parseInt(resulset[i].milisegundos_tiempo)
            }
        }
        let retornar = [
            {
                milisegundos_lunes: acuml,
                milisegundos_martes: acumm,
                milisegundos_miercoles: acummm,
                milisegundos_jueves: acumj,
                milisegundos_viernes: acumv,
                milisegundos_sabado: acums,
                milisegundos_domingo: acumd
            }
        ]
        console.log(retornar)
        res.send(retornar)
    }else{
        res.send('faltan datos')
    }
};
