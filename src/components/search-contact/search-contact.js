import { useSelector } from 'react-redux';
import { useState } from 'react';

import Search from 'components/search/search';
import PeopleList from 'components/people-list/people-list';

const SearchContact = () => {
  const contacts = useSelector((state) => state.contacts);
  const [data, setData] = useState(contacts);

  const onChange = (e) => {
    let filterContacts = contacts.filter(contact => {
      if( contact.firstName.toLowerCase().includes(e.target.value) ||
          contact.lastName.toLowerCase().includes(e.target.value)) {
        return contact;
      } else return null;
    });

    setData(filterContacts);
  }

  return (
    <div>
      <Search onChange={onChange} />
      <PeopleList data={data} />
    </div>
  )
};

export default SearchContact;