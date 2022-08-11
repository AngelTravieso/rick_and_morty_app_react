import { useState, useEffect } from "react";
import { getCharacters } from "../helpers/getCharacters";


export const useFetchCharacter = () => {
    
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState( true );
    
    const searchCharacters = async () => {
        const newCharacters = await getCharacters();
        setCharacters( newCharacters );
        setIsLoading( false );
    }
    
    useEffect(() => {
        searchCharacters();
    }, [])

    return {
        characters,
        isLoading,
    }

}
