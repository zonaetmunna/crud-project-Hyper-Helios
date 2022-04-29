import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
     return (
          <div className='navContainer'>
               <div className='subNavContainer'>
                    <div>
                         <h3>Contact App</h3>
                    </div>
                    
                    <div>
                         <Link to='/contactData' className='link'>Show Added Contacts</Link>
                    </div>
                    <div>
                         <Link to='/' className='link'>Form</Link>
                    </div>
               </div>
               
          </div>
     );
};

export default Navbar;