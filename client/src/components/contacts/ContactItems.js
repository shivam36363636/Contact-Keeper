import React ,{useContext}from 'react'
import PropTypes from "prop-types"
import ContactContext from "../../context/contact/contactContext"

const ContactItems = ({contact}) => {
    const contactContext = useContext(ContactContext)
    const {deleteContact,setCurrent,clearCurrent} = contactContext
    const {name,_id,email,phone,type} = contact;
    const onDelete=()=>{
        deleteContact(_id);
        clearCurrent();
    }
    return (
        <div className="card bg-light">
            <h3 className="text-primary text-left">{name}{" "}
            <span style={{float: "right"}} className={'badge '+ (type === 'personal'?"badge-primary":"badge-success")}>
                {type.charAt(0).toUpperCase()+type.slice(1)}</span></h3>
            <ul>
                {email && (<li>
                    <i className="fa fa-envelope"/>  {email}
                    </li>)}
                {phone && (<li>
                    <i className="fa fa-phone-square"/>  {phone}
                    </li>)}
            </ul>
            <p>
                <button className="btn btn-dark btn-sm" onClick={()=>setCurrent(contact)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
            </p>
        </div>
    )
}
ContactItems.propTypes = {
    contact : PropTypes.object.isRequired,
}
export default ContactItems
