import React from 'react';
import classes from './ContactsList.module.css';

const ContactsList = ({contact}) => {

    return (
        <ul className={classes.contacts_list}>
            <li className={classes.contact}>
                <img
                    className={classes.contact_img}
                    src={contact.image}
                    alt={contact.name}
                />
                <div className={classes.contact_info}>
                    <div className={classes.contact_name}><span>Name: </span> {contact.name} </div>
                    <div className={classes.contact_number}><span>Phone: </span> {contact.phoneNumber} </div>
                    <div className={classes.contact_email}><span>Email: </span> {contact.email} </div>
                </div>
            </li>
        </ul>
    );
};

export default ContactsList;