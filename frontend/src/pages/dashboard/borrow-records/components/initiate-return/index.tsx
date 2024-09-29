import { SlideInTop } from "@/animations"
import { Button, ModalCloseButton } from "@/components/button"
import { motion as m } from "framer-motion"
import { IBorrowRecordRequest } from "@/services/api-types/borrow.record.types"
import { useState, useEffect } from "react"
import { useUpdateBorrowRecordMutation } from "@/services/api/borrow-record"
import { parseISO } from "date-fns"
import { toast } from "sonner"

export const InitiateReturnBook = ({ row }: { row: any }) => {
    const [borrowRecordData, setBorrowRecordData] = useState<IBorrowRecordRequest>()
    const [UpdateBorrowRecord, { isLoading }] = useUpdateBorrowRecordMutation();
    let input_style = "w-full border border-stone-700 bg-stone-800 rounded text-xs px-1 py-1.5 outline-none text-gray-800"

    useEffect(() => {

        setBorrowRecordData(row)
    }, [row])

    const handleClickForm = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation()
    }

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBorrowRecordData((prev: any) => {
            return { ...prev, [e.target.name]: parseISO(e.target.value), status: "Returned" }
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
            className="bg-black border-stone-700 text-stone-300 border rounded p-3 w-[30rem]"
            onClick={(e) => handleClickForm(e)}
        >
            <div className="flex justify-between mb-2">
                <p className="font-semibold text-sm">Initiate Return Book</p>
                <ModalCloseButton />
            </div>

            <div className="mb-1">

                <div>
                    <label className="text-[0.6rem]">Book Title: </label>
                    <p className={input_style} >{borrowRecordData?.book.title} </p>
                </div>

            </div>
            <div className="mb-3">

                <div>
                    <label className="text-[0.6rem]">Return Date: </label>
                    <input name="date_returned" onChange={handleDateChange} type="date" className={input_style} />
                </div>

            </div>

            <div>
                <Button isLoading={isLoading} loading_text="Initiating Return..." content="Initiate Return" handler={handleEditSubmit} />
            </div>
        </m.div>
    )
}



