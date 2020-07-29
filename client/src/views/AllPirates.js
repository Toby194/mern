import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default function AllPirates() {
  const [pirates, setPirates] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/pirate')
      .then(res => setPirates(res.data))
      .catch(() => setHasError(true));
  }, []);

  function handleDelete(id) {
    axios
      .delete('http://localhost:8000/api/pirate/' + id)
      .then(() => setPirates(pirates.filter(pirate => pirate._id !== id)));
  }
  if (hasError) return 'Something is wrong with the connection.';

  if (pirates == null) return 'Loading...';

  return (
    <div>
      <h1>Pirate Crew</h1>
      <button type="button" onClick={() => navigate('/pirate/new')}>
        Add Pirate
      </button>
      <tbody>
        {pirates.map(pirate => (
          <tr key={pirate._id}>
            <img src={pirate.imageUrl} alt={pirate.name} />
            <td>{pirate.name}</td>
            <button onClick={() => navigate('/pirate/' + pirate._id)}>
              View Pirate
            </button>
            <td>
              <button onClick={() => handleDelete(pirate._id)}>
                Walk the Plank
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}
