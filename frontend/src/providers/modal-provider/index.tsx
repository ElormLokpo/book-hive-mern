import { ModalContext } from "@/context/modal-context"
import { ReactElement, useState } from "react"



export const ModalProvider = ({ children }: { children: any }) => {
    const [modal_state, setModalState] = useState<boolean>(false);
    const [modal_content, setModalContent] = useState<any>();

    const SetModalState = (modalState: boolean) => {
        setModalState(modalState)
    }   

    const SetModalContent = (modalContent: ReactElement) => {
        setModalContent(modalContent)
    }


    return (
        <ModalContext.Provider value={{ SetModalState, SetModalContent, modal_content, modal_state }}>
            {children}
        </ModalContext.Provider>
    )
}