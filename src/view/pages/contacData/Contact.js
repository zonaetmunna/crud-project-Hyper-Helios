import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/slices/contactsSlice';
import '../../../styles/sass/mySass.scss'


const Contact = ({contact}) => {
     // destructuring
     const {id,name,number}=contact;
     // navigate
     const navigate=useNavigate();
     // dispatch
     const dispatch=useDispatch();

     // handle go details
     const handleDetails=()=>{
          const url=`/singleContact/${id}`;
          navigate(url);
     };
     // handle delete
     const handleDelete=()=>{
          dispatch(deleteContact(id));
          navigate('/contactData');
     };

     return (
          <div className='singleContact'>
               <h3>Name- {name}</h3>
               <h5>Number- {number}</h5>
               <button onClick={handleDetails} className='button'>Details</button>
               <button onClick={handleDelete} className='button'>Delete</button>
          </div>
     );
};

export default Contact;