import { useNavigate } from "react-router-dom"
import Header from "./Header"

export default function Login() {
    const navigate = useNavigate();
    return(
        <>
                <Header/>
        <div className="container mx-auto px-4">            
                
                <div className="mb-3">
                    <h1 className="text-base font-semibold">Already registered? login here</h1>
                </div>
                <div className="flex justify-center">
                    <div className="outline outline-2 outline-offset-1 h-[200px] w-[500px] mr-2 bg-blue-700">
                        <h1 className="text-base flex justify-end">Email</h1>
                        <h1 className="text-base flex justify-end">Password</h1>
                    </div>
                    <div className="outline outline-2 outline-offset-1 h-[200px] w-[500px]">
                        <form action="" onSubmit={() => navigate("/register")}>
                            <input type="email" className="outline outline-1 h-[25px] w-[200px] flex justify-start" required/>
                            <input type="password" className="outline outline-1 h-[25px] w-[200px] flex justify-start" required/>
                        
                            <div className="flex justify-start">
                                <input type="checkbox" name="checkbox" id="checkbox" className="mr-2" /> 
                                <h1 className="text-base">Save my Email and password</h1>
                            </div>

                            <div className="flex justify-start">
                                <button className="outline outline-1 mr-2" type="submit">Continue&gt;&gt;</button>
                                <button className="outline outline-1">Reset</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
        </div>
        
        </>
    )


}