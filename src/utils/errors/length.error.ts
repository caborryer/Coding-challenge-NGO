import { ErrorSystem } from "./error.utils";

export class DataError extends ErrorSystem {
    constructor(message:string){
        super(message, DataError.name);
    }
}