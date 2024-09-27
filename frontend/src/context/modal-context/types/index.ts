import { ReactElement } from "react";

export interface IModalContext {
    modal_state: boolean,
    modal_content: ReactElement,
    SetModalState: (param:boolean) => void,
    SetModalContent: (param:ReactElement) => void
}