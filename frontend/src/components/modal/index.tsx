import { ModalContext } from "@/context/modal-context"
import { IModalContext } from "@/context/modal-context/types"
import { ReactElement, useContext } from "react"


export const Modal = ({content}:{content:ReactElement})=>{
    const {SetModalState} = useContext(ModalContext) as IModalContext
     
    const handleClickModalContainer = ()=>{
        SetModalState(false)
    }
    return(
        <div className="modal-container flex items-center justify-center" onClick={handleClickModalContainer}>
            {content}
        </div>
    )
}