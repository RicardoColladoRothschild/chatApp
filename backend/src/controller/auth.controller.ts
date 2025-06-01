import {Request, Response,} from 'express'
import { AuthenticationControllable } from '../Interface/AuthenticationControllable';


export function AuthenticationController():AuthenticationControllable{

    return{
        async signUp(req: Request, res: Response): Promise<void>{
        console.info("[X] - api/auth: Signing up");
         res.send("Signing up");
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
