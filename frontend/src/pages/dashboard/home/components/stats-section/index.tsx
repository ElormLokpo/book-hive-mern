import { ProgressBar } from "../progess-bar"

const StateComponent = () => {
    let rand_num = Math.ceil(10 + Math.random() * 90)
    return (
        <div className="mb-3">
            <p className="text-xs mb-2">Nancy Drew Vol,2</p>
            <ProgressBar size="sm" percentage={rand_num} />
        </div>
    )
}

export const StatsSection = () => {
    return (
        <div className=" grid grid-cols-2 gap-3">
            <div className="border rounded p-4">
                <p className="text-sm font-semibold mb-3">Most Borrowed Books</p>

                {
                    [1, 1, 1, 1].map((item, index) => <StateComponent key={index} />)
                }

            </div>

            <div className="border rounded p-4">
                <p className="text-sm font-semibold mb-3">Least Borrowed Books</p>

                {
                    [1, 1, 1, 1].map((item, index) => <StateComponent key={index} />)
                }

            </div>
        </div>
    )
}