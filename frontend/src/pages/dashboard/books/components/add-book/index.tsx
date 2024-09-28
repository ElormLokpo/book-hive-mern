import { useContext, useState } from "react"
import { SlideInTop } from "@/animations"
import { Button, ModalCloseButton } from "@/components/button"
import { Input } from "@/components/input"
import { motion as m } from "framer-motion"
import { AddCategories } from "../category"
import { IBookRequest } from "@/services/api-types/book.types"
import { useAddBookMutation } from "@/services/api/book"
import { toast } from "sonner"
import { ModalContext } from "@/context/modal-context"
import { IModalContext } from "@/context/modal-context/types"

export const AddBook = ({ triggerToast }: { triggerToast: (message: string) => void }) => {
    const [bookData, setBookData] = useState<IBookRequest>()
    const [AddBook, { isLoading }] = useAddBookMutation()
    const { SetModalState } = useContext(ModalContext) as IModalContext

    const handleClickForm = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation()
    }

    const handleInputChange = (key: any, value: any) => {
        setBookData((prev: any) => {
            return { ...prev, [key]: value }
        })
    }

    const handleSubmit = async () => {
        let response = await AddBook(bookData as IBookRequest);

        if (response.data?.success == true) {
            triggerToast("Book added successfully")
            console.log(response)
            SetModalState(false)
        }else{
            toast.error(response.data?.message)
        }
    }

    const handleCategories = (categories: string[]) => {
        setBookData((prev: any) => {
            return { ...prev, categories }
        })
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
                <p className="font-semibold text-sm">Add Book</p>
                <ModalCloseButton />
            </div>


            <div className="mb-4">
                <div className="mb-1">
                    <Input name="title" inputChange={handleInputChange} label="Book title:" />
                </div>

                <div className="mb-1 grid grid-cols-2 gap-2">
                    <Input name="author" inputChange={handleInputChange} label="Book Author:" />
                    <Input name="isbn" inputChange={handleInputChange} label="ISBN:" />
                </div>

                <div className="mb-1">
                    <Input name="location" inputChange={handleInputChange} label="Location:" />
                </div>


                <div className="mb-1">
                    <AddCategories setCategoriesArr={handleCategories} />
                </div>

                <div className="mb-1">
                    <Input name="total_copies" inputChange={handleInputChange} label="Total Copies:" type="number" />

                </div>

            </div>

            <div>
                <Button content="Add Book" handler={handleSubmit} isLoading={isLoading} loading_text="Adding Book..." />
            </div>
        </m.div>
    )
}