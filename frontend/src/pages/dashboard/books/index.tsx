import { IoMdAdd } from "react-icons/io";
import { Button } from "@/components/button";
import { MdFilterList } from "react-icons/md";
import { SearchInput } from "@/components/input";
import { useContext } from "react";
import { IModalContext } from "@/context/modal-context/types";
import { ModalContext } from "@/context/modal-context";

export const BookPage = () => {
    const {SetModalState} = useContext(ModalContext) as IModalContext

    const handleAddBook = ()=>{
        SetModalState(true)
    }

    return (
        <div className="px-12 py-7">
            <div className="flex justify-between items-end mb-3">
                <div>
                    <p className="font-bold">Book Operations</p>
                    <p className="font-light">General book operations and functionalities.</p>
                </div>

                <div className="flex gap-2">
                    <SearchInput />
                    <Button content="Filter" style_type="outline-sm" icon={<MdFilterList />} handler={() => { }} />
                    <Button content="Add Book" icon={<IoMdAdd />} handler={handleAddBook} />
                </div>
            </div>




        </div>
    )
}