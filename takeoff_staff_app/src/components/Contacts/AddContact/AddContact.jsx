import React, {useEffect, useState} from 'react';
import classes from "./AddContact.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {maxLength24, minLength4} from "../../../utils/validators/validators";
import {addContactThunk} from "../../../redux/contacts_reducer";
import {connect} from "react-redux";

const AddContactForm = (props) => {
    const {handleSubmit} = props,
            error = props.error;

    return (
        <form onSubmit={handleSubmit}>
            <p className={classes.form_summary_error}>{error}</p>
            {/*<label htmlFor="addPhoto">Add Photo</label>*/}
            {/*<Field component={Input}*/}
            {/*    type="file"*/}
            {/*    name="addPhoto"*/}
            {/*/>*/}

            <Field component={Input}
                type="text"
                name="addName"
                label="Add Name"
                validate={[maxLength24, minLength4]}
            />
            <Field component={Input}
                type="phone"
                name="addPhone"
                label="Add Phone"
                validate={[maxLength24, minLength4]}
            />
            <Field component={Input}
                type="email"
                name="addEmail"
                label="Add Email"
            />

            <button type={"submit"} className={classes.addContact}>Add contact</button>
        </form>
    )
}

const AddContactReduxForm = reduxForm({form: 'AddContact'})(AddContactForm);

const AddContact = (props) => {
    const addContactThunk = props.addContactThunk;

    let [displayForm, setDisplayForm] = useState(false);
    const activateDisplayForm = () => {
        setDisplayForm(true)
    }
    const deactivateDisplayForm = () => {
        setDisplayForm(false)
    }
    useEffect(() => {
        setDisplayForm(displayForm)
    }, [displayForm])


    const onSubmit = (formData) => {
        addContactThunk(formData.addName, formData.addPhone, formData.addEmail);
    }

    return (
        <div className={classes.addContact_block}>
            { displayForm
                ? <button className={classes.addContact_btn} onClick={deactivateDisplayForm} >Close</button>
                : <button className={classes.addContact_btn} onClick={activateDisplayForm} >Add contact</button>
            }

            { displayForm &&
                <div className={classes.addContact_form}>
                    <AddContactReduxForm onSubmit={onSubmit} />
                </div>
            }
        </div>
    );
}


export default connect(null, {addContactThunk})(AddContact);