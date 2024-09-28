
export interface IBorrowRecord{
    _id?:string, 
    book?:any | string, 
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