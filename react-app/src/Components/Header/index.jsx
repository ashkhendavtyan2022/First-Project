import React from "react";
import "./style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()

    // const [menu, setMenu] = useState([
    //     {
    //         title: "Home",
    //         path: "/"
    //     },
    //     {
    //         title: "Form",
    //         path: "/form"
    //     },
    //     {
    //         title: "Handle",
    //         path: "/input"
    //     }
    // ])

    const Navigation = () => {
        navigate("/form")
    }
 
    return <div>
        {console.log(location)}
        <ul>
            {/* OPtion 2 for Navlink <li><NavLink classname={location.pathname === "/" ? "active" : null} to="/">Home</NavLink></li> */}
            <li><NavLink classname={({isActive}) => isActive ? "active" : null} to="/">Home</NavLink></li>
            <li><NavLink classname={({isActive}) => isActive ? "active" : null} to="/form">Form</NavLink></li>
            <li><NavLink classname={({isActive}) => isActive ? "active" : null} to="/input">Handle</NavLink></li>
            <li><NavLink classname={({isActive}) => isActive ? "active" : null} to="/hook">Hook</NavLink> </li>
            <li><NavLink classname={({isActive}) => isActive ? "active" : null} to="/functional">Functional</NavLink> </li>
            <li><NavLink classname={({isActive}) => isActive ? "active" : null} to="/memo">Memo</NavLink> </li>


            <button onClick={Navigation}>Navigate Form</button>

            {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/form">Form</Link></li>
            <li><Link to="/input">Handle</Link></li> */}
        </ul>
    </div>
}

export default Header;