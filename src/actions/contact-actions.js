import { uid } from 'uid/single';

// Action Creator
function addContact(contact) {
  return {
    type: 'ADD_CONTACT',
    payload: {
      ...contact,
      id: uid()
    }
  };
}

// Action Creator
function contactSelected(contact) {
  return {
    type: 'CONTACT_SELECTED',
    payload: contact
  }
}

// Action Creator
function editContact(contact, data) {
  return {
    type: 'EDIT_CONTACT',
    payload: {
      contact,
      data
    }
  };
}

// Action Creator
function deleteContact(contactID) {
  return {
    type: 'DELETE_CONTACT',
    payload: contactID
  };
}

const contactActions = {
  addContact,
  editContact,
  deleteContact,
  contactSelected
};

export default contactActions;