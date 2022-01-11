import { useState }                 from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './contact-details.css';

import contactActions from '/src/actions/contact-actions';
import IconLink       from '/src/components/icon-link/icon-link';
import Modal          from '/src/components/modal/modal';
import routes         from '/src/routes/routes';

const ContactDetails = () => {
  const dispatch  = useDispatch();
  const selected = useSelector((state) => state.selected);
  const [state, setState] = useState({contact: selected, modal: false});

  const modal = (confirm_fnc, cancel_fnc) => {
    const text = "Are you sure you want to delete the contact?";
    return <Modal text={text} onConfirm={confirm_fnc} onCancel={cancel_fnc} />
  };

  const parseDateToLocale = () => {
    if(state.contact.birthday) {
      const dateSplitted = state.contact.birthday.split('-');
      return new Date(
        parseInt(dateSplitted[0], 10),      // year
        parseInt(dateSplitted[1] - 1, 10),  // mounth (we subtract one due to months start at zero)
        parseInt(dateSplitted[2], 10)       // day
      ).toLocaleDateString();
    } else return null;
  };

  const handleDelete  = (e) => setState({...state, modal: true});
  const handleCancel  = (e) => setState({...state, modal: false});
  const handleConfirm = (e) => {
    dispatch(contactActions.deleteContact(state.contact.id));
    setState({...state, modal: false});
  };

  const handleDetails = (e) => {
    window.history.go(-1);
    setState({...state, modal: false});
  }

  const checkShowModal = () => state.modal ? modal(handleConfirm, handleCancel) : null;
  const handleEdit = (e) => dispatch(contactActions.contactSelected(state.contact));

  return (
    <div className="contact-details">
      <div className="contact-details-info">
        <label className="col-6" htmlFor='contact-firstname'>Firtsname: </label>
        <span className="col-6" id='contact-firstname'>{state.contact.firstName}</span><br/>
      </div>
      <div className="contact-details-info">
        <label className="col-6" htmlFor='contact-lastname'>Lastname: </label>
        <span className="col-6" id='contact-lastname'>{state.contact.lastName}</span><br/>
      </div>
      <div className="contact-details-info">
        <label className="col-6" htmlFor='contact-phone'>Phone: </label>
        <span className="col-6" id='contact-phone'>{state.contact.phone}</span><br/>
      </div>
      <div className="contact-details-info">
        <label className="col-6" htmlFor='contact-email'>Email: </label>
        <span className="col-6" id='contact-email'>{state.contact.email}</span><br/>
      </div>
      <div className="contact-details-info">
        <label className="col-6" htmlFor='contact-country'>Country: </label>
        <span className="col-6" id='contact-country'>{state.contact.country}</span><br/>
      </div>
      <div className="contact-details-info">
        <label className="col-6" htmlFor='contact-city'>City: </label>
        <span className="col-6" id='contact-city'>{state.contact.city}</span><br/>
      </div>
      <div className="contact-details-info">
        <label className="col-6" htmlFor='contact-birthday'>Birthday: </label>
        <span className="col-6" id='contact-birthday'>{parseDateToLocale()}</span>
      </div>
      <div className="contact-details-links" id={state.contact.id} style={{fontSize: "1.1rem"}}>
        <IconLink onClick={handleDetails} icon="align-justify" color="green"/>
        <IconLink href={routes.contact.edit} onClick={handleEdit} icon="pen-square" color="dodgerblue"/>
        <IconLink onClick={handleDelete} icon="trash-alt" color="red"/>
      </div>
      {checkShowModal()}
    </div>
  )
}

export default ContactDetails;