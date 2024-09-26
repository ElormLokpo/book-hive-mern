import { Button } from "@/components/button"
import { BiRefresh } from "react-icons/bi";
import { CardSection } from "./components/card";
import { StatsSection } from "./components/stats-section";

export const HomePage = () => {
    return (
        <div className="px-12 py-7">
            <div className="flex justify-between items-end mb-3">
                <div>
                    <p className="font-bold">Library Overview</p>
                    <p className="font-light">General overview of library operations.</p>
                </div>

                <div>
                    <Button content="Refresh" icon={<BiRefresh />} handler={()=>{}}/>
                </div>
            </div>

            <div className="mb-5">
                <CardSection />
            </div>

            <div className="">
                <StatsSection />
            </div>


        </div>
    )
}