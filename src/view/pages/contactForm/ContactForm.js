import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { addContact } from '../../../redux/slices/contactsSlice';
import { nanoid } from '@reduxjs/toolkit'
import '../../../styles/sass/mySass.scss';


const ContactForm = () => {
     const [name,setName]=useState('');
     const [number,setNumber]=useState('');

     // error
     const [error,setError]=useState(false);

     /* const validation=(e)=>{
          const validate = /^(?:\+88|88)?(01[3-9]\d{8})$/;
          if(validate.test(e.target.value) === true){
               setNumber(e.target.value);
          } */
          
          
          
          /* if (validate.test(number) === true) {
               
               setError(false)
          }
          else{
               setError(true);
          } 
     }
     */
     

     const dispatch = useDispatch();
     const contacts=useSelector(state=>state.contacts);

     const handleSubmit=(e)=>{
          e.preventDefault();
          
          if(name&&number){
               dispatch(addContact({id: nanoid(),name,number})
               );
          };
          setName('');
          setNumber('');
          // setIsSubmit(true);
     };

     return (
               <div className='container'>
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
                                   /* pattern = "^(?:\\+88|88)?(01[3-9]\\d{8})$" */
                                   required
                              />
                              {error&&<h4>this is error</h4>}
                              <br />
                              <button type='submit' className='button'>Add Contact</button>
                         </form>
                         {contacts.length} 
                    </div>
                    
               </div>
     );
};

export default ContactForm;