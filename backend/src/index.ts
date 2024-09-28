import "dotenv/config"
import { App } from "./app"
import { PingController } from "./entities/ping/ping.controller";
import { AuthController } from "./entities/auth/auth.controller";
import { BookController } from "./entities/books/books.controller";

const app = new App([
    new PingController(),
    new AuthController(),
    new BookController()
])
app.Listen();