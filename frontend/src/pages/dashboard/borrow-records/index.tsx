import { BorrowRecordTable } from "./components/table";
import { TableSkeleton } from "@/components/skeleton";
import { toast } from "sonner";
import { BiRefresh } from "react-icons/bi";
import { Button } from "@/components/button";
import { useGetAllBorrowRecordsQuery } from "@/services/api/borrow-record";


export const BorrowRecordPage = () => {

    const { data, isLoading } = useGetAllBorrowRecordsQuery(undefined)

    const triggerToast = (message: string) => {
        toast.success(message)
        location.reload()
    }


    return (
        <div className="px-12 py-7">
            <div className="flex justify-between items-end mb-3">
                <div>
                    <p className="font-bold">Borrow records Operations</p>
                    <p className="font-light">Records of all borrowed books.</p>
                </div>

                <div className="flex gap-2">
                    <Button content="Refresh" icon={<BiRefresh />} handler={()=>{}} />

                </div>
            </div>

            {isLoading ? <div><TableSkeleton /> </div> : <div>
                {Array.isArray(data?.data) ? <BorrowRecordTable data={data.data} /> : <p className="text-sm">Something went wrong. Kindly refresh page.</p>}
            </div>}






        </div>
    )
}