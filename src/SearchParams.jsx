
import {useState, useEffect} from "react";
import Pet from "./Pet";
import useBreedList from "./useBreedList";

const ANIMALS = ["dog","cat","bird","rabbit"];

const SearchParams = ()=>{
    const [location,setLocation]= useState("");
    const [animal, setAnimal]= useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);


    useEffect(()=>{
        requestPets();
    },[]);
 
    async function requestPets(){
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
        const json = await res.json();
        // console.log(json);
        setPets(json.pets);
    }

    return (
        <div className="search-params" >
            <form action="" onSubmit={e=>{
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                  Location
                  <input 
                    type="text" 
                    id="location" 
                    onChange={ e =>{ 
                        setLocation(e.target.value)
                             
                    }} 
                    value={location} 
                    placeholder="Location"
                     />
                </label>

                <label htmlFor="animal">
                    Animal
                    <select name="animal" id="animal" value={animal} onChange={e=> {
                        setAnimal(e.target.value)
                        setBreed("");
                        }}>
                        <option />
                        {ANIMALS.map((animal)=>{
                            return <option key={animal} value={animal}>{animal}</option>
                        })}
                    </select>
                </label>

                <label htmlFor="breed">
                    Breed
                    <select name="breed" id="breed" value={breed} disabled={breeds.length === 0} onChange={e=> setBreed(e.target.value)}>
                        <option />
                        {console.log(breeds)}
                        {breeds.map((breed)=>{
                            return <option key={breed} value={breed}> {breed} </option>
                        })}
                    </select>
                </label>
                <button>Submit</button>
            </form>

        {
            pets.map((pet)=>{
                return <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
            })
        }

        </div>
    )
}


export default SearchParams;