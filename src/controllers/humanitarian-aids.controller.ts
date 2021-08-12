import { Request, Response } from "express";
import {syncWithExternalSystem} from "../services/synchronizer.service";
import { getConnection } from "../db";

class HumanitarianAidsController {
    constructor(){};
    async index(req: Request, res:Response) {
        try {
            const data = await syncWithExternalSystem()
            const activities = data["iati-activities"]
            const finaldata:any = [];
            activities.map((e:any) => { 
                const year = e["iati-activity"].budget?.value["value-date"];
                const ngo = e["iati-activity"]["contact-info"].organisation.narrative
                const aid = e["iati-activity"].budget?.value?.text
              
              const jsonData = {
                  year: year,
                  ngo:ngo,
                  aid:aid
              }

              finaldata.push(jsonData)
            })
        
            return res.json(finaldata);
            
        } catch(err){
            console.log(err)
        }
    };
}

export const  humanitarianAidsController = new HumanitarianAidsController();