import React from 'react';
import { useNavigate } from "react-router-dom";

function Add({hats, setHats}) {
  let navigate = useNavigate();

  const addHat = async(e) => {
    e.preventDefault();

    const hat = Object.keys(e.target.elements).reduce((acc, key) => {
      acc[key] = e.target.elements[key].value;
      return acc;
    } , {});

    const newHat = await fetch('http://localhost:3000/hats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(hat)
    }).then(res => res.json());
    setHats([newHat, ...hats]);
    navigate('/');
  }

  return (
    <div>
      <h1>Add a Hat!</h1>
      <form onSubmit={addHat}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter name" />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="text" className="form-control" id="price" placeholder="Enter price" />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="text" className="form-control" id="image" placeholder="Enter image" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    </div>
  );
}

export { Add };