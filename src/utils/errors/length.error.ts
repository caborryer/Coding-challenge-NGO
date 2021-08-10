import { ErrorSystem } from "./error.utils";

export class LengthError extends ErrorSystem {
    constructor(message:string){
        super(message, LengthError.name);
    }
}