import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Shopping from './shopping';
import Card from './card';
import Contact from './Contact';

 function Nav() {
  return (
    <>
       <Router>
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route exact path='/' element={<Shopping />} />
                <Route path='contact' element={<Contact />} />
            </Route>
        </Routes>
       </Router>
    </>
  )
}


export default Nav