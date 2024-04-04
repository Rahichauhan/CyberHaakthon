<<<<<<< HEAD
import React, { useState } from "react";
import './Registration.css';
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
=======
import React , {useState} from "react";
import './Registration.css';
import { Link, useNavigate} from "react-router-dom";
>>>>>>> 5d6b8898d7c7959e76bd15e40638e7bbaaf29d57
import Navbar from "../../components/Navbar1/Navbar";

function Reg() {
    const [teamname, setTeamName] = useState('');
    const [leadername, setLeaderName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contact, setContact] = useState('');
    const [player2, setPlayer2] = useState('');
    const [player3, setPlayer3] = useState('');
    const navigate=useNavigate();

    const handleSubmit =async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/userRegister`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                teamname, leadername,email, password,contact,player2,player3
              }),
            });
      
            if (!response.ok) {
              throw new Error("Failed to register user");
            }
      
            // const data = await response.json();
            navigate('/login');
          } catch (error) {
            console.error("Error:", error);
          }
    
    }

    return (
<<<<<<< HEAD
        <>
        <Navbar/>
=======
>>>>>>> 5d6b8898d7c7959e76bd15e40638e7bbaaf29d57
        <div id="registration-section" className="body">
            <section id="reg-sec">
                <div className="register-login-box">
                    <form onSubmit={handleSubmit}>
                        <h2>Registration</h2>
                        <div className="register-input-box">
                            <span className="icon"><ion-icon name="people"></ion-icon></span>
<<<<<<< HEAD
                            <input type="text" placeholder="Team Name" required onChange={(e) => setTeamName(e.target.value)} value={teamname} />
=======
                            <input type="text"  required onChange={(e) => setTeamName(e.target.value)} value={teamname} />
>>>>>>> 5d6b8898d7c7959e76bd15e40638e7bbaaf29d57
                            <label>Team Name</label>
                        </div>
                        <div className="register-input-box">
                            <span className="icon"><ion-icon name="person"></ion-icon></span>
<<<<<<< HEAD
                            <input type="text" placeholder="Leader" required onChange={(e) => setLeaderName(e.target.value)} value={leadername} />
=======
                            <input type="text"  required onChange={(e) => setLeaderName(e.target.value)} value={leadername} />
>>>>>>> 5d6b8898d7c7959e76bd15e40638e7bbaaf29d57
                            <label>Leader</label>
                        </div>
                        <div className="register-input-box">
                            <span className="icon"><ion-icon name="mail"></ion-icon></span>
<<<<<<< HEAD
                            <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} value={email} />
=======
                            <input type="email"  required onChange={(e) => setEmail(e.target.value)} value={email} />
>>>>>>> 5d6b8898d7c7959e76bd15e40638e7bbaaf29d57
                            <label>Email</label>
                        </div>
                        <div className="register-input-box">
                            <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
<<<<<<< HEAD
                            <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} value={password} />
=======
                            <input type="password"  required onChange={(e) => setPassword(e.target.value)} value={password} />
>>>>>>> 5d6b8898d7c7959e76bd15e40638e7bbaaf29d57
                            <label>Password</label>
                        </div>
                        
                        <div className="register-input-box">
                            <span className="icon"><ion-icon name="logo-whatsapp"></ion-icon></span>
<<<<<<< HEAD
                            <input type="tel" placeholder="WhatsApp Number" required onChange={(e) => setContact(e.target.value)} value={contact} />
=======
                            <input type="tel"  required onChange={(e) => setContact(e.target.value)} value={contact} />
>>>>>>> 5d6b8898d7c7959e76bd15e40638e7bbaaf29d57
                            <label>WhatsApp Number</label>
                        </div>
                        <div className="register-input-box">
                            <span className="icon"><ion-icon name="person"></ion-icon></span>
<<<<<<< HEAD
                            <input type="text" placeholder="Player 2" onChange={(e) => setPlayer2(e.target.value)} value={player2} />
=======
                            <input type="text" onChange={(e) => setPlayer2(e.target.value)} value={player2} />
>>>>>>> 5d6b8898d7c7959e76bd15e40638e7bbaaf29d57
                            <label>Player 2</label>
                        </div>
                        <div className="register-input-box">
                            <span className="icon"><ion-icon name="person"></ion-icon></span>
<<<<<<< HEAD
                            <input type="text" placeholder="Player 3" onChange={(e) => setPlayer3(e.target.value)} value={player3} />
                            <label>Player 3</label>
                        </div>
                        <button type="submit">Submit</button>
=======
                            <input type="text"  onChange={(e) => setPlayer3(e.target.value)} value={player3} />
                            <label>Player 3</label>
                        </div>
                        <button id='reg-button' type="submit">Submit</button>
>>>>>>> 5d6b8898d7c7959e76bd15e40638e7bbaaf29d57
                    </form>
                    <div className="register-register-link">
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                    </div>
                </div>
            </section>
        </div>
<<<<<<< HEAD
        </>
=======
>>>>>>> 5d6b8898d7c7959e76bd15e40638e7bbaaf29d57
    );
}

export default Reg;
