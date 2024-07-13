import Pet from "./Pet";

const Result = ( {pets})=>{
    return (
        <div className="search" >
        {!pets.length ? (
            <h1>No Pets Found</h1>
        ) : (
            pets.map((pet)=>{
                return <Pet animal={pet.animal} key={pet.id} id={pet.id} name={pet.name} breed={pet.breed} images={pet.images} location={`${pet.city}, ${pet.state}`} />
            })
        ) }
        </div>
    )
}


export default Result;