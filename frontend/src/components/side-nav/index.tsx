import { ReactElement } from "react";
import { RiBook3Fill } from "react-icons/ri";
import { MdOutlineSpaceDashboard, MdBackupTable } from "react-icons/md";
import { LuBookUp2 } from "react-icons/lu";
import { HiOutlineLogout } from "react-icons/hi";

const SideNavItem = ({ icon, content }: { icon: ReactElement, content: string }) => {
    return <div className="mb-2 text-sm hover:bg-gray-100 py-2 px-1 rounded flex gap-1 items-center">{icon && icon} {content} </div>
}

export const SideNav = () => {
    return (
        <div className="p-4 flex flex-col h-full justify-between">
            <div>
                <div className="flex items-center gap-2 mb-10">
                    <div>
                        <div className="text-xs bg-gray-900 rounded p-2 text-white">
                            <RiBook3Fill />
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-sm">Lbry-Mngmt</p>
                    </div>
                </div>

                <div>
                    <p className="mb-1 text-xs font-semibold">Library Operations</p>
                    <SideNavItem icon={<MdOutlineSpaceDashboard />} content="Overview" />
                    <SideNavItem icon={<LuBookUp2 />} content="Book Operations" />
                    <SideNavItem icon={<MdBackupTable />} content="Borrow Records" />

                </div>
            </div>

            <div>
                <SideNavItem icon={<HiOutlineLogout />} content="Logout" />
            </div>

        </div>
    )
}