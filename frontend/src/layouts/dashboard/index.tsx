import { Modal } from "@/components/modal";
import { SideNav } from "@/components/side-nav";
import { ModalContext } from "@/context/modal-context";
import { IModalContext } from "@/context/modal-context/types";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
    const { modal_state, modal_content } = useContext(ModalContext) as IModalContext;
    return (
        <>
            {modal_state == true ? <Modal content={modal_content} /> : null}
            <div className="h-full grid grid-cols-14">
                <div className="col-span-2 border-r">
                    <SideNav />
                </div>
                <div className="col-span-12">
                    <Outlet />
                </div>
            </div>
        </>
    )
}