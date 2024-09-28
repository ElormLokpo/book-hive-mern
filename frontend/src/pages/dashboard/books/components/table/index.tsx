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
import { IProps } from "./types";


export const BookTable = ({ data }: IProps) => {
    const tableHeaders: string[] = ["Book Title", "Author", "ISBN", "Location", "Total Copies", "Copies Borrowed", "Current Copies", "Status", "Categories", "Action"];
    const { SetModalContent, SetModalState } = useContext(ModalContext) as IModalContext

    const handleRowClick = (item: any) => {
        SetModalState(true);
        SetModalContent(<BookDetail row={item} />)
    }

    const handlePreventPropagation = (e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>) => {
        e.stopPropagation();
    }

    const handleInitiateBorrow = () => {
        SetModalState(true);
        SetModalContent(<InitiateBorrowRecord />)
    }


    let body = data.length > 0 ? (
        data.map((item, index) => <tr onClick={() => handleRowClick(item)} className="hover:bg-gray-50 hover:cursor-pointer" key={index}>
            <td className="py-3 px-2 border-b border-l">{item.title}</td>
            <td className="py-3 px-2 border-b border-l">{item.author}</td>
            <td className="py-3 px-2 border-b border-l">{item.isbn}</td>
            <td className="py-3 px-2 border-b border-l">{item.location}</td>
            <td className="py-3 px-2 border-b border-l">{item.total_copies}</td>
            <td className="py-3 px-2 border-b border-l">{item.copies_borrowed ? item.copies_borrowed : 0}</td>
            <td className="py-3 px-2 border-b border-l">{item.current_copies ? item.current_copies : 0}</td>
            <td onClick={handlePreventPropagation} className="py-3 px-2 border-b border-l text-emerald-500 flex justify-between">{item.status}<button className="text-gray-800 underline" onClick={handleInitiateBorrow}>Initiate borrow</button></td>
            <td className="py-3 px-2 border-b border-l"><DisplayCategories categories={item.categories} /></td>
            <td onClick={handlePreventPropagation} className="py-3 px-2 border-b border-l"><EditDelete editModal={<EditBook />} /></td>
        </tr>)
    ) : (<tr>
        <td className="py-3 px-2 border-b border-l">No books to show.</td>
    </tr>)

    return (
        <div className="rounded">
            <Table headers={tableHeaders} body={body} />

            <div className="flex items-end justify-end mt-2">
                <Pagination />
            </div>
        </div>
    )
}