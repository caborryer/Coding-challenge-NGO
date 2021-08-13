import mongoose, {Schema, model}  from "mongoose";

 export interface HumanitarianAid extends mongoose.Document {
    year: string;
    ngo:string;
    aid:string;
}


const HumanitarianAidSchema = new Schema({
    year:String,
    ngo:String,
    aid:String,
});

export default model<HumanitarianAid>('HumanitarianAid',HumanitarianAidSchema);