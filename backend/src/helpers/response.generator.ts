export const GenerateResponse = (success:boolean, message:string, data:any, total_number_pages?:number)=>{
    return {success, message, data, total_number_pages}
}