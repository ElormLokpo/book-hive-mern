import { SlideInTop } from "@/animations"
import { Button, ModalCloseButton } from "@/components/button"
import { Input } from "@/components/input"
import { IBorrowRecordRequest } from "@/services/api-types/borrow.record.types"
import { motion as m } from "framer-motion"
import { useEffect, useState } from "react"
import { parseISO } from "date-fns"
import { useAddBorrowRecordMutation } from "@/services/api/borrow-record"
import { toast } from "sonner"



export const InitiateBorrowRecord = ({ row }: { row: any }) => {
    const [borrowRecordData, setBorrowRecordData] = useState<IBorrowRecordRequest>()
    let input_style = "w-full border bg-stone-800 border-stone-700 rounded text-xs px-1 py-1.5 outline-none text-stone-300"
    const [bookTitle, setBookTitle] = useState()
    const [AddBorrowRecord, { isLoading }] = useAddBorrowRecordMutation()

    useEffect(() => {
        setBorrowRecordData((prev: any) => {
            return { ...prev, book: row._id }
        })

        setBookTitle(row.title)
    }, [row])

    const handleClickForm = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation()
    }

    const handleInputChange = (key: any, value: any) => {
        setBorrowRecordData((prev: any) => {
            return { ...prev, [key]: value }
        })
    }

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBorrowRecordData((prev: any) => {
            return { ...prev, [e.target.name]: parseISO(e.target.value) }
        })
    }

    const handleSubmit = async () => {
        
        let response = await AddBorrowRecord(borrowRecordData as IBorrowRecordRequest);
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
            className="bg-black border-stone-700 border text-stone-300 rounded p-3 w-[30rem]"
            onClick={(e) => handleClickForm(e)}
        >
            <div className="flex justify-between mb-2">
                <p className="font-semibold text-sm">Initiate Borrow</p>
                <ModalCloseButton />
            </div>


            <div className="mb-4">
                <div className="mb-1">

                    <div>
                        <label className="text-[0.6rem]">Book Title:</label>
                        <p className={input_style} >{bookTitle} </p>
                    </div>
                </div>

                <div className="mb-1 grid grid-cols-2 gap-2">
                    <Input name="borrower_fullname" inputChange={handleInputChange} label="Borrower Fullname:" />
                    <Input name="borrower_phone" inputChange={handleInputChange} label="Borrower Phone Number:" />
                </div>

                <div className="mb-1 grid grid-cols-2 gap-2">
                    <div>
                        <label className="text-[0.6rem]">Borrow Date:</label>
                        <input name="borrow_date" type="date" onChange={handleDateChange} className={input_style} />
                    </div>
                    <div>
                        <label className="text-[0.6rem]">Due Date:</label>
                        <input name="due_date" type="date" onChange={handleDateChange} className={input_style} />
                    </div>
                </div>

            </div>

            <div>
                <Button content="Initiate Borrow" handler={handleSubmit} isLoading={isLoading} loading_text="Initiating Borrow..." />
            </div>
        </m.div>
    )
}



