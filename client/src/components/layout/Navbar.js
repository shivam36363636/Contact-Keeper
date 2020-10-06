import React ,{Fragment, useContext}from 'react'
import {Link} from "react-router-dom"
import AuthContext from "../../context/auth/authContext"
import ContactContext from "../../context/contact/contactContext"

const  Navbar = () =>{
    const authContext = useContext(AuthContext)
    const contactContext = useContext(ContactContext)
    const {isAuthenticated,logout,user}= authContext
    const {clearContacts} = contactContext
    const onClick = ()=>{
        logout();
        clearContacts()
    }
    const authLink = (
        <Fragment>
            <li>Hello {user && user.name}</li>
            <li>
                <a onClick={onClick}><i className="fa fa-sign-out"/><span className="hide-sm">Logout</span></a>
            </li>
        </Fragment>
    )
    const guestLink = (
        <Fragment>
             <li>
                    <Link to="/register" >Register</Link>
                </li>
                <li>
                    <Link to="/login" >Login</Link>
                </li>
        </Fragment>
    )
    return (
        <div className="navbar bg-primary">
            <h1>
                <i className="fa fa-address-book"/>
                 Contact Keeper
            </h1>
            <ul>
               {isAuthenticated? authLink:guestLink}
            </ul>
        </div>
    )
}

export default Navbar
