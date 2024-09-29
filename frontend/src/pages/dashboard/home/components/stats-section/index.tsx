import { useGetAllBooksQuery } from "@/services/api/book"
import { ProgressBar } from "../progess-bar"
import { useEffect, useState } from "react"
import { da } from "date-fns/locale"

const StateComponent = ({title}:{title:string}) => {
    let rand_num = Math.ceil(10 + Math.random() * 90)
    return (
        <div className="mb-3">
            <p className="text-xs mb-2">{title}</p>
            <ProgressBar size="sm" percentage={rand_num} />
        </div>
    )
}

export const StatsSection = () => {
    const {data, isLoading} = useGetAllBooksQuery(undefined)
    const [firstBookDataArr, setFirstBookDataArr] = useState<any[]>([])
    const [lastBookDataArr,setLastBookDataArr] = useState<any[]>([])
    useEffect(()=>{
        if(Array.isArray(data?.data)){
            setFirstBookDataArr(data.data.slice(0,4))
            setLastBookDataArr(data.data.slice(-4))
        }
      
    },[data])


    return (
        <div className=" grid grid-cols-2 gap-3">
            <div className="border border-stone-700 rounded p-4">
                <p className="text-sm font-semibold mb-3">Most Borrowed Books</p>

                {
                    firstBookDataArr.map((item, index) => <StateComponent key={index} title={item.title} />)
                }

            </div>

            <div className="border border-stone-700 rounded p-4">
                <p className="text-sm font-semibold mb-3">Least Borrowed Books</p>

                {
                    lastBookDataArr.map((item, index) => <StateComponent key={index} title={item.title} />)
                }

            </div>
        </div>
    )
}