import { ReactElement } from "react";
import { FaBookOpen } from "react-icons/fa";
import { IoRecordingSharp } from "react-icons/io5";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaGoogleScholar } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { useGetAllBooksQuery } from "@/services/api/book";
import { useGetAllBorrowRecordsQuery } from "@/services/api/borrow-record";


export const HomeCard = ({title, icon, count}:{title:string, icon:ReactElement, count:number}) => {
    let rand_num = Math.ceil(10 + Math.random() * 90)

    return <div className="border text-stone-300 border-stone-700 rounded p-3">
        <div className="flex justify-between mb-6">
            <div>
                <p className="font-semibold text-[0.6rem]">{title}</p>
                <p className="font-bold text-xl flex gap-3 items-end">{count} <span className="text-[0.7rem] font-normal text-emerald-500">{rand_num}% since last year</span></p>
            </div>
            <div>
                <div className="text-xs p-2 text-white bg-stone-600 rounded flex items-center justify-center">
                   {icon}
                </div>
            </div>
        </div>
    </div>
}


export const CardSection = ()=>{
    const [booksCount, setBooksCount] = useState<number>(0)
    const [recordsCount, setRecordsCount] = useState<number>(0)

    const {data:bookData} = useGetAllBooksQuery(undefined);
    const {data:borrowRecordData} = useGetAllBorrowRecordsQuery(undefined);


    useEffect(()=>{
        if(Array.isArray(bookData?.data) && Array.isArray(borrowRecordData?.data)){
            setBooksCount(bookData.data.length)
            setRecordsCount(borrowRecordData.data.length)

        }
    },[bookData, borrowRecordData])

    return (
        <div className="grid grid-cols-4 gap-3">
            <HomeCard title="Total Books" icon={ <FaBookOpen />} count={booksCount}/>
            <HomeCard title="Total Records" icon={<IoRecordingSharp />} count={recordsCount}/>
            <HomeCard title="Library Staff" icon={<FaGoogleScholar  />} count={3}/>
            <HomeCard title="Users" icon={<PiUsersThreeFill />}  count={20}/>
            


        </div>
    )
}