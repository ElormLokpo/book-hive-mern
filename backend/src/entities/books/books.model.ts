import { Schema, model } from "mongoose"
import { v4 as guid } from "uuid"
import { BookCategoryEnum, BookStatusEnum } from "./books.types";

export const BookSchema = new Schema({
    _id: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
    },
    author: {
        type: String,
    },
    location: {
        type: String,
    },
    total_copies: {
        type: Number,
    },
    copies_borrowed: {
        type: Number,
        default:0
    },
    current_copies: {
        type: Number,
       
    },
    categories:{
        type:[String],
        enum: Object.values(BookCategoryEnum)
    },
    status:{
        type:String, 
        enum: Object.values(BookStatusEnum),
        default: Object.values(BookStatusEnum)[0]
    }
})


BookSchema.pre('save', async function () {
    this._id = guid();

})


export const BookModel = model("BookModel", BookSchema);