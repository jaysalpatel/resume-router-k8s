import React from 'react'
import "./App.css"
import { Link } from 'react-router-dom'

function Nav() {
    const navStyle = {
        color: 'grey'
    }

    return (
        <nav >
            <h3>Jaysal Patel</h3>
            <u1 className="nav-links">
                <Link style={navStyle} to="/Homepage">
                <li>Homepage</li>
                </Link>
                <Link style={navStyle} to="/Projects">
                <li>Projects</li>
                </Link>
                <Link style={navStyle} to="/Experience">
                    <li> Experience</li>
                </Link>
            </u1>
        </nav>
    )
}

export default Nav