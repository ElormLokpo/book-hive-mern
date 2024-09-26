import { CiSearch } from "react-icons/ci";

export const Input = () => {
    return <input type="text" />
}

export const SearchInput = () => {
    return <div className="text-xs w-[20rem] flex items-center gap-1 border px-2 rounded"> <CiSearch /> <input type="text" className="w-full outline-none" placeholder="Search Item"/></div>
}