import React from 'react';
import classes from './Contacts.module.css';
import ContactsList from "./ContactsList/ContactsList";
import AddContact from "./AddContact/AddContact";

const Contacts = ({contacts, isFetching, ...props}) => {

    return (
        <div className={classes.contact_block}>
            <div className={classes.search_block}>
                Search
            </div>
            <AddContact />
            <div className={classes.contactsList_block}>
                {
                    contacts.map((contact, index) => <ContactsList
                        key={index}
                        contact={contact}
                    />)
                }
            </div>
        </div>
    );
};

export default Contacts;