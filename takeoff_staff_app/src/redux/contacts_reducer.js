import {contactsAPI} from "../api/api";

const SET_CONTACTS = 'SET_CONTACTS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_PHOTO_SUCCESS = 'SET_PHOTO_SUCCESS';
const ADD_NEW_CONTACT = 'ADD_NEW_CONTACT';

const initialState = {
    contacts: [],
    isFetching: true
};

const ContactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACTS: {
            return { ...state, contacts: action.contacts};
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching };
        }
        case SET_PHOTO_SUCCESS: {
            return { ...state, contacts: {...state.contacts, image: action.image} };
        }
        case ADD_NEW_CONTACT: {
            debugger
            let newName = {name: action.addName},
                newPhone = {phoneNumber: action.addPhone},
                newEmail = {email: action.addEmail};
                //newImage = {image: action.addPhoto};
            return {
                ...state,
                name: [...state.name, newName],
                phoneNumber: [...state.phoneNumber, newPhone],
                email: [...state.email, newEmail],
                //newImage: [...state.image, newImage]
            }
        }
        default:
            return state;
    }
};

export const setContacts = (contacts) => ({ type: SET_CONTACTS, contacts });
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
//export const savePhotoSuccess = (photo) => ({type: SET_PHOTO_SUCCESS, photo});
export const sendNewContact = (addName, addPhone, addEmail) => ({
    type: ADD_NEW_CONTACT,
    addName, addPhone, addEmail
})

export const requestContacts = (contacts) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        let data = await contactsAPI.getContacts(contacts);
        dispatch(toggleIsFetching(false));
        dispatch(setContacts(data));
    }
}

// export const savePhoto = (file) => async (dispatch) => {
//     let response = await contactsAPI.savePhoto(file);
//         dispatch(savePhotoSuccess(response.data.photos));
// }

export const addContactThunk = (addName, addPhone, addEmail) => async (dispatch) => {
    debugger
    let response = await contactsAPI.addNewContact(addName, addPhone, addEmail);
    dispatch(sendNewContact(response));
}

export default ContactsReducer;