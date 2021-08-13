import mongoose, {Schema, model}  from "mongoose";

 export interface Data extends mongoose.Document {
    year: string;
    ngo:number;
    aid:number;
}


const DataSchema = new Schema({
    year:String,
    ngo:Number,
    aid:Number,
});

export default model<Data>('Data',DataSchema);