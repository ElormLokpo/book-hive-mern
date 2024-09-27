import { Table } from "@/components/table"

import { EditDelete } from "@/components/table/components/edit-delete";
import { EditBorrowRecord } from "../edit-borrow";
import { Pagination } from "@/components/pagination";
import { useContext } from "react";
import { ModalContext } from "@/context/modal-context";
import { IModalContext } from "@/context/modal-context/types";
import { BorrowRecordDetail } from "../borrow-detail";
import { InitiateReturnBook } from "../initiate-return";



export const BorrowRecordTable = () => {
    const tableHeaders: string[] = ["Book Title", "Borrower Fullname", "Borrower Phone Number", "Borrow Date", "Due Date", "Date Returned", "Fine (GHS)", "Status", "Action"];
    const {SetModalContent, SetModalState} = useContext(ModalContext) as IModalContext

    const handleRowClick = (item:any)=>{
        SetModalState(true);
        SetModalContent(<BorrowRecordDetail />)
    }

    const handlePreventPropagation = (e:React.MouseEvent<HTMLTableDataCellElement, MouseEvent>)=>{
        e.stopPropagation();
    }

    const hanldeInitiateReturn = ()=>{
        SetModalState(true);
        SetModalContent(<InitiateReturnBook />)
    }

    let body = (
        [1, 2, 3, 4, 5, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => <tr onClick={()=>handleRowClick(item)} className="hover:bg-gray-50 hover:cursor-pointer" key={index}>
            <td className="py-3 px-2 border-b border-l">Jack Sparrow, Vol 3</td>
            <td className="py-3 px-2 border-b border-l">Jonathan,  Kennedy</td>
            <td className="py-3 px-2 border-b border-l">0553435677</td>
            <td className="py-3 px-2 border-b border-l">12th July 2024</td>
            <td className="py-3 px-2 border-b border-l">30th August 2024</td>
            <td className="py-3 px-2 border-b border-l">1st September 2024</td>
            <td className="py-3 px-2 border-b border-l">320</td>
            <td onClick={handlePreventPropagation} className="py-3 px-2 border-b border-l text-emerald-500 flex justify-between">Available <button className="text-gray-800 underline" onClick={hanldeInitiateReturn}>Initiate return</button></td>
            <td onClick={handlePreventPropagation} className="py-3 px-2 border-b border-l"><EditDelete editModal={<EditBorrowRecord />} /></td>
        </tr>)
    )

    return (
        <div className="rounded">
            <Table headers={tableHeaders} body={body} />

            <div className="flex items-end justify-end mt-2">
                <Pagination />
            </div>
        </div>
    )
}