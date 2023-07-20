import React from 'react';

function Hats({hats}) {
  return <>
    <h1>Hats</h1>
    <div className="d-flex p-2 flex-wrap justify-content-around">
      {
        hats.map((hat, idx) => <div  key={idx} className="card">
          <img className="card-img-top" src={hat.image}/>
          <div className="card-body">
            <h5 className="card-title">{hat.name}</h5>
            <p>{hat.price}</p>
          </div>
        </div>)
      }
    </div>
  </>;
}

export { Hats };