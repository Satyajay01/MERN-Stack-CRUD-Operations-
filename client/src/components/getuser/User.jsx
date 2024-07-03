import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const User = () => {

    const [users, setUsers]= useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const res = await axios.get("http://localhost:8000/api/getall");
                setUsers(res.data);
            } catch (error) {
                console.log("Error: "+error);
            }
        }
        fetchData();
    },[])

    return (
    <div className='useTable'>
        <Link to={"/add"}>Add User</Link>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>S. No</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index)=>{
                        return(
                            <tr key={user._id}>
                            <td>{index+1}</td>
                            <td>{user.fname} {user.lname}</td>
                            <td>{user.email}</td>
                            <td>
                                <button>Delete</button>
                                <Link to={'/edit'}>Edit</Link>
                            </td>
                        </tr>
                            
                        )
                    })
                }

            </tbody>
        </table>
    </div>
    )
}

export default User