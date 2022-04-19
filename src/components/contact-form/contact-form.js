import { useState                 } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './contact-form.css';

import contactActions from 'actions/contact-actions';

const ContactForm = ( { text, btnText, onSubmit } ) => {
  const selected = useSelector((state) => state.selected);
  const dispatch = useDispatch();
  const [contact, setContact] = useState(selected);

  const handleChangeFirstName = (e) => setContact({...contact, firstName: e.target.value});
  const handleChangeLastName  = (e) => setContact({...contact, lastName:  e.target.value});
  const handleChangePhone     = (e) => setContact({...contact, phone:     e.target.value});
  const handleChangeEmail     = (e) => setContact({...contact, email:     e.target.value});
  const handleChangeCountry   = (e) => setContact({...contact, country:   e.target.value});
  const handleChangeCity      = (e) => setContact({...contact, city:      e.target.value});
  const handleChangeBirthday  = (e) => setContact({...contact, birthday:  e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!(onSubmit instanceof Function)) {
      dispatch(contactActions.addContact(contact));
      setContact(selected);
    } else onSubmit(e, contact);
  }

  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>{text}</legend>
          <input 
            type        = "text" 
            placeholder = "Contact Firstname"
            onChange    = {handleChangeFirstName}
            value       = {contact.firstName} 
            pattern     = "[a-zA-ZÀ-ú]+"
            required
          />
          <input 
            type        = "text" 
            placeholder = "Contact Lastname"
            onChange    = {handleChangeLastName}
            value       = {contact.lastName} 
            pattern     = "[a-zA-ZÀ-ú ]+"
            required
          />
          <input 
            type        = 'tel' 
            placeholder = "Contact Phone"
            onChange    = {handleChangePhone}
            value       = {contact.phone}
            pattern     = "[0-9]{9}"
            required
          />
          <input 
            type        = 'email' 
            placeholder = "Contact Email"
            onChange    = {handleChangeEmail}
            value       = {contact.email}
          />
          <input 
            type        = 'text' 
            placeholder = "Contact Country"
            onChange    = {handleChangeCountry}
            value       = {contact.country}
            pattern     = "[a-z A-Z]+"
          />
          <input 
            type        = 'text' 
            placeholder = "Contact City"
            onChange    = {handleChangeCity}
            value       = {contact.city}
            pattern     = "[a-z A-Z]+"
          />
          <input 
            type        = 'date' 
            placeholder = "Contact Birthday"
            onChange    = {handleChangeBirthday}
            value       = {contact.birthday}
          />
          <br/>
          <button type  = "submit">{btnText}</button>
        </fieldset>
      </form>
    </div>
  );
}

export default ContactForm;