import { SlideInTop } from "@/animations"
import { ModalCloseButton } from "@/components/button"
import { motion as m } from "framer-motion"
import { useEffect, useState } from "react"
import { format } from "date-fns"
import { IBorrowRecordRequest } from "@/services/api-types/borrow.record.types"



export const BorrowRecordDetail = ({ row }: { row: any }) => {
    const [borrowRecord, setBorrowRecord] = useState<IBorrowRecordRequest>()
    useEffect(() => {
        setBorrowRecord(row);
        console.log(row)
    }, [row])
    let p_style = "w-full border bg-stone-800 border-stone-700 rounded text-xs px-1 py-1 outline-none text-stone-300"

    const handleClickForm = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation()
    }

    return (
        <m.div
            variants={SlideInTop}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-black border border-stone-700 text-stone-300 rounded p-3 w-[30rem]"
            onClick={(e) => handleClickForm(e)}
        >
            <div className="flex justify-between mb-2">
                <p className="font-semibold text-sm">Borrow Record</p>
                <ModalCloseButton />
            </div>


            <div className="mb-4">
                <div className="mb-2">
                    <div>
                        <p className="text-[0.6rem]">Book Title:</p>
                        <p className={p_style}> {borrowRecord?.book.title}</p>
                    </div>
                </div>

                <div className="mb-2 grid grid-cols-2 gap-2">
                    <div>
                        <p className="text-[0.6rem]">Borrower Fullname:</p>
                        <p className={p_style}> {borrowRecord?.borrower_fullname}</p>
                    </div>
                    <div>
                        <p className="text-[0.6rem]">Borrower Phone Number:</p>
                        <p className={p_style}> {borrowRecord?.borrower_phone}</p>
                    </div>
                </div>

                <div className="mb-3 grid grid-cols-2 gap-2">
                    <div>
                        <p className="text-[0.6rem]">Borrow Date:</p>
                        <p className={p_style}> {borrowRecord?.borrow_date ? format(borrowRecord.borrow_date as Date, "MMMM d, yyyy") : "Pending"} </p>
                    </div>
                    <div>
                        <p className="text-[0.6rem]">Due Date:</p>
                        <p className={p_style}> { borrowRecord?.due_date ? format(borrowRecord.due_date as Date, "MMMM d, yyyy") :"Pending"} </p>
                    </div>
                </div>
                <div className="mb-2">
                    <div>
                        <p className="text-[0.6rem]">Returned Date:</p>
                        <p className={p_style}>{borrowRecord?.date_returned ? format(borrowRecord.date_returned as Date, "MMMM d, yyyy") : "Pending"} </p>
                    </div>
                </div>
               

                <div className="mb-2">
                    <div>
                        <p className="text-[0.6rem]">Status:</p>
                        <p className={p_style}> {borrowRecord?.status}</p>
                    </div>
                </div>


            </div>


        </m.div>
    )
}

