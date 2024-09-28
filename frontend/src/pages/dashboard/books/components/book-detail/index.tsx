import { SlideInTop } from "@/animations"
import { ModalCloseButton } from "@/components/button"

import { motion as m } from "framer-motion"
import { DisplayCategories } from "../category"


export const BookDetail = ({row}:{row:any}) => {
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
                <p className="font-semibold text-sm">Book Detail</p>
                <ModalCloseButton />
            </div>


            <div className="mb-4">
                <div className="mb-2">
                    <div>
                        <p className="text-[0.6rem]">Book Title:</p>
                        <p className={p_style}> {row.title} </p>
                    </div>
                </div>

                <div className="mb-2 grid grid-cols-2 gap-2">
                    <div>
                        <p className="text-[0.6rem]">Author:</p>
                        <p className={p_style}> {row.author}</p>
                    </div>
                    <div>
                        <p className="text-[0.6rem]">ISBN:</p>
                        <p className={p_style}> {row.isbn} </p>
                    </div>
                </div>

                <div className="mb-3">
                    <div>
                        <p className="text-[0.6rem]">Location:</p>
                        <p className={p_style}> {row.location} </p>
                    </div>
                </div>

                <div className="mb-2 grid grid-cols-3 gap-2">
                    <div>
                        <p className="text-[0.6rem]">Total Copies:</p>
                        <p className={p_style}> {row.total_copies}</p>
                    </div>
                    <div>
                        <p className="text-[0.6rem]">Copies Borrowed:</p>
                        <p className={p_style}> {row.copies_borrowed } </p>
                    </div>
                    <div>
                        <p className="text-[0.6rem]">Current Copies:</p>
                        <p className={p_style}>{row.current_copies ? row.current_copies : 0}</p>
                    </div>
                   

                </div>

                <div className="mb-2">
                    <p className="text-[0.6rem] mb-1">Categories:</p>
                    <DisplayCategories categories={row.categories} />
                </div>

            </div>


        </m.div>
    )
}

