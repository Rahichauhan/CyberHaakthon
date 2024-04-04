import React, { useEffect } from 'react';
import './Body.css';
import ElevatedButton from '../ElevatedButton/ElevatedButton';
import { useNavigate } from 'react-router-dom';

function Body({id}) {
    console.log({"BodyId":id});
    const navigate = useNavigate();

    
        const fetchData = async () => {
            try {
<<<<<<< HEAD
                const response = await fetch(`http://localhost:3000/getspecificuser/${id}`);
=======
                const response = await fetch(`${process.env.REACT_APP_API_URL}/getspecificuser/${id}`);
>>>>>>> 5d6b8898d7c7959e76bd15e40638e7bbaaf29d57
                const data = await response.json();
                
                if (data.is_Selected === true) {
                    //  await fetch("http://localhost:3000/nextRound");

                    navigate("/challenges2");
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };


    return (
        <div className="body-wrapper">
            <div className="text-and-logo-container">
                <div className="body-container">
                    <div className="body-text">
                        Colosseum 14.0
                    </div>
                    <div className="body-text" style={{ marginTop: '10px' }}>
                        Capture The Flag (CTF)
                    </div>

                    <div style={{ marginTop: '25px' }} onClick={fetchData}>
                        <ElevatedButton>View Challenge 2</ElevatedButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;
