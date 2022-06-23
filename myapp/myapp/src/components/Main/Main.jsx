import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';

function Main() {
    const [personajes, setPersonajes] = useState([]);

    const getData = () => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(response => {
                setPersonajes(response.results)
            })
    }

    useEffect(() => {
        getData()
    }, [])


    console.log(personajes);

    return (
        <div className="container">
            <h1 className='text-center mt-5'>Bienvenidos a la página de Rick and Morty</h1>
            <div className="row mt-5 justify-content-center">
                {
                    personajes.map((personaje) => <Card personaje={personaje}/>)
                }
            </div>
        </div>
    )
};

export default Main;