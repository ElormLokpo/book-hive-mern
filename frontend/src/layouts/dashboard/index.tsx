import { Outlet } from "react-router-dom";

export const DashboardLayout = ()=>{
    return(
        <div className="h-full grid grid-cols-14">
            <div className="col-span-2 border-r">
                a
            </div>
            <div className="col-span-12">
                <Outlet />
            </div>
        </div>
    )
}