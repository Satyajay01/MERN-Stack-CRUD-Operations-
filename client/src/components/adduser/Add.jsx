import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from "react-hot-toast";

const Add = () => {


  // Handle input box 
      const users ={
        fname: "",
        lname: "",
        email: "",
        password: ""
      }
      const [user, setUser] = useState(users);
      const inputHandler = (e) =>{
        const {name,value}= e.target;
        setUser({...user, [name]:value});
        console.log(user);
    }

        // send data from the database and redirect users page
        const navigate = useNavigate();

        const submitForm = async(e)=>{
          e.preventDefault();
          await axios.post("http://localhost:8000/api/create", user)
          .then((res)=>{
            console.log(res);
            toast.success("Signup Successful");
            navigate("/");
          }).catch(error=>toast.error("Error: " + error.response.data.message));
        }

  return (
    <div>
        <Link to={'/'}>Back</Link>
        <h3>Add new user </h3>
        <form onSubmit={submitForm}>
            <label>First Name: </label>
            <input type="text" onChange={inputHandler} name="fname" id="fname" placeholder='First name' /> <br /> <br />

            <label>Last Name: </label>
            <input type="text" onChange={inputHandler} name="lname" id="lname" placeholder='Last name' /><br /> <br />

            <label>Email: </label>
            <input type="email" onChange={inputHandler} name="email" id="email" placeholder='Email' /><br /> <br />

            <label>Password: </label>
            <input type="password" onChange={inputHandler} name="password" id="password" placeholder='password' /> <br /> <br />

            <div>
                <button type="submit">Add User</button>
            </div>
        </form>
    </div>
  )
}

export default Add