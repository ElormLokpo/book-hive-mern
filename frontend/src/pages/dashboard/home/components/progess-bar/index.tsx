export const ProgressBar = ({ percentage, size }: { percentage: number, size?: string }) => {
    let prg_style = size == "sm" ? "w-full bg-gray-200 rounded flex items-center gap-3 h-2" : "w-full bg-gray-200 rounded flex items-center gap-3 h-3"
    let br_style = size == "sm" ? "bg-gray-600 h-2 rounded" : "bg-gray-600 h-3 rounded"

    return (
        <div className={prg_style}>
            <div className={br_style} style={{ width: `${percentage}%` }}></div>
            {/* <p className="text-[0.6rem] text-gray-500">{percentage} %</p> */}
        </div>
    )
}