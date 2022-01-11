import { uid } from 'uid/single';

const contactsData = {
  contacts: [
    {
      id: uid(),
      firstName: "James",
      lastName: "Harry",
      phone: "678334475",
      email: "james@gmail.com",
      country: "United States",
      city: "Washington DC",
      birthday: "1990-12-05"
    }, 
    {
      id: uid(),
      firstName: "Louise",
      lastName: "Jun",
      phone: "654123456",
      email: "louise@gmail.com",
      country: "United Kingdom",
      city: "London",
      birthday: "2000-07-23"
    }, 
    {
      id: uid(),
      firstName: "Richard",
      lastName: "John",
      phone: "690346532",
      email: "richard@gmail.com",
      country: "Ireland",
      city: "Dublin",
      birthday: "1995-11-02"
    }, 
    {
      id: uid(),
      firstName: "Robert",
      lastName: "De Niro",
      phone: "697034521",
      email: "robert@gmail.com",
      country: "United States",
      city: "New York",
      birthday: "1970-07-12"
    }, 
    {
      id: uid(),
      firstName: "Julia",
      lastName: "Roberts",
      phone: "645357690",
      email: "julia@gmail.com",
      country: "United States",
      city: "Texas",
      birthday: "1972-05-21"
    }, 
    {
      id: uid(),
      firstName: "Zinedine",
      lastName: "Zidan",
      phone: "612438956",
      email: "zidan@gmail.com",
      country: "France",
      city: "Paris",
      birthday: "1974-10-15"
    }
  ],
  initialState: {
    id: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    birthday: ""
  },
  selected: {
    id: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    birthday: ""
  }
};

export default contactsData;