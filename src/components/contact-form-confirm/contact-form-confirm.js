import { useState                 } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm    from "components/contact-form/contact-form";
import Modal          from 'components/modal/modal';
import contactActions from 'actions/contact-actions';

const ContactFormConfirm = ( { text, btnText, onSubmit } ) => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.selected);
  const [state, setState] = useState( { key: false, contact: selected, modal: false } );

  const handleCancel  = () => setState( { ...state, contact: null, modal: false, key: !state.key } );
  const handleConfirm = () => {
    dispatch(contactActions.editContact(selected, state.contact));
    dispatch(contactActions.contactSelected(state.contact));
    setState( { ...state, contact: null, modal: false } );
  };
  const handleSubmit = (e, contact) => {
    if(!(onSubmit instanceof Function)) setState( { ...state, contact: contact, modal: true } );
    else onSubmit(e, contact);
  }

  return (
    <div className="contact-form-confirm">
      <ContactForm key={state.key} text={text} btnText={btnText} onSubmit={handleSubmit} />
      <Modal display={state.modal} text="Test" onConfirm={handleConfirm} onCancel={handleCancel} />
    </div>
  );
}

export default ContactFormConfirm;