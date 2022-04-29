import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './view/components/Navbar/Navbar';
import ContactData from './view/pages/contacData/ContactData';
import EditContact from './view/pages/contacData/EditContact';
import ContactForm from './view/pages/contactForm/ContactForm';
import SingleContact from './view/pages/singleContact/SingleContact';
import './styles/sass//mySass.scss';



function App() {
  return (
    <div className="*">
      
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<ContactForm />} />
          <Route path='/contactData' element={<ContactData />} />
          <Route path='/singleContact/:contactId' element={<SingleContact />} />
          <Route path='/editContact/:contactId' element={<EditContact />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
