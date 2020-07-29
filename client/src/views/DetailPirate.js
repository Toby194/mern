import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default function SinglePirate(props) {
  const [pirate, setPirate] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/pirate/' + props.id)
      .then(res => setPirate(res.data));
  }, [props.id]);

  if (pirate === null) return 'Loading...';

  console.log(pirate);
  return (
    <div>
      <button type="button" onClick={() => navigate('/pirate')}>
        Crew Board
      </button>
      <h1>{pirate.name}</h1>
      <div>
        <img src={pirate.imageUrl} alt={pirate.name} />
        <p></p>
        <h2>{pirate.phrase}</h2>
      </div>
      <h1>About</h1>
      <p>Position:{pirate.position}</p>
      <p>Treasure:{pirate.chest}</p>
      <p>Peg leg:{pirate.leg ? 'No' : 'Yes'}</p>
      <p>Eye Patch:{pirate.patch ? 'No' : 'Yes'}</p>
      <p>Hook Hand:{pirate.hook ? 'No' : 'Yes'}</p>
    </div>
  );
}
