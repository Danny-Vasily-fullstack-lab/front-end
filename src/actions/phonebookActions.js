import { createContact } from '../services/contactsApi';

export const ADD_CONTACT = 'ADD_CONTACT';
export const addContact = (contact) => dispatch => {
  return createContact(contact)
    .then(contact => {
      dispatch({
        type:ADD_CONTACT,
        payload: contact
      });
    });
};
