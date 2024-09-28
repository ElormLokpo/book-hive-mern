import { Button } from "@/components/button"
import { BiRefresh } from "react-icons/bi";
import { CardSection } from "./components/card";
import { StatsSection } from "./components/stats-section";
import { useGetAllBooksQuery } from "@/services/api/book";
import { TableSkeleton } from "@/components/skeleton";
import { BookTable } from "../books/components/table";

export const HomePage = () => {
    const { data, isLoading } = useGetAllBooksQuery(undefined)

    return (
        <div className="px-12 py-7">
            <div className="flex justify-between items-end mb-3">
                <div>
                    <p className="font-bold">Library Overview</p>
                    <p className="font-light">General overview of library operations.</p>
                </div>

                <div>
                    <Button content="Refresh" icon={<BiRefresh />} handler={() => { }} />
                </div>
            </div>

            <div className="mb-5">
                <CardSection />
            </div>

            <div className="mb-10">
                <StatsSection />
            </div>

            <div>
                <p className="font-semibold text-stone-300 mb-1">Top Books</p>
            </div>
            {isLoading ? <div><TableSkeleton /> </div> : <div>
                {Array.isArray(data?.data) ? <BookTable data={data.data} /> : <p className="text-sm">Something went wrong. Kindly refresh page.</p>}
            </div>}


        </div>
    )
}