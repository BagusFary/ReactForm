import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function CreateAccount() {

  const [name,setName] = useState('');
  const [email, setEmail] = useState('');




  function handleClick(event)
  {
    event.preventDefault()
    alert(`Selamat akun anda sudah terdaftarkan!! ${email}`)
  }


  const navigate = useNavigate();
  return (
    <>
        <div className="container mx-auto px-4">            
                <form action="" onSubmit={handleClick}>
                <div className="mb-3">
                    <h1 className="text-base font-semibold">Create Account-Register</h1>
                </div>
                <div className="flex justify-center">
                    <div className="outline outline-2 outline-offset-1 h-[350px] w-[500px] mr-2 bg-blue-700">
                        <h1 className="text-base flex justify-end">Your Name</h1>
                        <h1 className="text-base flex justify-end">E-mail ID</h1>
                        <h1 className="text-base flex justify-end">Alternate E-mail ID</h1>
                        <br />
                        <h1 className="text-base flex justify-end">Your Phone</h1>
                        <h1 className="text-base flex justify-end">Mobile Phone</h1>
                        <h1 className="text-base flex justify-end">Your Portal Address</h1>
                        <br />
                        <br />
                        <h1 className="text-base flex justify-end">Country</h1>
                        <h1 className="text-base flex justify-end">Password</h1>
                        <h1 className="text-base flex justify-end">Re-enter Password</h1>
                    </div>
                    <div className="outline outline-2 outline-offset-1 h-[350px] w-[600px]">
                        <input type="text" className="outline outline-1 flex justify-start" value={name} onChange={(event) => {setName(event.target.value)}}/>
                        <input type="email" className="outline outline-1 flex justify-start" value={email} onChange={(event) => {setEmail(event.target.value )}}/>
                        <input type="text" className="outline outline-1 flex justify-start" />
                        <h1 className="text-base flex justify-start">Country code---------------------City code-----------------Phone number</h1>
                        <div className="flex justify-start">
                            <input type="text" className="outline outline-1 " />
                            <input type="text" className="outline outline-1 " />
                            <input type="text" className="outline outline-1 " />
                        </div>
                        <input type="text" className="outline outline-1 flex justify-start" />
                       <textarea name="address" id="addresss" cols="20" rows="3" className="outline outline-1"></textarea>
                       <div className="flex justify-start">
                        <select name="cars" id="cars" className="outline outline-1">
                          <option value="">-------Select One------</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Japan">Japan</option>
                          <option value="Russia">Russia</option>
                        </select>
                       </div>
                       <input type="password" className="outline outline-1 flex justify-start" />
                       <input type="password" className="outline outline-1 flex justify-start" />
                        <div className="flex justify-start">
                            <input type="checkbox" name="checkbox" id="checkbox" className="mr-2" /> 
                            <h1 className="text-base">I accept the&nbsp;</h1>
                            <a href="" className="text-base underline text-blue-700">Terms of use</a>
                        </div>
                        <div className="flex -justify-start">
                            <button className="outline outline-1 mr-2" type="submit">Continue&gt;&gt;</button>
                            <button className="outline outline-1">Reset</button>
                        </div>
                    </div>
                    
                </div>
                </form>
        </div>
    </>
  );
}



