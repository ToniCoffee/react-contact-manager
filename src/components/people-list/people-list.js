import { useState                 } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./people-list.css";

import IconLink       from '/src/components/icon-link/icon-link';
import Modal          from '/src/components/modal/modal';
import contactActions from '/src/actions/contact-actions';
import routes         from '/src/routes/routes';

const PeopleList = ({select, data, displayType = 'normal'}) => {
  const contacts      = useSelector((state) => state.contacts);
  const selected      = useSelector((state) => state.selected);
  const initialState  = useSelector((state) => state.initialState);
  const dispatch      = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const modal = (confirm_fnc, cancel_fnc) => {
    const text = "Are you sure you want to delete the contact?";
    return <Modal text={text} onConfirm={confirm_fnc} onCancel={cancel_fnc} />
  };

  const getContactSelected    = (e) => contacts.filter(contact => contact.id === e.currentTarget.parentNode.id)[0];
  const dispatchSelected      = (e) => dispatch(contactActions.contactSelected(getContactSelected(e)));
  const dispatchInitialState  = (e) => dispatch(contactActions.contactSelected(initialState));
  const checkShowModal        = ()  => showModal ? modal(handleConfirm, handleCancel) : null;
  
  const handleEdit    = (e) => dispatchSelected(e);
  const handleDetails = (e) => dispatchSelected(e);
  const handleDelete  = (e) => {
    dispatchSelected(e);
    setShowModal(true);
  }
  const handleCancel  = (e) => {
    dispatchInitialState(e);
    setShowModal(false);
  }
  const handleConfirm = (e) => {
    dispatch(contactActions.deleteContact(selected.id));
    dispatchInitialState(e);
    setShowModal(false);
  };

  const getFirst = (number) => contacts.map((contact, index) => {
    let result = null;
    if(index < number) {
      result = (<li key={contact.id}>
        <p className="col-6">{contact.firstName.concat(" ").concat(contact.lastName)}</p>
        <div className="col-6" id={contact.id} style={{fontSize: "1.1rem"}}>
          <IconLink href={routes.contact.edit} onClick={handleEdit} icon="pen-square" color="dodgerblue"/>
          <IconLink href={routes.contact.details} onClick={handleDetails} icon="align-justify" color="green"/>
          <IconLink onClick={handleDelete} icon="trash-alt" color="red"/>
        </div>
      </li>);
    }
    return result;
  });

  const getLast = (number) => contacts.slice(0).reverse().map((contact, index) => {
    let result = null;
    if(index < number) {
      result = (<li key={contact.id}>
        <p className="col-6">{contact.firstName.concat(" ").concat(contact.lastName)}</p>
        <div className="col-6" id={contact.id} style={{fontSize: "1.1rem"}}>
          <IconLink href={routes.contact.edit} onClick={handleEdit} icon="pen-square" color="dodgerblue"/>
          <IconLink href={routes.contact.details} onClick={handleDetails} icon="align-justify" color="green"/>
          <IconLink onClick={handleDelete} icon="trash-alt" color="red"/>
        </div>
      </li>);
    }
    return result;
  });

  const getRandom = (number) => {
    if(number > contacts.length) number = contacts.length;
    if(number < 0) number = 3;
    let array = contacts.slice(0);
    let result = [];
    for(let i = 0; i < number; ++i) {
      let random = Math.floor(Math.random() * array.length);
      result.push(array.splice(random, 1)[0]);
    }

    return result.map(contact => (
      <li key={contact.id}>
        <p className="col-6">{contact.firstName.concat(" ").concat(contact.lastName)}</p>
        <div className="col-6" id={contact.id} style={{fontSize: "1.1rem"}}>
          <IconLink href={routes.contact.edit} onClick={handleEdit} icon="pen-square" color="dodgerblue"/>
          <IconLink href={routes.contact.details} onClick={handleDetails} icon="align-justify" color="green"/>
          <IconLink href={routes.contact.home} onClick={handleDelete} icon="trash-alt" color="red"/>
        </div>
      </li>
    )); 
  };

  const getAll = () => contacts.map(contact => (
    <li key={contact.id}>
      <p className="col-6">{contact.firstName.concat(" ").concat(contact.lastName)}</p>
      <div className="col-6" id={contact.id} style={{fontSize: "1.1rem"}}>
        <IconLink href={routes.contact.edit} onClick={handleEdit} icon="pen-square" color="dodgerblue"/>
        <IconLink href={routes.contact.details} onClick={handleDetails} icon="align-justify" color="green"/>
        <IconLink onClick={handleDelete} icon="trash-alt" color="red"/>
      </div>
    </li>
  ));

  const getData = () => data.map(contact => (
    <li key={contact.id}>
      <p className="col-6">{contact.firstName.concat(" ").concat(contact.lastName)}</p>
      <div className="col-6" id={contact.id} style={{fontSize: "1.1rem"}}>
        <IconLink href={routes.contact.edit} onClick={handleEdit} icon="pen-square" color="dodgerblue"/>
        <IconLink href={routes.contact.details} onClick={handleDetails} icon="align-justify" color="green"/>
        <IconLink onClick={handleDelete} icon="trash-alt" color="red"/>
      </div>
    </li>
  ));

  const setPeopleList = () => {
    if(data instanceof Array) return getData();
    else {
      let numberOfContactsToDisplay = parseInt(select, 10);
      if(isNaN(numberOfContactsToDisplay)) return getAll();
      else {
        numberOfContactsToDisplay = Math.abs(numberOfContactsToDisplay);
        if(displayType === 'normal') return getFirst(numberOfContactsToDisplay);
        if(displayType === 'reverse') return getLast(numberOfContactsToDisplay);
        if(displayType === 'random') return getRandom(numberOfContactsToDisplay);
      }
    }
  };

  return (
    <div>
      <ul className="peopleList">{setPeopleList()}</ul>
      {checkShowModal()}
    </div>
  );
}

export default PeopleList;