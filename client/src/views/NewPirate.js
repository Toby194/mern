import React from 'react';
import { navigate } from '@reach/router';
import PirateForm from '../components/PirateForm';

export default function NewPirate() {
    const newPirate = {
        name:'',
        phrase:'',
        chest:'',
        position:'',
        imageUrl:'',
        leg:true,
        patch:true,
        hook:true
    }
    return (
        <div>
            <button type="button" onClick={() => navigate('/pirate')}>Crew Board</button>
            <h1>Add Pirate</h1>
            <div>
                <PirateForm 
                    pirate={newPirate}
                    method="post"
                    url='http://localhost:8000/api/pirate'
                />
            </div>
        </div>
    )
}
