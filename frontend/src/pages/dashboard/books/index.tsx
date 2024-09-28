import { IoMdAdd } from "react-icons/io";
import { Button } from "@/components/button";
import { SearchInput } from "@/components/input";
import { useContext} from "react";
import { IModalContext } from "@/context/modal-context/types";
import { ModalContext } from "@/context/modal-context";
import { AddBook } from "./components/add-book";
import { BookTable } from "./components/table";
import { useGetAllBooksQuery } from "@/services/api/book";
import { TableSkeleton } from "@/components/skeleton";
import { toast } from "sonner";

export const BookPage = () => {
    const { SetModalState, SetModalContent } = useContext(ModalContext) as IModalContext
    const { data, isLoading } = useGetAllBooksQuery(undefined)

    const triggerToast = (message:string)=>{
        toast.success(message)
        location.reload()
    }

    const handleAddBook = () => {
        SetModalState(true)
        SetModalContent(<AddBook triggerToast = {triggerToast} />)
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

                    <Button content="Add Book" icon={<IoMdAdd />} handler={handleAddBook} />
                </div>
            </div>
            
            {isLoading ? <div><TableSkeleton /> </div> : <div>
                {Array.isArray(data?.data) ? <BookTable data={data.data} /> : <p className="text-sm">Something went wrong. Kindly refresh page.</p>}
            </div>}




        </div>
    )
}