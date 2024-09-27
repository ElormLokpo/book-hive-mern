import { Table } from "@/components/table"
import { DisplayCategories } from "../category";
import { EditDelete } from "@/components/table/components/edit-delete";
import { EditBook } from "../edit-book";
import { Pagination } from "@/components/pagination";
import { useContext } from "react";
import { ModalContext } from "@/context/modal-context";
import { IModalContext } from "@/context/modal-context/types";
import { BookDetail } from "../book-detail";
import { InitiateBorrowRecord } from "@/pages/dashboard/borrow-records/components/initial-borrow";


export const BookTable = () => {
    const tableHeaders: string[] = ["Book Title", "Author", "ISBN", "Location", "Total Copies", "Copies Borrowed", "Current Copies", "Status", "Categories", "Action"];
    const {SetModalContent, SetModalState} = useContext(ModalContext) as IModalContext

    const handleRowClick = (item:any)=>{
        SetModalState(true);
        SetModalContent(<BookDetail />)
    }

    const handlePreventPropagation = (e:React.MouseEvent<HTMLTableDataCellElement, MouseEvent>)=>{
        e.stopPropagation();
    }

    const handleInitiateBorrow = ()=>{
        SetModalState(true);
        SetModalContent(<InitiateBorrowRecord />)
    }


    let body = (
        [1, 2, 3, 4, 5, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => <tr onClick={()=>handleRowClick(item)} className="hover:bg-gray-50 hover:cursor-pointer" key={index}>
            <td className="py-3 px-2 border-b border-l">Jack Sparrow, Vol 3</td>
            <td className="py-3 px-2 border-b border-l">Jonathan,  Kennedy</td>
            <td className="py-3 px-2 border-b border-l">978-3-16-148410-0</td>
            <td className="py-3 px-2 border-b border-l">Isle 7, Row 4</td>
            <td className="py-3 px-2 border-b border-l">456</td>
            <td className="py-3 px-2 border-b border-l">56</td>
            <td className="py-3 px-2 border-b border-l">400</td>
            <td onClick={handlePreventPropagation} className="py-3 px-2 border-b border-l text-emerald-500 flex justify-between">Available <button className="text-gray-800 underline" onClick={handleInitiateBorrow}>Initiate borrow</button></td>
            <td className="py-3 px-2 border-b border-l"><DisplayCategories /></td>
            <td onClick={handlePreventPropagation} className="py-3 px-2 border-b border-l"><EditDelete editModal={<EditBook />} /></td>
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