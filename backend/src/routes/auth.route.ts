import * as express from "express";

import {AuthenticationController } from "../controller/auth.controller"
const router = express.Router();

const controller =  AuthenticationController();
router.post('/signup', controller.signUp);

router.post('/login',controller.login);

router.post('/logout', controller.logout);


export default router;