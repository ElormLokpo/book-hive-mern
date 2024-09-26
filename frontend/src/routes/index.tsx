import { DashboardLayout } from "@/layouts/dashboard";
import { BookPage } from "@/pages/dashboard/books";
import { HomePage } from "@/pages/dashboard/home";
import {createBrowserRouter, RouteObject} from "react-router-dom";


let all_routes:RouteObject[] = [{
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
        }
    ]
}]


export const router = createBrowserRouter(all_routes);