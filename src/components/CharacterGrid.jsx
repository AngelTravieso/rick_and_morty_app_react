import { CharacterGridItem } from '../components';
import { useFetchCharacter } from './hooks/useFetchCharacter';

export const CharacterGrid = () => {

    const { characters, isLoading } = useFetchCharacter();

  return (
    <>
        <p className='text-center h3 text-light'>Characters</p>

        <hr />

        {
            isLoading && ( <h2 className='text-light'>Cargando...</h2> )
        }

        <div className='d-flex flex-wrap mt-4'>
            <div className="row">
            {
                characters.map((char) => (
                    <div className='col-12 col-md-6 col-lg-4 col-xl-3 pt-2' key={char.id}>
                        <CharacterGridItem
                        {...char}
                    />
                </div>
                ))
            }
            </div>
        </div>
    </>
  )
}
