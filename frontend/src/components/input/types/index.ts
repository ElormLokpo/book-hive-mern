export interface IProps{
    label?:string,
    placeholder?:string,
    type?:string,
    isError?:boolean,
    style_type?:string,
    inputChange : (key:any, value:any)=>void,
    name:string
}