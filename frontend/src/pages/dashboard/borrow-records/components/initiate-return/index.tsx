import { SlideInTop } from "@/animations"
import { Button, ModalCloseButton } from "@/components/button"
import { Input } from "@/components/input"
import { motion as m } from "framer-motion"


export const InitiateReturnBook = () => {

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
                <p className="font-semibold text-sm">Initiate Return Book</p>
                <ModalCloseButton />
            </div>


            <div className="mb-4">
                <div className="mb-1">
                    <Input label="Book title:" />
                </div>

                <div className="mb-1">
                    <Input label="Status:" />
                    
                </div>

                <div className="mb-1 grid grid-cols-2 gap-2">
                    <Input label="Borrow Date:" />
                    <Input label="Due Date Date:" />

                </div>
                <div className="">
                    <Input label="Returned Date:" />
                </div>
                <div className="">
                    <Input label="Fine:" />
                </div>

            </div>

            <div>
                <Button content="Initiate Return" handler={() => { }} />
            </div>
        </m.div>
    )
}



