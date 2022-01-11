import { createStore } from "redux";
import { Provider    } from "react-redux";
import { library     } from '@fortawesome/fontawesome-svg-core';
import { faPenSquare, faTrashAlt,faAlignJustify, faSearch } from '@fortawesome/free-solid-svg-icons';
import "/src/styles.css";

import contactsReducer    from '/src/reducers/contacts-reducer';
import PeopleList         from "/src/components/people-list/people-list";
import ContactDetails     from "/src/components/contact-details/contact-details";
import Router             from "/src/components/router/router";
import ContactForm        from "/src/components/contact-form/contact-form";
import ContactFormConfirm from "/src/components/contact-form-confirm/contact-form-confirm";
import SearchContact      from "/src/components/search-contact/search-contact";
import routes             from "/src/routes/routes";
import Link               from "./components/router/link";

library.add(faPenSquare, faTrashAlt,faAlignJustify, faSearch);
const store = createStore(contactsReducer);

export function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <div >
            <h1>Contact Manager</h1>
              <Router path={routes.contact.home}>
                <ContactForm text="Add New Contact" btnText="ADD" />
                <div className="people-list-wrapper">
                  <PeopleList select="3" displayType="random"/>
                  <Link className="app-link" href={routes.contact.all}><span>All</span></Link>
                </div>
              </Router>
                <Router path={routes.contact.edit}>
                  <ContactFormConfirm text="Edit Contact" btnText="UPDATE" />
                </Router>
                <Router path={routes.contact.details}>
                  <ContactDetails />
                </Router>
                <Router path={routes.contact.all}>
                  <SearchContact />
                </Router>
                <Router path={routes.contact.delete}>
                  <h2>Delete Page</h2>
                </Router>
          </div>
      </div>
    </Provider>
  );
}
