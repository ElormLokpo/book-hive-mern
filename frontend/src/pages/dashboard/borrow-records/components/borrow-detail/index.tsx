import { SlideInTop } from "@/animations"
import { ModalCloseButton } from "@/components/button"

import { motion as m } from "framer-motion"



export const BorrowRecordDetail = () => {
    let p_style = "w-full border rounded text-xs px-1 py-1 outline-none text-gray-800"

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
                <p className="font-semibold text-sm">Borrow Record</p>
                <ModalCloseButton />
            </div>


            <div className="mb-4">
                <div className="mb-2">
                    <div>
                        <p className="text-[0.6rem]">Book Title:</p>
                        <p className={p_style}> Ananse The Jack </p>
                    </div>
                </div>

                <div className="mb-2 grid grid-cols-2 gap-2">
                    <div>
                        <p className="text-[0.6rem]">Borrower Fullname:</p>
                        <p className={p_style}> Justice Bediako</p>
                    </div>
                    <div>
                        <p className="text-[0.6rem]">Borrower Phone Number:</p>
                        <p className={p_style}> 054343223</p>
                    </div>
                </div>

                <div className="mb-3 grid grid-cols-2 gap-2">
                    <div>
                        <p className="text-[0.6rem]">Borrow Date:</p>
                        <p className={p_style}> 12th July 2024 </p>
                    </div>
                    <div>
                        <p className="text-[0.6rem]">Due Date:</p>
                        <p className={p_style}> 15th July 2024 </p>
                    </div>
                </div>
                <div className="mb-2">
                    <div>
                        <p className="text-[0.6rem]">Returned Date:</p>
                        <p className={p_style}> 30th August 2024 </p>
                    </div>
                </div>
                <div className="mb-2">
                    <div>
                        <p className="text-[0.6rem]">Fine:</p>
                        <p className={p_style}> GHS 453</p>
                    </div>
                </div>

                <div className="mb-2">
                    <div>
                        <p className="text-[0.6rem]">Status:</p>
                        <p className={p_style}> Available</p>
                    </div>
                </div>


            </div>


        </m.div>
    )
}

