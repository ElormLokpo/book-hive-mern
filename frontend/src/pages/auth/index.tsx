import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { IAuthRequest } from "@/services/api-types/auth.types";
import { useLoginUserMutation } from "@/services/api/auth";
import { useState } from "react";
import { RiBook3Fill } from "react-icons/ri";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";


export const AuthPage = () => {
    const [authData, setAuthData] = useState<IAuthRequest>()
    const [LoginUser, { isLoading }] = useLoginUserMutation();
    const navigate = useNavigate();

    const handleChange = (key: any, value: any) => {
        setAuthData((prev: any) => {
            return { ...prev, [key]: value }
        })
    }

    const handleSubmit = async () => {
        const response = await LoginUser(authData as IAuthRequest);

        if (response.data?.success == true) {
            toast.success(response.data?.message);

            navigate("/admin/dashboard")
        } else {
            toast.error(response.data?.message)
        }


    }


    return (
        <>
            <Toaster />
            <div className="h-full flex flex-col bg-black text-stone-300 items-center justify-between p-10">
                <div className="p-2 w-[19rem] mt-[15rem]">

                    <p className="font-semibold">Sign In</p>

                    <div className=" mb-1">
                        <Input name="username" inputChange={handleChange} label="Username:" />
                    </div>
                    <div className=" mb-2">
                        <Input name="password" inputChange={handleChange} label="Password:" type="Password" />
                    </div>
                    <div className="mb-4">
                        <p className="text-[0.6rem] underline">Forgot password?</p>
                    </div>

                    <div className="w-full">
                        <Button isLoading={isLoading} loading_text="Logging In..." style_type="auth" content="Login" handler={handleSubmit} />
                    </div>

                </div>


                <div>
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div>
                                <div className="text-xs bg-gray-900 rounded p-2 text-white">
                                    <RiBook3Fill />
                                </div>
                            </div>
                            <div className="flex gap-1 item-center">
                                <p className="font-semibold text-sm">Lbry-Mngmt</p>

                            </div>
                        </div>

                    </div>
                    <div className="flex items-center justify-center">
                        <p className="text-[0.6rem]">Github: ElormLokpo</p>
                    </div>
                </div>
            </div>
        </>
    )
}