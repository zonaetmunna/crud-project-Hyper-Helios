import React, { useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import { updateContact } from '../../../redux/slices/contactsSlice';
import '../../../styles/sass/mySass.scss'
 

const EditContact = () => {
     // params
     const {contactId}=useParams();
     //for matching id 
     const contact=useSelector(state=>state.contacts.find(s => s.id ===contactId));

     const [name,setName]=useState(contact.name);
     const [number,setNumber]=useState(contact.number);


     const dispatch=useDispatch();
     const navigate=useNavigate();

     // handle contact update
     const handleUpdate=(e)=>{
          e.preventDefault();
          if(name&&number){
               dispatch(
                    updateContact({
                         id:contactId,
                         name:name,
                         number:number
                    })
               );
          }
          navigate('/contactData');
     };

     return (
          <div className='container'>
             
               <div className='formContainer'>
                    <div>
                         <h4>Edit Contact</h4>
                    </div>
                    <form onSubmit={handleUpdate}>
                         <input 
                              type="text" 
                              name="name"
                              defaultValue={contact.name}  
                              id=""
                              placeholder='your name'
                              onChange={(e)=>setName(e.target.value)}
                              required    
                         />
                         <br />
                         <input 
                              type="number" 
                              name="number"
                              defaultValue={contact.number} 
                              id="" 
                              placeholder='your number'
                              onChange={(e)=>setNumber(e.target.value)}
                              // pattern = "^(?:\\+88|88)?(01[3-9]\\d{8})$"
                              required
                         />
                         <br />
                         <button type='submit' className='button'>Submit</button>
                    </form>
               </div>
          </div>
     );
};

export default EditContact;