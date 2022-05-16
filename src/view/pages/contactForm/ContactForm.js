import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { addContact } from '../../../redux/slices/contactsSlice';
import { nanoid } from '@reduxjs/toolkit'
import '../../../styles/sass/mySass.scss';


const ContactForm = () => {
     // state
     // const [name,setName]=useState('');
     // const [number,setNumber]=useState('');
     const [formData,setFormData]=useState({});
     const [error, setError] = useState('');

     // redux dispatch
     const dispatch = useDispatch();
     const contacts=useSelector(state=>state.contacts);

     // handle change
     const handleChange=(e)=>{
          const field=e.target.name;
          const value=e.target.value;
          const newValue={...formData};
          newValue[field]=value;
          console.log(newValue);
          setFormData(newValue);

     }

     // handle submit
     const handleSubmit=(e)=>{
          e.preventDefault();

          const regex=/^([01]|\+88)?\d{11}/;          
          if(regex.test(formData.number)){
               if(formData.name&&formData.number){
                    dispatch(addContact({
                         id: nanoid(),
                         name:formData.name,
                         number:formData.number})
                    );
               };
          }
          else if(!regex.test(formData.number) && formData.number !== ""){
               setError('number is not valid')

          }else{
               

          }

          // setName('');
          // setNumber('');
          // setFormErrors('')
          setFormData('');
          
          
     };

     return (
          <div className='container'>
               <div class='formContainer'>
                    <form onSubmit={handleSubmit}>
                         <input 
                              type="text" 
                              name="name"
                              value={formData.name}  
                              id=""
                              placeholder='your name'
                              onChange={handleChange}
                              required    
                         />
                         <br />
                         <input 
                              type="number" 
                              name="number"
                              value={formData.number} 
                              id="" 
                              placeholder='your number'
                              onChange={handleChange}
                              /* pattern = "^(?:\\+88|88)?(01[3-9]\\d{8})$" */
                              required
                         />
                         {error&&<h4>this is not valid number</h4>}
                         <br />
                         <button type='submit' className='button'>Add Contact</button>
                    </form>
                    {contacts.length} 
               </div>
               
          </div>
     );
};

export default ContactForm;