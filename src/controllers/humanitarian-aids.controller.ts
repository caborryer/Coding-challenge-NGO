import { Request, Response } from "express";
import {syncWithExternalSystem} from "../services/synchronizer.service";
import humanitarianAidModel,{HumanitarianAid} from "../models/humanitarian-aid.model";
import dataModel,{Data} from "../models/data.model";


class HumanitarianAidsController {
    constructor(){};
    async index(req: Request, res:Response) {
        
        try {
            let jsonData:Array<any>;
            const data = await syncWithExternalSystem()
            const activities = data["iati-activities"]
            const finaldata:any[] = [];
            const objData = activities.map((e:any, index:number) => { 
                const year = e["iati-activity"].budget?.value["value-date"];
                const ngo = e["iati-activity"]["contact-info"].organisation.narrative
                const aid = e["iati-activity"].budget?.value?.text
                
                const jsonData = {
                    year:year,
                    ngo:ngo,
                    aid:aid,
                    index:index
                }

                return jsonData
            })
            
            const convertArrayToObject = (array:any, key:any) => {
                const initialValue = {};
                return array.reduce((obj:any, item:any) => {
                  return {
                    ...obj,
                    [item[key]]: item,
                  };
                }, initialValue);
              };

            const toObject = convertArrayToObject(objData, 'index')
            console.log(toObject.year)

            const newHumanitarianAid: HumanitarianAid = new humanitarianAidModel(toObject);
            await newHumanitarianAid.save();
            res.send(toObject)
           
            
        } catch(err){
            res.status(500).send(err);
        }
    };

    async getData(req: Request, res:Response){
        try{
            const something = await dataModel.find()
            return res.send(something);

        } catch(err){
            res.status(500).send(err);
        }
    }
}

export const  humanitarianAidsController = new HumanitarianAidsController();