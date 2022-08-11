
const url = `https://rickandmortyapi.com/api/character/?count=10`;

export const getCharacters = async () => {
  
    const resp = await fetch( url );
    
    const { results } = await resp.json();

    return results.map( char => ({
        id: char.id,
        name: char.name,
        status: char.status,
        specie: char.species,
        origin: char.origin.name,
        image: char.image,
    }));

}
