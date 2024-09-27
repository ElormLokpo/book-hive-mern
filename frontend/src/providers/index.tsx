import { router } from "@/routes"
import { RouterProvider } from "react-router-dom"
import { ModalProvider } from "./modal-provider"
import { Toaster } from "sonner"


export const RootProvider = () => {
    return (
        <>
            <ModalProvider >
                <Toaster />
                <RouterProvider router={router} />
            </ModalProvider>
        </>
    )
}