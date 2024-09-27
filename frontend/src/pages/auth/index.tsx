import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { RiBook3Fill } from "react-icons/ri";


export const AuthPage = () => {
    return (
        <div className="h-full flex flex-col items-center justify-between p-10">




            <div className="p-2 w-[19rem] mt-[15rem]">

                <p className="font-semibold">Sign In</p>

                <div className=" mb-1">
                    <Input label="Username:" />
                </div>
                <div className=" mb-2">
                    <Input label="Password:" type="Password" />
                </div>
                <div className="mb-4">
                    <p className="text-[0.6rem] underline">Forgot password?</p>
                </div>

                <div className="w-full">
                    <Button style_type="auth" content="Login" handler={() => { }} />
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
    )
}