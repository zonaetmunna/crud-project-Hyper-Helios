import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
     return (
          <div className='navContainer'>
               <div className='subNavContainer'>
                    <h3>Contact App</h3>
                    <Link to='/' className='link'>Form-Contact</Link>
                    <Link to='/contactData' className='link'>Added-Contacts</Link>
               </div>
               
          </div>
     );
};

export default Navbar;