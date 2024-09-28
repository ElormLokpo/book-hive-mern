import { ReactElement } from "react";
import { RiBook3Fill } from "react-icons/ri";
import { MdOutlineSpaceDashboard, MdPlaylistAddCheckCircle } from "react-icons/md";
import { LuBookUp2 } from "react-icons/lu";
import { HiOutlineLogout } from "react-icons/hi";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { NavLink } from "react-router-dom";


const SideNavItem = ({ icon, content, to }: { icon: ReactElement, content: string,to:string }) => {
    return <NavLink to={to} className="mb-4 text-sm hover:bg-stone-700 py-2 px-2 hover:px-1 transition-all rounded flex gap-1 items-center">{icon && icon} {content} </NavLink>
}

export const SideNav = () => {
    return (
        <div className="p-2 bg-stone-900 text-stone-300 nav-fixed flex flex-col h-full justify-between">
            <div>
                <div className="flex items-center gap-2 mb-7">
                    <div>
                        <div className="text-xs bg-gray-700 rounded p-2 text-white">
                            <RiBook3Fill />
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-sm">Lbry-Mngmt</p>
                    </div>
                </div>

                <div>
                    {/* <p className="mb-1 text-xs font-semibold">Library Operations</p> */}
                    <SideNavItem to="/admin/dashboard" icon={<MdOutlineSpaceDashboard />} content="Overview" />
                    <SideNavItem to="/admin/dashboard/books" icon={<MdPlaylistAddCheckCircle />} content="Book Operations" />
                    <SideNavItem to="/admin/dashboard/borrow-records" icon={<HiClipboardDocumentList />} content="Borrow Records" />

                </div>
            </div>

            <div>
                <button className="text-sm flex gap-2 items-center"><HiOutlineLogout /> Logout</button>
            </div>

        </div>
    )
}