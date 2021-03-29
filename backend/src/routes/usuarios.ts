import { Request, Response } from "express";
import Usuarios from "../models/usuarios.schema";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../config/config";

export const registrar = async (req: Request, res: Response) => {
  if (
    req.body.correo_usuario &&
    req.body.contrasena_usuario &&
    req.body.nombre_usuario
  ) {
    const resulset = await Usuarios.find({
      correo_usuario: req.body.correo_usuario,
    });
    if (!resulset[0]) {
      const contrasena_usuario = await bcrypt.hash(
        req.body.contrasena_usuario,
        config.PASS.SALT
      );
      const usuario = new Usuarios({
        correo_usuario: req.body.correo_usuario,
        contrasena_usuario,
        nombre_usuario: req.body.nombre_usuario,
      });
      await usuario.save();
      res.send("registrado");
    } else {
      res.send("Correo ya existe");
    }
  } else {
    res.send("no");
  }
};

export const ingresar = async (req: Request, res: Response): Promise<void> => {
  if (req.body.correo_usuario && req.body.contrasena_usuario) {
    const resulset = await Usuarios.find({
      correo_usuario: req.body.correo_usuario,
    });
    if (resulset[0]) {
      const contrasena_usuario = await bcrypt.compare(
        req.body.contrasena_usuario,
        resulset[0].contrasena_usuario
      );
      if (contrasena_usuario) {
        const token = jwt.sign({ contrasena_usuario }, config.TOKEN.KEY);
        res.send({ token });
      } else {
        res.send("contraseña incorrecta incorrecta");
      }
    } else {
      res.send("usuario no registrado");
    }
  }
};
