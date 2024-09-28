import { Table } from "@/components/table"

import { EditDelete } from "@/components/table/components/edit-delete";
import { EditBorrowRecord } from "../edit-borrow";
import { Pagination } from "@/components/pagination";
import { useContext } from "react";
import { ModalContext } from "@/context/modal-context";
import { IModalContext } from "@/context/modal-context/types";
import { BorrowRecordDetail } from "../borrow-detail";
import { InitiateReturnBook } from "../initiate-return";
import { format } from "date-fns"



export const BorrowRecordTable = ({ data }: { data: any[] }) => {
    const tableHeaders: string[] = ["Book Title", "Borrower Fullname", "Borrower Phone Number", "Borrow Date", "Due Date", "Date Returned", "Fine (GHS)", "Status", "Action"];
    const { SetModalContent, SetModalState } = useContext(ModalContext) as IModalContext


    console.log("FROM TABLE", data);
    const handleRowClick = (item: any) => {
        SetModalState(true);
        SetModalContent(<BorrowRecordDetail row={item} />)
    }

    const handlePreventPropagation = (e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>) => {
        e.stopPropagation();
    }

    const hanldeInitiateReturn = () => {
        SetModalState(true);
        SetModalContent(<InitiateReturnBook />)
    }

    let body = data.length > 0 ? (
        data.map((item, index) => <tr onClick={() => handleRowClick(item)} className="hover:bg-gray-50 hover:cursor-pointer" key={index}>
            <td className="py-3 px-2 border-b border-l">{item.book.title}</td>
            <td className="py-3 px-2 border-b border-l">{item.borrower_fullname}</td>
            <td className="py-3 px-2 border-b border-l">{item.borrower_phone}</td>
            <td className="py-3 px-2 border-b border-l">{format(item.borrow_date, "MMMM d, yyyy")}</td>
            <td className="py-3 px-2 border-b border-l">{format(item.due_date, "MMMM d, yyyy")}</td>
            <td className="py-3 px-2 border-b border-l">{item.date_returned ? format(item.date_returned, "MMMM d, yyyy") : "Pending"}</td>
            <td className="py-3 px-2 border-b border-l">{item.fine ? item.fine : 0}</td>
            <td onClick={handlePreventPropagation} className="py-3 px-2 border-b border-l text-emerald-500 flex justify-between">Available <button className="text-gray-800 underline" onClick={hanldeInitiateReturn}>Initiate return</button></td>
            <td onClick={handlePreventPropagation} className="py-3 px-2 border-b border-l"><EditDelete editModal={<EditBorrowRecord />} /></td>
        </tr>)
    ) : (<tr>
        <td className="py-3 px-2 border-b border-l">No borrow records to show.</td>
    </tr>)

    return (
        <div className="rounded">
            <Table headers={tableHeaders} body={body} />

            <div className="flex items-end justify-end mt-2">
                {
                    data.length <= 15 ? null : <Pagination />
                }

            </div>
        </div>
    )
}