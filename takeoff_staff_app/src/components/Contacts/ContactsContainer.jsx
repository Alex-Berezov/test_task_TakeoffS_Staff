import React, {Component} from 'react';
import Contacts from "./Contacts";
import {requestContacts} from "../../redux/contacts_reducer";
import {connect} from "react-redux";
import {getContacts, getIsFetching} from "../../redux/contacts-selectors";
import Preloader from "../common/Preloader/Preloader";

class ContactsContainer extends Component {
    componentDidMount() {
        const {contacts} = this.props;
        this.props.getContacts(contacts);
    }

    render() {
        return <>
            { this.props.isFetching
                ? <Preloader />
                : <Contacts
                    contacts={this.props.contacts}
                    isFetching={this.props.isFetching}
                    //savePhoto={this.props.savePhoto}
                />
            }
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: getContacts(state),
        isFetching: getIsFetching(state),
    }
};

export default connect(mapStateToProps, {getContacts: requestContacts})(ContactsContainer);