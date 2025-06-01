import express from "express";

import {AuthenticationController } from "../controller/auth.controller"
const router = express.Router();

const controller =  AuthenticationController();
router.get('/signup', controller.signUp);

router.get('/login',controller.login);

router.get('/logout', controller.logout);


export default router;