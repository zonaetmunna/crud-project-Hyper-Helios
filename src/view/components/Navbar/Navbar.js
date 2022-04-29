import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
     return (
          <div className='navContainer'>
               <div className='subNavContainer'>
                    <h3>Contact App</h3>
                    <Link to='/contactData' className='link'>Show Added Contacts</Link>
                    <Link to='/' className='link'>Form</Link>
                    
               </div>
               
          </div>
     );
};

export default Navbar;