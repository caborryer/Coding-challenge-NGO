import mongoose, {Schema, model}  from "mongoose";

 export interface Data extends mongoose.Document {
    year: string;
    donor:string;
    aids:number;
}


const DataSchema = new Schema({
    year:String,
    donor:String,
    aids:Number,
});

export default model<Data>('Book', DataSchema);