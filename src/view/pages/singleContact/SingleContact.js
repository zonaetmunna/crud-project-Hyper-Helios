import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';
import '../../../styles/sass//mySass.scss'


const SingleContact = () => {
     // useParams
     const {contactId}=useParams();
     const navigate=useNavigate();

     // selector
     const contact=useSelector(state=>state.contacts.find(s => s.id ===contactId));
     console.log(contactId)


     const goEdit=()=>{
          const url=`/editContact/${contact.id}`;
          navigate(url);
     };

     
     if (!contact) {
          return (
            <section>
              <h2>contact not found!</h2>
            </section>
          )
        }

     return (
          <div>
               <div className='contactDetails'>
                    <div>
                         <h2>Contact-Details</h2>
                         <div className='singleContact'>
                              <h3>Name- {contact.name}</h3>
                              <h5>Number- {contact.number}</h5>
                              <button onClick={goEdit} className='button'>Edit contact</button>
                         </div>
                    </div>
                    
                    
               </div>

          </div>
     );
};

export default SingleContact;