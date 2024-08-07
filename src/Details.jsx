import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchPet from './fetchPet';
import Carousal from './Carousal';
import ErrorBoundary from './ErrorBoundary';



const Details = () => {
    const {id} = useParams();
    const results = useQuery(["details",id],fetchPet);
    
    
    if(results.isLoading){
        return (
            <div className="loading-pane">
                <h2 className="loader">⚽</h2>
            </div>
        );
    }

   
    const pet = results.data.pets[0];
   
    console.log(results);

  return (
    
    <div className="details">
        <Carousal images={pet.images} />
        <div>
            <h1>{pet.name}</h1>
            <h2>
                {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
                <button>Adopt {pet.name}</button>
                <p>{pet.description}</p>
            </h2>
        </div>
    </div>
  )
}


function DetailsErrorBoundary(){
    return (
    <ErrorBoundary>
        <Details/>
    </ErrorBoundary>)
}

export default DetailsErrorBoundary;
