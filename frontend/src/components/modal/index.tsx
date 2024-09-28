import { ModalContext } from "@/context/modal-context"
import { IModalContext } from "@/context/modal-context/types"
import { ReactElement, useContext } from "react"
import { motion as m } from "framer-motion";
import { SlideInTop } from "@/animations";
import { ModalCloseButton } from "../button";


export const Modal = ({ content }: { content: ReactElement }) => {
    const { SetModalState } = useContext(ModalContext) as IModalContext

    const handleClickModalContainer = () => {
        SetModalState(false)
    }
    return (
        <div className="modal-container flex items-center justify-center" onClick={handleClickModalContainer}>
            {content}
        </div>
    )
}

export const DeleteModal = ({text, deleteHandler}:{text:string, deleteHandler:()=>void}) => {
    const {SetModalState} = useContext(ModalContext) as IModalContext
    
    const handleClickForm = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation()
    }

    const handleDelete = ()=>{
        deleteHandler()
    }

    const handleClose = ()=>{
        SetModalState(false)
    }

    return (
        <m.div
            variants={SlideInTop}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-white rounded p-3 w-[30rem]"
            onClick={(e) => handleClickForm(e)}
        >
            <div className="flex justify-between mb-2">
                <p className="font-semibold text-sm">Delete Book</p>
                <ModalCloseButton />
            </div>

            <div className="mb-3">
                <p className="text-sm">{text}</p>
            </div>
            <div className="flex gap-2">
                <button onClick={handleDelete} className="text-xs hover:bg-gray-50 border-red-500 text-red-400 border p-1 rounded">Delete</button>
                <button onClick={handleClose} className="text-xs hover:bg-gray-50 border-gray-600 text-gray-600 border p-1 rounded">Cancel</button>
            </div>
        </m.div>
    )
}