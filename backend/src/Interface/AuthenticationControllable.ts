
import { Request, Response } from 'express';
export type AuthenticationControllable = {

    signUp: (req: Request, res: Response)=>Promise<void>;
    login:(req: Request, res: Response)=>Promise<void>;
    logout:(req:Request, res: Response)=>Promise<void>;

}