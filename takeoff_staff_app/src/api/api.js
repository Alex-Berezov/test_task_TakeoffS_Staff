import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/',
    headers: {
        "Content-Type": "application/json"
    }
});

export const contactsAPI = {
    getContacts(contacts) {
        return instance.get(`contacts`)
            .then(response =>{
                return response.data;
            })
    },
    // savePhoto(photoFile) {
    //     const formData = new FormData();
    //     formData.append('image', photoFile);
    //
    //     return instance.put(`contacts/img`, formData, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data'
    //         }
    //     });
    // },
    addNewContact(addName, addPhone, addEmail) {
        const newContact = {
            id: 6,
            name: addName,
            phoneNumber: addPhone,
            email: addEmail,
            image: "./img/luke.jpg"
        }
        debugger
        return instance.put(`contacts`, newContact)
            .then(function(response) {
                console.log('response: ', response);
            })
            .catch(function(error) {
                console.log('error: ', error);
            });
    }
}