import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default function PirateForm({pirate, method, url}) {
    const [name, setName] = useState('');
    const [phrase, setPhrase] = useState('');
    const [chest, setChest] = useState('');
    const [position, setPosition] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [leg, setLeg] = useState(true);
    const [patch, setPatch] = useState(true);
    const [hook, setHook] = useState(true);
    const [errors, setErrors] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        setErrors([]);
        axios[method](url, {
            name,
            phrase,
            chest,
            position,
            imageUrl,
            leg,
            patch,
            hook
        })
        // getting the data into error object into response object
        
            .then(() => navigate('/pirate'))
            .catch((err) => {
                const errs = [];

                const innerErrorsObject = err.res.data.errors;

                for (const key in innerErrorsObject) {
                    errs.push(innerErrorsObject[key].message);
                }
                setErrors(errs);
            });
    }

    return (
        <div>
            {errors.map((err, i) => (
                <p key={i} style={{color: 'red'}}>
                    {err}
                </p>
            ))}
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Pirate Name:</label>
                    <input
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input
                        name="imageUrl"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)} 
                    />
                </div>
                <div>
                    Crew position:
                    <select
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                    >
                        <option></option>
                        <option>BoatSwain</option>
                        <option>Captain</option>
                        <option>QuarterMaster</option>
                        <option>PowderMonkey</option>
                    </select>
                </div>
                <div>
                    # of Treasure Chest:
                    <input
                        name="chest"
                        value={chest}
                        onChange={(e) => setChest(e.target.value)}
                    />
                </div>
                <div>
                    <label>Pirate Catch Phrase:</label>
                    <input
                        name="name"
                        value={phrase}
                        onChange={(e) => setPhrase(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Peg Leg:</label>
                    <input
                        type="checkbox"
                        checked={leg}
                        onChange={(e) => setLeg(e.target.checked)} 
                    />
                </div>
                <div>
                    <label>Eye Patch:</label>
                    <input
                        type="checkbox"
                        checked={patch}
                        onChange={(e) => setPatch(e.target.checked)} 
                    />
                </div> 
                <div>
                    <label>Hook Hand:</label>
                    <input
                        type="checkbox"
                        checked={hook}
                        onChange={(e) => setHook(e.target.checked)} 
                    />
                </div>  
                <button>Add</button>
            </form>
            
        </div>
    )
}
