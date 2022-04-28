import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Contact from './Contact';

const ContactData = () => {
     //  selector
     const contacts=useSelector(state=>state.contacts);

     return (
          <div className='contactContainer'>
               <div>
                    <Link to='/' className='link'>Go Form</Link>
                    <h4>total-contacts: {contacts.length}</h4>
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