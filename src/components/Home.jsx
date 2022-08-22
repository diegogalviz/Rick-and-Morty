import {Character} from "./Character";
import rick_morty from "../img/rick-morty.png";
import {useState} from "react";

const Home = () => {

    const [characters, setCharacters] = useState(null)

    const reqApi = async () => {
        const api = await fetch('https://rickandmortyapi.com/api/character')
        const characterApi = await api.json();

        setCharacters(characterApi.results);

    }

    console.log(characters)

    return (
        <>
        {characters ? (<Character characters={characters} setCharacters={setCharacters}/>) : (<>
                <img src={rick_morty} alt="Rick & Morty" className={'img-home'}/>
                <button onClick={reqApi} className={'btn-search'}>Buscar Personajes</button>
            </>)}
        </>
    )
}

export {Home}