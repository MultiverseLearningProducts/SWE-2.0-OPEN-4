import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import CardForm from './components/CardForm';
import '../client/styles.css';

function App() {
  const [data, setData] = useState([]);

  function getAllBands() {
    fetch('http://localhost:8080/bands', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    getAllBands();
  }, []);


  return ( 
    <>
      <div className="container">
        <CardForm />
        {data.map(({ id, name, genre }, idx) => {
          return <Card key={idx} id={id} name={name} genre={genre} getAllBands={getAllBands} />;
        })}
      </div>
    </>
  );
}

export default App;
