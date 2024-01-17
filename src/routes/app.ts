import { NextFunction, Request, Response, Router } from "express";
import { body, validationResult } from 'express-validator';
import path from "path";

const ReactRouter = Router();

/**
 * @route GET // /
 * @desc React app .
 * @access Publico
 */

ReactRouter.get("/",(req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist', 'index.html'));
});

/**
 * @route GET // /ingresar
 * @desc login user.
 * @access Publico
 */

ReactRouter.get("/ingresar",(req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/dist', 'index.html'));
  });

  /**
 * @route GET // /registarse
 * @desc register user.
 * @access Publico
 */

ReactRouter.get("/registrarse",(req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist', 'index.html'));
});

/**
 * @route GET // /home
 * @desc app home user .
 * @access Publico
 */

ReactRouter.get("/home",(req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/dist', 'index.html'));
  });

/**
 * @route GET // /home/new-link
 * @desc create new paylink.
 * @access Publico
 */

ReactRouter.get("/home/new-link",(req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/dist', 'index.html'));
});

/**
 * @route GET // /:provaider/pay
 * @desc init point flow payment process.
 * @access Publico
 */

ReactRouter.get("/:provider/pay",(req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/dist', 'index.html'));
});

ReactRouter.get("/:provider/pay/:state",(req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist', 'index.html'));
});

ReactRouter.get("links/:user/:paylink",(req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist', 'index.html'));
});


module.exports = ReactRouter;
