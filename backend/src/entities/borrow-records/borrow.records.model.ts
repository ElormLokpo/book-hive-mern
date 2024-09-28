import { Schema, model } from "mongoose"
import { v4 as guid } from "uuid"
import { StatusEnum } from "./borrow.records.types";

export const BorrowRecordSchema = new Schema({
    _id: {
        type: String,
    },
    book: {
        type: String,
        ref: "BookModel"
    },
    borrower_fullname:{
        type:String
    },
    borrower_phone:{
        type:String
    },
    fine:{
        type:Number
    },
    borrow_date:{
        type:Date,
        default: Date.now()
    },
    due_date:{
        type:Date,
        default: Date.now()
    },
    date_returned:{
        type:Date,
       
    }, 
    status:{
        type:String, 
        enum : Object.values(StatusEnum),
        default: Object.values(StatusEnum)[1]
    } 
})


BorrowRecordSchema.pre('save', async function () {
    this._id = guid();

})


export const BorrowRecordModel = model("BorrowRecordModel", BorrowRecordSchema);