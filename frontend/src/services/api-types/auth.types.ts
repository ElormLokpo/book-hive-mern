export interface IAuthRequest{
    username:string,
    password:string
}


export interface IAuthReduxState{
    value:{
        current_user: any
    }
}