import React from 'react';

function Card(props) {
    const { image, name, species, status, gender } = props.personaje
    return (
        <div className="card m-2 col-2 g-0 shadow" >
            <img src={image} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h5 className="card-title">Name: {name}</h5>
                <p className="card-text">Specie: {species}</p>
                <p className="card-text">Status: {status}</p>
                <small className="card-text">Gender: {gender}</small>
            </div>
        </div>
    )
};

export default Card;