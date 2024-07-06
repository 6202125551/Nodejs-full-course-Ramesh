export class APIResponse{
    status:any;
    message:any;
    data:any;

    constructor(status=200, message= "success", data=[]){
        this.status=status
        this.message = message
        this.data= data
    }
}

export class ErrResponse{
    status:any;
    message:any;

    constructor(status=400, message= "fail", ){
        this.status=status
        this.message = message
    }
}