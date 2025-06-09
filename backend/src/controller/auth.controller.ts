import {Request, Response,} from 'express'
import { AuthenticationControllable } from '../Interface/AuthenticationControllable';


export function AuthenticationController():AuthenticationControllable{

    return{
        async signUp(req: Request, res: Response): Promise<void>{
        console.info("[X] - Signing up");
            const {email, password, fullname} = req.body;
           
            try{
                 if(!email || !password || !fullname){
                    console.info("[X] - Must provide all require fields.");

                    res
                      .status(400)
                      .json({errorMessage:"Missing information"});
                }
                
                if(password.length < 6){
                    console.info("[X] - Invalid password length error message send.");

                    res
                        .status(400)
                        .json({errorMessage:"Password must be more than 6 characters"});
                }

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,50}$/;

                if(!emailRegex.test(email)){
                    console.info("[X] - Invalid email error message send.");

                    res.status(400)
                        .json({errorMessage:`"${email}" is not a valid email address`});
                }

                if(nameRegex.test(fullname)){
                    console.info("[X] - Invalid fullname error message send.");
                    res
                        .status(400)
                        .json({errorMessage:`"${fullname}" is not a valid name`});
                }
            }catch(error){
                res
                    .status(500)
                    .json({errorCode:500, message:`Unable to signup: ${error}`});
            }
        },
        
        async login(req:Request, res: Response){
           console.info("[X] - api/auth: Loging");
            res.send("Loging in");
        },

        async logout(req:Request, res: Response){
            console.info("[X] - api/auth: Loging Out");
            res.send("Logging Out");
        }
    }
};
