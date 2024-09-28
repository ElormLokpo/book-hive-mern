export interface IResponse {
    success?:boolean, 
    message?:string, 
    data?: any,
    total_number_pages?:number
}

export interface IUpdateRequest{
    id?:string, 
    data?: any
}