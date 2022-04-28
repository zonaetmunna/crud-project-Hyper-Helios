import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { addContact } from '../../../redux/slices/contactsSlice';
import { nanoid } from '@reduxjs/toolkit'
import '../../../styles/sass/mySass.scss';


const ContactForm = () => {
     const [name,setName]=useState('');
     const [number,setNumber]=useState('');

     const dispatch = useDispatch();
     const contacts=useSelector(state=>state.contacts)

     const handleSubmit=(e)=>{
          e.preventDefault();

          if(name&&number){
               dispatch(addContact({id: nanoid(),name,number})
               );
          };
          setName('');
          setNumber('');
     };

     return (
               <div className='container'>
                    <div className='subContainer'>
                         <div className='linkContainer'>
                              <Link to='/contactData' className='link'>ADD CONTACT</Link>
                         </div>
                         <div class='formContainer'>
                              <form onSubmit={handleSubmit}>
                                   <input 
                                        type="text" 
                                        name="name"
                                        value={name}  
                                        id=""
                                        placeholder='your name'
                                        onChange={(e)=>setName(e.target.value)}
                                        required    
                                   />
                                   <br />
                                   <input 
                                        type="number" 
                                        name="number"
                                        value={number} 
                                        id="" 
                                        placeholder='your number'
                                        onChange={(e)=>setNumber(e.target.value)}
                                        // pattern = "^(?:\\+88|88)?(01[3-9]\\d{8})$"
                                        required
                                   />
                                   <br />
                                   <button type='submit'>submit</button>
                              </form>
                         </div>
                         {contacts.length} 
                    </div>
                     
               </div>
     );
};

export default ContactForm;