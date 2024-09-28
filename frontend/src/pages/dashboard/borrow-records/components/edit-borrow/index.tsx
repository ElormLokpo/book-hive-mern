import { SlideInTop } from "@/animations"
import { Button, ModalCloseButton } from "@/components/button"
import { IBorrowRecordRequest } from "@/services/api-types/borrow.record.types"
import { IUpdateRequest } from "@/services/api-types/response.types"
import { useUpdateBorrowRecordMutation } from "@/services/api/borrow-record"
import { format, parseISO } from "date-fns"
import { motion as m } from "framer-motion"
import { useEffect, useState } from "react"
import { toast } from "sonner"


export const EditBorrowRecord = ({ row }: { row: any }) => {
    const [borrowRecordData, setBorrowRecordData] = useState<IBorrowRecordRequest>()
    const [UpdateBorrowRecord, { isLoading }] = useUpdateBorrowRecordMutation();
    let input_style = "w-full border bg-stone-800 border-stone-700 rounded text-xs px-1 py-1.5 outline-none text-stone-300"

    useEffect(() => {
        setBorrowRecordData(row)
    }, [row])

    const handleClickForm = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation()
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBorrowRecordData((prev: any) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBorrowRecordData((prev: any) => {
            return { ...prev, [e.target.name]: parseISO(e.target.value) }
        })
    }

    const handleEditSubmit = async () => {

        let response = await UpdateBorrowRecord({ id: borrowRecordData?._id, data: borrowRecordData })

        if (response.data?.success == true) {
            location.reload();
        } else {
            toast.error(response.data?.message)
        }
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
                <p className="font-semibold text-sm">Edit Book</p>
                <ModalCloseButton />
            </div>


            <div className="mb-4">


                <div className="mb-3 grid grid-cols-2 gap-2">
                    <div>
                        <label className="text-[0.6rem]">Borrower Fullname:</label>
                        <input name="borrower_fullname" onChange={handleInputChange} type="text" value={borrowRecordData?.borrower_fullname} className={input_style} />
                    </div>
                    <div>
                        <label className="text-[0.6rem]">Borrower Phone Number:</label>
                        <input name="borrower_phone" onChange={handleInputChange} type="text" value={borrowRecordData?.borrower_phone} className={input_style} />
                    </div>
                </div>

                <div className="mb-3 grid grid-cols-2 gap-2">

                    <div>
                        <p className="text-[0.6rem]">Current Borrow Date: <span className="font-semibold">{borrowRecordData?.borrow_date ? format(borrowRecordData?.borrow_date as Date, 'MMMM d, yyyy') : <p>Pending</p>}</span></p>
                        <label className="text-[0.6rem]">Borrow Date: </label>
                        <input name="borrow_date" onChange={handleDateChange} type="date" className={input_style} />
                    </div>
                    <div>
                        <p className="text-[0.6rem]">Current Due Date: <span className="font-semibold">{borrowRecordData?.due_date ? format(borrowRecordData?.due_date as Date, 'MMMM d, yyyy') : <p>Pending</p>}</span> </p>
                        <label className="text-[0.6rem]">Due Date:</label>
                        <input name="due_date" onChange={handleDateChange} type="date" className={input_style} />
                    </div>
                </div>

                <div>
                    <Button isLoading={isLoading} loading_text={"Editing..."} content="Edit Book" handler={handleEditSubmit} />
                </div>
            </div>
        </m.div>
    )
}



