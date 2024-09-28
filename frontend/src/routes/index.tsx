import { DashboardLayout } from "@/layouts/dashboard";
import { AuthPage } from "@/pages/auth";
import { BookPage } from "@/pages/dashboard/books";
import { BorrowRecordPage } from "@/pages/dashboard/borrow-records";
import { HomePage } from "@/pages/dashboard/home";
import {createBrowserRouter, RouteObject} from "react-router-dom";


let all_routes:RouteObject[] = [
    {
        path:"",
        element:<AuthPage />
    },
    {
        path:"/admin/auth",
        element:<AuthPage />
    },
    {
    path:"/admin/dashboard",
    element: <DashboardLayout />,
    children:[
        {
            path:"",
            element: <HomePage />
        },
        {
            path:"books",
            element:<BookPage />
        },
        {
            path: "borrow-records",
            element: <BorrowRecordPage />
        }
    ]
}]


export const router = createBrowserRouter(all_routes);