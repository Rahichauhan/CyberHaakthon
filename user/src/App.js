import HomePage from './pages/Homepage/Homepage';
import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Reg from './pages/Register/reg';
import Login from './pages/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarComp from './components/NavbarComp/NavbarComp';
<<<<<<< HEAD
import Page from './pages/Challenges/challenges';
import MainLayout from './components/MainLayout/MainLayout';
import Progress from './pages/Progress/Progress';
import Page2 from './pages/Challenges/challenges2';

function App() {
  const [id, setId] = useState();

=======
import Challenges from './pages/Challenges/challenges';
import MainLayout from './components/MainLayout/MainLayout';
import Progress from './pages/Progress/Progress';
import Challenges2 from './pages/Challenges/challenges2';
function App() {
  const [id, setId] = useState();
  
>>>>>>> 5d6b8898d7c7959e76bd15e40638e7bbaaf29d57
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/login" element={<Login setId={setId} />} /> {/* Use Login component inside Route */}
        <Route path="/Homepage" element={<HomePage id={id} />} /> {/* Use Homepage component inside Route */}
        <Route exact path="/register" element={<Reg />} />
<<<<<<< HEAD
        <Route  path="/challenges" element={<Page id={id}/>} />
        <Route  path="/challenges2" element={<Page2 id={id}/>} />
=======
        <Route  path="/challenges" element={<Challenges id={id}/>} />
        <Route  path="/challenges2" element={<Challenges2 id={id}/>} />
>>>>>>> 5d6b8898d7c7959e76bd15e40638e7bbaaf29d57
        <Route path='/progress' element={<Progress />} />
      </Routes>
    </Router>
  );
}

export default App;
