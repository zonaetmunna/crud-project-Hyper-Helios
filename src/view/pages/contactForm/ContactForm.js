import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { addContact } from '../../../redux/slices/contactsSlice';
import { nanoid } from '@reduxjs/toolkit'
import '../../../styles/sass/mySass.scss';


const ContactForm = () => {
     // state
     const [name,setName]=useState('');
     const [number,setNumber]=useState('');
     const [formErrors, setFormErrors] = useState('');
     // const [isSubmit, setIsSubmit] = useState(false);
     // redux dispatch
     const dispatch = useDispatch();
     const contacts=useSelector(state=>state.contacts);

     

     const handleNameChange=(e)=>{
          setName(e.target.value);
          console.log(e.target.value)
     };
     const handleNumberChange=(e)=>{
          setNumber(e.target.value);
          
     }

     // handle submit
     const handleSubmit=(e)=>{
          e.preventDefault();

          const regex=/^([01]|\+88)?\d{11}/;          
          if(regex.test(number)){
               if(name&&number){
                    dispatch(addContact({id: nanoid(),name,number})
                    );
               };
          }
          else if(!regex.test(number) && number !== ""){
               setFormErrors('number is not valid')

          }else{
               

          }

          setName('');
          setNumber('');
          
          
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
                              onChange={handleNameChange}
                              required    
                         />
                         <br />
                         <input 
                              type="number" 
                              name="number"
                              value={number} 
                              id="" 
                              placeholder='your number'
                              onChange={handleNumberChange}
                              /* pattern = "^(?:\\+88|88)?(01[3-9]\\d{8})$" */
                              required
                         />
                         {formErrors&&<h4>this is not valid number</h4>}
                         <br />
                         <button type='submit' className='button'>Add Contact</button>
                    </form>
                    {contacts.length} 
               </div>
               
          </div>
     );
};

export default ContactForm;