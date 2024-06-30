import React from 'react'
import { Link } from 'react-router-dom'

const Add = () => {
  return (
    <div>
        <Link to={'/'}>Back</Link>
        <h3>Add new user </h3>
        <form>
            <label htmlFor="">First Name: </label>
            <input type="text" name="fname" id="fname" placeholder='First name' /> <br /> <br />

            <label htmlFor="">Last Name: </label>
            <input type="text" name="lname" id="lname" placeholder='Last name' /><br /> <br />

            <label htmlFor="">Email: </label>
            <input type="email" name="email" id="email" placeholder='Email' /><br /> <br />

            <label htmlFor="">Password: </label>
            <input type="password" name="password" id="password" placeholder='password' /> <br /> <br />

            <div>
                <button type="submit">Add User</button>
            </div>
        </form>
    </div>
  )
}

export default Add