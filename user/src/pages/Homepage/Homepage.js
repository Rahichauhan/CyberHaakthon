import React from 'react';
import './Homepage.css';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Body from '../../components/Body/Body';
import Page from '../Challenges/challenges'; // Assuming you have a Challenges component
=======
import { Route, Routes } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Body from '../../components/Body/Body'; // Assuming you have a Challenges component
>>>>>>> 5d6b8898d7c7959e76bd15e40638e7bbaaf29d57
import Logo from '../../components/Logo/Logo';
import Progress from '../Progress/Progress';
import { useNavigate } from 'react-router-dom';

const Homepage = ({ id }) => {
<<<<<<< HEAD

=======
    console.log(id);
>>>>>>> 5d6b8898d7c7959e76bd15e40638e7bbaaf29d57
    return (
        <div style={{ backgroundColor: 'black' }}>
            <div className='logo-app-container'>
                <div className='logo-container'>
<<<<<<< HEAD
                    <Logo />    
=======
                    <Logo />
>>>>>>> 5d6b8898d7c7959e76bd15e40638e7bbaaf29d57
                </div>
                <div className="app-container">
                    <NavBar />
                </div>
            </div>
            
            <Routes>
                <Route path="/" exact element={<Body id={id} />} />
<<<<<<< HEAD
=======
                {/* Pass the id to the Challenges component */}
                {/* <Route path="/challenges" element={<Challenges id={id} />} /> */}
>>>>>>> 5d6b8898d7c7959e76bd15e40638e7bbaaf29d57
                <Route path="/progress" element={<Progress />} />
            </Routes>
        </div>
    );
}

export default Homepage;
