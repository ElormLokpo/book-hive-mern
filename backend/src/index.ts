import "dotenv/config"
import { App } from "./app"
import { PingController } from "./entities/ping/ping.controller";
import { AuthController } from "./entities/auth/auth.controller";
import { BookController } from "./entities/books/books.controller";
import { BorrowRecordController } from "./entities/borrow-records/borrow.records.controller";

const app = new App([
    new PingController(),
    new AuthController(),
    new BookController(),
    new BorrowRecordController()
])
app.Listen();