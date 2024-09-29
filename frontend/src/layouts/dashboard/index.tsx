import { Modal } from "@/components/modal";
import { SideNav } from "@/components/side-nav";
import { ModalContext } from "@/context/modal-context";
import { IModalContext } from "@/context/modal-context/types";
import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const DashboardLayout = () => {
    const { modal_state, modal_content } = useContext(ModalContext) as IModalContext;
    let auth_data = useSelector((state:any)=>state.auth.value);
    let navigate = useNavigate()

    useEffect(()=>{
        if(!auth_data.current_user){
            navigate('/admin/auth')
        }
    },[])
    
    return (
        <>
            {modal_state == true ? <Modal content={modal_content} /> : null}
            <div className="h-full bg-black text-stone-300 grid grid-cols-16">
                <div className="col-span-2 border-r border-stone-700">
                    <SideNav />
                </div>
                <div className="col-span-14 ">
                    <Outlet />
                </div>
            </div>
        </>
    )
}