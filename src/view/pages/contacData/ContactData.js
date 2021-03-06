import React from 'react';
import { useSelector } from 'react-redux'
import Contact from './Contact';
import '../../../styles/sass/mySass.scss'

const ContactData = () => {
     //  selector
     const contacts=useSelector(state=>state.contacts);

     return (
          <div className='contactContainer'>
               <div>
                    {/* <h4>total-contacts: {contacts.length}</h4> */}
                    <div className='allContactContainer'>
                         {contacts.map(contact=><Contact
                              key={contact.id} 
                              contact={contact}
                              ></Contact>)
                         }
                    </div>
               </div>
          </div>
     );
};

export default ContactData;