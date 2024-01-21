import { NextFunction, Request, Response, Router } from "express";
import { body, validationResult } from 'express-validator';
import path from "path";

const TemplateRouter = Router();

/**
 * @route GET /paylinks/:id
 * @desc html template for pay.
 * @access Publico
 */

TemplateRouter.get("/:id",(req, res) => {
    res.render('index', { title: 'Mi Aplicación', message: '¡Hola, mundo!' });
  });

module.exports = TemplateRouter;