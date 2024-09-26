import { IProps } from "./types";


export const Button = ({ content, handler, style_type, icon }: IProps) => {
    let btn_style;
    let def_style_sm = "text-xs flex gap-1 items-center bg-gray-900 text-white py-1.5 px-3 rounded"

    switch (style_type) {
        case "outline-sm":
            btn_style = "text-xs flex border-gray-900 gap-1 items-center text-gray-900 border border-2 py-1.5 px-3 rounded";
            break;
        default:
            btn_style = def_style_sm;
    }
    return <button className={btn_style} onClick={handler}>{icon && icon}{content}</button>
}