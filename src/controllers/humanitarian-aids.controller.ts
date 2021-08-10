import { Request, Response } from "express";

class HumanitarianAidsController {
    public index(req: Request, res:Response) {
        res.send('I am healthy')
    };
}

export const  humanitarianAidsController = new HumanitarianAidsController();