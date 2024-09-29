import { Table } from "@/components/table"

import { EditDelete } from "@/components/table/components/edit-delete";
import { EditBorrowRecord } from "../edit-borrow";
import { useContext } from "react";
import { ModalContext } from "@/context/modal-context";
import { IModalContext } from "@/context/modal-context/types";
import { BorrowRecordDetail } from "../borrow-detail";
import { InitiateReturnBook } from "../initiate-return";
import { format } from "date-fns"
import { DeleteModal } from "@/components/modal";
import { useDeleteBorrowRecordMutation } from "@/services/api/borrow-record";
import {toast} from "sonner"


export const BorrowRecordTable = ({ data }: { data: any[] }) => {
    const tableHeaders: string[] = ["Book Title", "Borrower Fullname", "Borrower Phone Number", "Borrow Date", "Due Date", "Date Returned", "Status", "Action"];
    const { SetModalContent, SetModalState } = useContext(ModalContext) as IModalContext
    const [DeleteBorrowRecord] = useDeleteBorrowRecordMutation();

    const handleDelete = async(id:string)=>{
        let response = await DeleteBorrowRecord(id)
        if (response.data?.success == true) {
            location.reload();
        }else{
            toast.error(response.data?.message)
        }
    }


    const handleRowClick = (item: any) => {
        SetModalState(true);
        SetModalContent(<BorrowRecordDetail row={item} />)
    }

    const handlePreventPropagation = (e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>) => {
        e.stopPropagation();
    }

    const hanldeInitiateReturn = (item:any) => {
        SetModalState(true);
        SetModalContent(<InitiateReturnBook row={item} />)
    }

    let body = data.length > 0 ? (
        data.map((item, index) => <tr onClick={() => handleRowClick(item)} className="hover:bg-stone-900 hover:cursor-pointer" key={index}>
            <td className="py-3.5 px-2 border-b  border-stone-700">{item.book.title}</td>
            <td className="py-3.5 px-2 border-b  border-stone-700">{item.borrower_fullname}</td>
            <td className="py-3.5 px-2 border-b  border-stone-700">{item.borrower_phone}</td>
            <td className="py-3.5 px-2 border-b  border-stone-700">{format(item.borrow_date, "MMMM d, yyyy")}</td>
            <td className="py-3.5 px-2 border-b  border-stone-700">{format(item.due_date, "MMMM d, yyyy")}</td>
            <td className="py-3.5 px-2 border-b  border-stone-700">{item.date_returned ? format(item.date_returned, "MMMM d, yyyy") : "Pending"}</td>
           
            <td onClick={handlePreventPropagation} className="py-3.5 px-2 border-b flex justify-between border-l border-stone-700">{item.status == "Borrowed" ? <p className="text-yellow-500">{item.status}</p> : <p className="text-emerald-500">{item.status}</p>} <button className="text-sonte-400 underline" onClick={()=>hanldeInitiateReturn(item)}>Initiate return</button></td>
            <td onClick={handlePreventPropagation} className="py-3.5 px-2 border-b border-l border-stone-700"><EditDelete editModal={<EditBorrowRecord row={item} />}  deleteModal={<DeleteModal text="Are you sure you want to delete borrow record?" deleteHandler={()=>handleDelete(item._id)} />}/></td>
        </tr>)
    ) : (<tr>
        <td className="py-3 px-2 border-b border-stone-700 border-l">No borrow records to show.</td>
    </tr>)

    return (
        <div className="rounded">
            <Table headers={tableHeaders} body={body} />

          
        </div>
    )
}