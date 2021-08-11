import { Request, Response } from "express";
import {syncWithExternalSystem} from "../services/synchronizer.service";

class HumanitarianAidsController {
    constructor(){};
    async index(req: Request, res:Response) {
        try {
            const data = await syncWithExternalSystem()
            console.log(data["iati-activities"][0], 'hre')
        } catch(err){
            console.log(err)
        }
        // res.send('I am healthy')
    };
}

export const  humanitarianAidsController = new HumanitarianAidsController();