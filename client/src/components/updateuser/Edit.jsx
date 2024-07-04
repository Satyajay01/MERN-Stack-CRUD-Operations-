import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from "axios"

const Edit = () => {

  const {id}= useParams(); // fatch ID from the URL

  const users = {
    fname: "",
    lname: "",
    email: ""
  }
  const [user, setUser] = useState(users);

  const inputChangeHandler = (e) =>{
    const {name, value} = e.target;
    setUser({...user, [name]: value});
  }

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/getone/${id}`)
    .then((res)=>{
      console.log(res);
      setUser(res.data);

    }).catch((error)=>{
      console.log(error);
    })
  },[id])

  return (
    <div>
    <Link to={'/'}>Back</Link>
    <h3>Update new user </h3>
    <form>
        <label htmlFor="">First Name: </label>
        <input type="text" onChange={inputChangeHandler} value={user.fname} name="fname" id="fname" placeholder='First name' /> <br /> <br />

        <label htmlFor="">Last Name: </label>
        <input type="text" onChange={inputChangeHandler} value={user.lname} name="lname" id="lname" placeholder='Last name' /><br /> <br />

        <label htmlFor="">Email: </label>
        <input type="email" onChange={inputChangeHandler} value={user.email} name="email" id="email" placeholder='Email' /><br /> <br />


        <div>
            <button type="submit">Update User</button>
        </div>
    </form>
</div>
  )
}

export default Edit