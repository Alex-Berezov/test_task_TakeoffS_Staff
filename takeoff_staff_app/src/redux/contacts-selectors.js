export const getIsFetching = (state) => {
    return state.contactsPage.isFetching;
}

export const getContacts = (state) => {
    return state.contactsPage.contacts;
}