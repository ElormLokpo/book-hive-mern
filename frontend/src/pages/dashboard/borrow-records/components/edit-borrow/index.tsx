import { SlideInTop } from "@/animations"
import { Button, ModalCloseButton } from "@/components/button"

import { motion as m } from "framer-motion"


export const EditBorrowRecord = () => {

    const handleClickForm = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation()
    }

    return (
        <m.div
            variants={SlideInTop}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-white rounded p-3 w-[30rem]"
            onClick={(e) => handleClickForm(e)}
        >
            <div className="flex justify-between mb-2">
                <p className="font-semibold text-sm">Edit Book</p>
                <ModalCloseButton />
            </div>


            <div className="mb-4">
                <div className="mb-1">
                    <EditInput value={"Ananse The Jack"} label="Book title:" />
                </div>

                <div className="mb-1 grid grid-cols-2 gap-2">
                    <EditInput value={"Justice Bediako"} label="Borrower Fullname:" />
                    <EditInput value={"055334543"} label="Borrower Phone Number:" />
                </div>

                <div className="mb-1 grid grid-cols-2 gap-2">
                    <EditInput value={"12th July 2024"} label="Borrow Date:" />
                    <EditInput value={"12th July 2024"} label="Due Date Date:" />

                </div>

            </div>

            <div>
                <Button content="Edit Book" handler={() => { }} />
            </div>
        </m.div>
    )
}



export const EditInput = ({ label, type, value }: { label: string, type?: string, value: any }) => {

    let input_style = "w-full border rounded text-xs px-1 py-1.5 outline-none text-gray-800"


    return <div>
        <label className="text-[0.6rem]">{label}</label>
        <input type={type ? type : "text"} value={value} className={input_style} />
    </div>
}