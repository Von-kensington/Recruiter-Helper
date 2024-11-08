import React from 'react'
import "./index.css"

function NavBar() {
    return (
        <div className="navbar">
            <h1>Navbar</h1>
            <input type="text"></input>
            <div className="links">
                <a href="/home">home</a>
                <a href="/jobs">Jobs</a>
                <a href="/profile">Profile</a>
            </div>

        </div>
    )
}

export default NavBar