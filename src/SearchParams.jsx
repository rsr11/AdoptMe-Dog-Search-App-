
import {useState} from "react";

const ANIMALS = ["dog","cat","bird","tiger"];

const SearchParams = ()=>{
    const [location,setLocation]= useState("");
    const [animal, setAnimal]= useState("");
    const [breed, setBreed] = useState("");
    const breeds = [];

    return (
        <div className="search-params" >
            <form action="">
                <label htmlFor="location">
                  Location
                  <input 
                    type="text" 
                    id="location" 
                    onChange={ e => setLocation(e.target.value)} 
                    value={location} 
                    placeholder="Location"
                     />
                </label>

                <label htmlFor="animal">
                    Animal
                    <select name="animal" id="animal" value={animal} onChange={e=> setAnimal(e.target.value)}>
                        <option />
                        {ANIMALS.map((animal)=>{
                            return <option key={animal} value={animal}>{animal}</option>
                        })}
                    </select>
                </label>

                <label htmlFor="breed">
                    Breed
                    <select name="breed" id="breed" value={breed} onChange={e=> setBreed(e.target.value)}>
                        <option />
                        {breeds.map((breed)=>{
                            return <option key={breed} value={breed}>{breed}</option>
                        })}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}


export default SearchParams;