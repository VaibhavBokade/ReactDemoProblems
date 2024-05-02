import React, { useState } from 'react'
import {useEffect} from 'react'
import './LoginFormStyle.css'
//import Image form
import Validation from './Validation'

function Login() {
    const [values, setValues] =useState({
      name: '',
      password: ''  
    })

    const [errors,  setError] = useState({})
    var e;
    function handleChange(e) {
        setValues({...values, [e.target.name]: e.target.values})
    }

    function handleSubmit(){
        e.preventDefault();
        setError(Validation(values));
    }

    useEffect(()=> {
        if(Object.keys(errors).length === 0 && (values.name !== "" && values.password !== ""))
        alert("Form Submitted");
    },[errors]
    )
    return(
        
        // <div className="imgcontainer">
        //     <img src={Image} alt="Avatar" className="avatar"/>

        // </div>
    <div className='warp'>
         <centre>
        <form onSubmit={handleSubmit}>
       
        <div className="container" style={{backgroundColor: "#f1f1f1"}} >
            <label><b>Username:  </b></label>
            <input type="text" placeholder="Enter Username" value={values.name} name="name" onChange={handleChange}/>
            {errors.name && <p style={{color: "red", fontSize: "13px"}}>{errors.name}</p>} <br/><br/>
            <lable><b>Password:  </b></lable>
            <input type="password" placeholder="Enter Password" value={values.password}  name="password" onChange={handleChange}/>
            {errors.password && <p style={{color: "red", fontSize: "13px"}}>{errors.password}</p>}

            <button type="submit">Login</button>
            <input type="checkbox" checked="checked"/> Remember me

            <div className="container">
                <button type="button" className="cancelbtn">Cancel</button>
                <span className="psw" >Forgot <a href="#">password?</a></span>
            </div>

        </div>
        
        </form>
        </centre>
    </div>
    )
}

export default Login;