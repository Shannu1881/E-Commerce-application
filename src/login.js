import React, {useState} from 'react';
import axios from 'axios';

const Login  = () =>{
    const[username, pickUsername] = useState("");
    const[pass, pickPassword] = useState("");
    const[msg, updateMsg] = useState("Enter Login Details");
    const goLogin = () =>{
        if(username=="" || pass==""){
            updateMsg("Empty Username or Password");
        }else{
            updateMsg("Please wait Processing....");
            axios.get("http://localhost:1234/account")
            .then(response=>{
                var semail = response.data[0].email;
                var spass = response.data[0].password;
                if(username == semail && pass == spass){
                    updateMsg("Success : Please wait Redirecting....");
                    localStorage.setItem("adminid", response.data[0].id);
                    localStorage.setItem("name", response.data[0].name);
                    window.location.href="http://localhost:3000/#/";
                    window.location.reload();
                    // Reload after login admin dashboard will come
                }else{
                    updateMsg("Fail : Invalid or Not Exists !");
                }
            })
        }
    }

    return(
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-4 offset-4 p-3 border'>
                    <h1 className="text-center text-primary"> Admin Login </h1>
                    <p> {msg} </p>
                    <div className="mb-3">
                        <label>e-Mail Id</label>
                        <input type="text" className='form-control'
                        onChange={obj=>pickUsername(obj.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input type="password" className='form-control'
                        onChange={obj=>pickPassword(obj.target.value)}/>
                    </div>
                    <div className='text-center'>
                        <button className="btn btn-primary" onClick={goLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;