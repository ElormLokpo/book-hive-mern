import { router } from "@/routes"
import { RouterProvider } from "react-router-dom"
import { ModalProvider } from "./modal-provider"
import { Toaster } from "sonner"
import { Provider as ReduxProvider } from "react-redux";
import { persistedStore, store } from "@/services/redux/store";
import { PersistGate } from 'redux-persist/integration/react';


export const RootProvider = () => {
    return (
        <>
            <ReduxProvider store={store}>
                <PersistGate persistor={persistedStore}>
                    <ModalProvider >
                        <Toaster />
                        <RouterProvider router={router} />
                    </ModalProvider>
                </PersistGate>

            </ReduxProvider>
        </>
    )
}