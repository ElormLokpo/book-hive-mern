import { router } from "@/routes"
import { RouterProvider } from "react-router-dom"
import { ModalProvider } from "./modal-provider"


export const RootProvider = () => {
    return (
        <>
            <ModalProvider >
                <RouterProvider router={router} />
            </ModalProvider>
        </>
    )
}