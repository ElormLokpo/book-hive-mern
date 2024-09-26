import { FaBookOpen } from "react-icons/fa";

export const HomeCard = () => {
    let rand_num = Math.ceil(10 + Math.random() * 90)

    return <div className="border rounded p-3">
        <div className="flex justify-between mb-6">
            <div>
                <p className="font-semibold text-[0.6rem]">Total sessions</p>
                <p className="font-bold text-xl flex gap-3 items-end">523 <span className="text-[0.7rem] font-normal text-emerald-500">{rand_num}%</span></p>
            </div>
            <div>
                <div className="text-xs p-2 text-white bg-gray-900 rounded flex items-center justify-center">
                    <FaBookOpen />
                </div>
            </div>
        </div>
    </div>
}


export const CardSection = ()=>{
    return (
        <div className="grid grid-cols-4 gap-3">
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            


        </div>
    )
}