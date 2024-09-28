
export interface IBorrowRecordRequest{
    _id?:string, 
    book?:any, 
    borrower_fullname?:string,
    borrower_phone?:string, 
    fine?:number, 
    borrow_date?: Date, 
    due_date?: Date, 
    date_returned?:Date,
    status?:string
}

export enum StatusEnum{
    Returned = "Returned",
    Borrowed = "Borrowed"
}

export interface IBorrowRecordReduxState{
    value:{
        all_records: any[]
    }
}