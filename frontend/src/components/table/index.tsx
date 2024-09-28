import { IProps } from "./types"


export const Table = ({ headers, body }: IProps) => {
    return (
        <div className="rounded-lg border border-stone-700 shadow overflow-hidden">
            <table className=" rounded text-xs w-full">
                <thead>
                    <tr className="border-b border-stone-700">
                        {
                            headers.map((item, index) => <td className="py-2 px-2 font-semibold bg-stone-800" key={index}>{item}</td>)
                        }
                    </tr>
                </thead>

                <tbody>
                    {body}
                </tbody>
            </table>
        </div>
    )
}