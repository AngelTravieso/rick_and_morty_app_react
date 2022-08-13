import { Loading, Paginator } from './layout'
import { CharacterGridItem } from '../components';
import { useFetchCharacter } from '../hooks/useFetchCharacter';

export const CharacterGrid = () => {

    const { characters, isLoading } = useFetchCharacter();

  return (
    <div className='d-flex flex-column h-100 justify-content-center flex-3'>
        { isLoading ? 
            ( <Loading /> )
            : (
                <div className='d-flex justify-content-center flex-wrap mt-4'>
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
                    {/* Paginador */}
                    <Paginator />
                </div>
            )
        }
    </div>
  )
}
