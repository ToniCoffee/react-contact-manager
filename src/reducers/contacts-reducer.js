import data from '/src/contacts-data';

// Reducer function
const contactsReducer = (state = data, action) => {
  switch(action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    case 'CONTACT_SELECTED':
      return {
        ...state,
        selected: action.payload
      }
    case 'EDIT_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(
          contact => contact.id === action.payload.contact.id ? {
            ...contact,
            ...action.payload.data
          } : contact
        )
      }
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload ? contact : null
        )
      };
    default:
      return state;
  }
}

export default contactsReducer;