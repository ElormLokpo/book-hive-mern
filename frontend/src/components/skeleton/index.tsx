export const TableSkeleton = () => {
    return (
        <div className="w-full mb-2">


            <div role="status" className="w-full p-4 space-y-4 border border-stone-700 divide-y divide-stone-200 rounded shadow animate-pulse">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="h-2.5 bg-stone-600 rounded-full w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-stone-400 rounded-full"></div>
                    </div>
                    <div className="h-2.5 bg-stone-600 rounded-full w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-stone-600 rounded-full w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-stone-400 rounded-full"></div>
                    </div>
                    <div className="h-2.5 bg-stone-300 rounded-full w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-stone-600 rounded-full w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-stone-400 rounded-full"></div>
                    </div>
                    <div className="h-2.5 bg-stone-300 rounded-full w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-stone-600 rounded-full w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-stone-400 rounded-full"></div>
                    </div>
                    <div className="h-2.5 bg-stone-300 rounded-full w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-stone-600 rounded-full  w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-stone-400 rounded-full"></div>
                    </div>
                    <div className="h-2.5 bg-stone-300 rounded-full w-12"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>



        </div>
    )
}