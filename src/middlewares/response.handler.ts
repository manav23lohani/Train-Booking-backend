export class ResponseHandler {
    constructor(
        public data: any,
        public error: any = null
    ){
        this.data = data;
        this.error = error;
    }
}