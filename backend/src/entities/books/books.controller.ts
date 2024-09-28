import { NextFunction, Request, Response, Router } from "express";
import { IController } from "../../interfaces/controller.interface";
import { IBook } from "./books.types";
import { GenerateResponse } from "../../helpers/response.generator";
import { BookModel } from "./books.model";

export class BookController implements IController {
    public path = "/books";
    public router = Router();


    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/all`, this.GetAllBooks)
        this.router.post(`${this.path}/add`, this.AddBook)
        this.router.patch(`${this.path}/update/:id`, this.UpdateBook);
        this.router.delete(`${this.path}/delete/:id`, this.DeleteBook);
    }


    private async AddBook(req: Request, res: Response, next: NextFunction) {
        let { title, author } = req.body as IBook;

        if (!title) {
            let response = GenerateResponse(false, `Book title is required`, {})
            res.status(200).json(response);
            next()
        }
        let book_query = await BookModel.findOne({ title, author })
        if (book_query) {
            let response = GenerateResponse(false, `Book with name:${title} already exists`, {})
            res.status(200).json(response);
            next()
        }


        req.body.current_copies = req.body.total_copies;
        let book_mutation = await BookModel.create(req.body as IBook);

        let response = GenerateResponse(true, `Book added successfully`, book_mutation)
        res.status(200).json(response);
        next()


    }

    private async GetAllBooks(req: Request, res: Response, next: NextFunction) {
        let total_documents = await BookModel.countDocuments();

        let limit = 100;
        let total_number_pages = Math.ceil(total_documents / limit)
        let page = parseInt(req.params.page as string) || 1;
        let skip = limit * (page - 1)

        let search = req.query.search || "";

        let book_query = await BookModel.find({title:{$regex:search, $options:"i"}})
        .limit(limit)
        .skip(skip)


        let response = GenerateResponse(true, `All books`, book_query, total_number_pages)
        res.status(200).json(response);
        next()


    }

    private async UpdateBook(req: Request, res: Response, next: NextFunction) {

        let book_query = await BookModel.findById(req.params.id)
        if (!book_query) {
            let response = GenerateResponse(false, `Book does not exist`, {})
            res.status(200).json(response);
            next()
        }

        let book_mutation = await BookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

        let response = GenerateResponse(true, `Book updated successfully`, book_mutation)
        res.status(200).json(response);
        next()


    }

    private async DeleteBook(req: Request, res: Response, next: NextFunction) {
        let book_query = await BookModel.findById(req.params.id)
        if (!book_query) {
            let response = GenerateResponse(false, `Book does not exist`, {})
            res.status(200).json(response);
            next()
        }

        let book_mutation = await BookModel.findByIdAndDelete(req.params.id);

        let response = GenerateResponse(true, `Book delete successfully`, book_mutation)
        res.status(200).json(response);
        next()


    }


}