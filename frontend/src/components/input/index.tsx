import { CiSearch } from "react-icons/ci";
import { IProps } from "./types";

export const Input = ({ label, placeholder, type, name, inputChange }: IProps) => {
    let input_style;
    let def_style_sm = "w-full border bg-stone-800 border-stone-700 rounded text-xs px-1 py-1.5 outline-none text-gray-200"
    input_style = def_style_sm

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        inputChange(e.target.name, e.target.value)
    }

    return <div>
        <label className="text-[0.6rem]">{label}</label>
        <input name={name} type={type ? type : "text"} placeholder={placeholder} className={input_style} onChange={handleChange} />
    </div>
}

export const SearchInput = () => {
    return <div className="text-xs w-[20rem] bg-black flex items-center gap-1 border border-stone-700 px-2 py-1.5 rounded"> <CiSearch /> <input type="text" className="w-full bg-black outline-none" placeholder="Search Item" /></div>
}