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

     // state form data
     const [formData,setFormData]=useState({name:contact.name,number:contact.number});
     const [error,setError]=useState('');
     
     // handle change
     const handleChange=(e)=>{
          const field=e.target.name;
          const value=e.target.value;
          const newValue={...formData};
          newValue[field]=value;
          setFormData(newValue);
     }


     const dispatch=useDispatch();
     const navigate=useNavigate();

     // handle contact update
     const handleUpdate=(e)=>{
          e.preventDefault();
          if(formData.name&&formData.number){
               dispatch(
                    updateContact({
                         id:contactId,
                         name:formData.name,
                         number:formData.number
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
                              onChange={handleChange}
                              required    
                         />
                         <br />
                         <input 
                              type="number" 
                              name="number"
                              defaultValue={contact.number} 
                              id="" 
                              placeholder='your number'
                              onChange={handleChange}
                              // pattern = "^(?:\\+88|88)?(01[3-9]\\d{8})$"
                              required
                         />
                         <br />
                         {error&&<h3>this is error</h3>}
                         <button type='submit' className='button'>Submit</button>
                    </form>
               </div>
          </div>
     );
};

export default EditContact;