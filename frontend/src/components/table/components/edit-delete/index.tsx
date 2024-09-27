import { FiEdit2 } from "react-icons/fi";
import { RxTrash } from "react-icons/rx";
import { IProps } from "./types";
import { ReactElement, useContext } from "react";
import { ModalContext } from "@/context/modal-context";
import { IModalContext } from "@/context/modal-context/types";
import { DeleteModal } from "@/components/modal";

export const EditDelete = ({editModal, deleteModal}:IProps)=>{
    const {SetModalContent, SetModalState} = useContext(ModalContext) as IModalContext
    
    const handleEdit = ()=>{
        SetModalState(true);
        SetModalContent(editModal as ReactElement)
    }

    const handleDelete = ()=>{
        SetModalState(true);
        SetModalContent(<DeleteModal />)
    }

    return(
        <div className="text-xs flex gap-4 items-center">
            <button onClick={handleEdit} className="flex gap-1 items-center underline"><FiEdit2 /> Edit</button>
            <button onClick={handleDelete} className="flex gap-1 items-center underline"><RxTrash /> Delete</button>
        </div>
    )
}