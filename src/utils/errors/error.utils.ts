export class ErrorSystem extends Error{
    constructor(message:string, typeError?:string) {
        super(message);
        this.name = typeError || ErrorSystem.name; 
        this._logs();
    }


    private _logs(){
        console.log(`[${this.name}] ${this.message}`);
    }
}
