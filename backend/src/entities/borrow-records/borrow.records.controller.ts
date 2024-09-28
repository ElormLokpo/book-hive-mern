import { NextFunction, Request, Response, Router } from "express";
import { IController } from "../../interfaces/controller.interface";
import { IBorrowRecord } from "./borrow.records.types";
import { GenerateResponse } from "../../helpers/response.generator";
import { BorrowRecordModel } from "./borrow.records.model";
import { BookModel } from "../books/books.model";
import { v4 as uuidv4, validate, version } from 'uuid';

export class BorrowRecordController implements IController {
    public path = "/borrow-records";
    public router = Router();


    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/all`, this.GetAllBorrowRecords)
        this.router.post(`${this.path}/add`, this.AddBorrowRecord)
        this.router.patch(`${this.path}/update/:id`, this.UpdateBorrowRecord);
        this.router.delete(`${this.path}/delete/:id`, this.DeleteBorrowRecord);
    }


    private async AddBorrowRecord(req: Request, res: Response, next: NextFunction) {
        let { book } = req.body as IBorrowRecord;


        if (validate(book) && version(book) === 4) {
            const book_query = await BookModel.findById(book);
            if (!book_query) {
                let response = GenerateResponse(false, `Book does not exist`, {})
                res.status(200).json(response);
                next()
            }

            if (book_query.current_copies <= 0) {
                let response = GenerateResponse(false, `Book ${book_query.title} is borrowed out`, {})
                res.status(200).json(response);
                next()
            }

            let borrow_record_mutation = await BorrowRecordModel.create(req.body);
            let update_data = { copies_borrowed: book_query.copies_borrowed + 1, current_copies: book_query.current_copies - 1 }
            await BookModel.findByIdAndUpdate(book, update_data, { new: true })


            let response = GenerateResponse(true, `BorrowRecord added successfully`, borrow_record_mutation)
            res.status(200).json(response);
            next()
        }


    }

    private async GetAllBorrowRecords(req: Request, res: Response, next: NextFunction) {
        let total_documents = await BorrowRecordModel.countDocuments();

        let limit = 100;
        let total_number_pages = Math.ceil(total_documents / limit)
        let page = parseInt(req.params.page as string) || 1;
        let skip = limit * (page - 1)


        let book_query = await BorrowRecordModel.find()
            .limit(limit)
            .skip(skip)
            .populate("book")


        let response = GenerateResponse(true, `All borrow records`, book_query, total_number_pages)
        res.status(200).json(response);
        next()


    }

    private async UpdateBorrowRecord(req: Request, res: Response, next: NextFunction) {

        let book_query = await BorrowRecordModel.findById(req.params.id)
        if (!book_query) {
            let response = GenerateResponse(false, `BorrowRecord does not exist`, {})
            res.status(200).json(response);
            next()
        }

        let book_mutation = await BorrowRecordModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

        let response = GenerateResponse(true, `BorrowRecord updated successfully`, book_mutation)
        res.status(200).json(response);
        next()


    }

    private async DeleteBorrowRecord(req: Request, res: Response, next: NextFunction) {
        let book_query = await BorrowRecordModel.findById(req.params.id)
        if (!book_query) {
            let response = GenerateResponse(false, `BorrowRecord does not exist`, {})
            res.status(200).json(response);
            next()
        }

        let book_mutation = await BorrowRecordModel.findByIdAndDelete(req.params.id);

        let response = GenerateResponse(true, `BorrowRecord delete successfully`, book_mutation)
        res.status(200).json(response);
        next()


    }


}