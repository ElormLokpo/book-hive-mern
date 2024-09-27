import { SearchInput } from "@/components/input";
import { BorrowRecordTable } from "./components/table";

export const BorrowRecordPage = () => {
    
    return (
        <div className="px-12 py-7">
            <div className="flex justify-between items-end mb-3">
                <div>
                    <p className="font-bold">Borrow records Operations</p>
                    <p className="font-light">Records of all borrowed books.</p>
                </div>

                <div className="flex gap-2">
                    <SearchInput />   
                </div>
            </div>

            <div>
                <BorrowRecordTable />
            </div>




        </div>
    )
}