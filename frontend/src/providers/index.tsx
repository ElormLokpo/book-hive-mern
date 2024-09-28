import { router } from "@/routes"
import { RouterProvider } from "react-router-dom"
import { ModalProvider } from "./modal-provider"
import { Toaster } from "sonner"
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/services/redux/store";


export const RootProvider = () => {
    return (
        <>
            <ReduxProvider store={store}>
                <ModalProvider >
                    <Toaster />
                    <RouterProvider router={router} />
                </ModalProvider>
            </ReduxProvider>
        </>
    )
}