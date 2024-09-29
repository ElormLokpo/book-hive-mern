import { SlideInTop } from "@/animations"
import { Button, ModalCloseButton } from "@/components/button"
import { IBookRequest } from "@/services/api-types/book.types"
import { useUpdateBookMutation } from "@/services/api/book"
import { motion as m } from "framer-motion"
import { useEffect, useState } from "react"
import { toast } from "sonner"


export const EditBook = ({ row }: { row: any }) => {
    let input_style = "w-full border border-stone-700 bg-stone-800 rounded text-xs px-1 py-1.5 outline-none text-gray-200"
    const [bookData, setBookData] = useState<IBookRequest>()
    const [UpdateBook] = useUpdateBookMutation();
    useEffect(() => {

        setBookData(row as IBookRequest)
    }, [row])
    const handleClickForm = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation()
    }

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setBookData((prev:any)=>{
            return {...prev, [e.target.name]: e.target.value }
        })
    }

    const handleEditSubmit = async()=>{
        console.log(bookData?._id)
        let response = await UpdateBook({id:bookData?._id,data:bookData})
        if(response.data?.success == true){
            location.reload();
        }else{
            toast.error(response.data?.message)
        }
    }

    return (
        <m.div
            variants={SlideInTop}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-black border border-stone-700 text-gray-200 rounded p-3 w-[30rem]"
            onClick={(e) => handleClickForm(e)}
        >
            <div className="flex justify-between mb-2">
                <p className="font-semibold text-sm">Edit Book</p>
                <ModalCloseButton />
            </div>


            <div className="mb-4">
                <div className="mb-1">
                    <div>
                        <label className="text-[0.6rem]">Book Title:</label>
                        <input onChange={handleInputChange} type="text" name="title" value={bookData?.title} className={input_style} />
                    </div>

                </div>

                <div className="mb-1 grid grid-cols-2 gap-2">
                    <div>
                        <label className="text-[0.6rem]">Book Author:</label>
                        <input onChange={handleInputChange} type="text" name="author" value={bookData?.author} className={input_style} />
                    </div>
                    <div>
                        <label className="text-[0.6rem]">Isbn:</label>
                        <input onChange={handleInputChange} type="text"name="isbn" value={bookData?.isbn} className={input_style} />
                    </div>

                </div>

                <div className="mb-1">
                    <div>
                        <label className="text-[0.6rem]">Copies:</label>
                        <input onChange={handleInputChange} type="number" name="total_copies" value={bookData?.total_copies} className={input_style} />
                    </div>
                </div>

            </div>

            <div>
                <Button content="Edit Book" handler={handleEditSubmit} />
            </div>
        </m.div>
    )
}


