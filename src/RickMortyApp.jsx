import { CharacterGrid } from "./components";
import { Footer } from "./components/Footer";


export const RickMortyApp = () => {
  return (
    <div className='mt-4'>
        <h1 className='text-center text-light'>Rick and Morty App</h1>|
        <CharacterGrid />

        <hr />

        <Footer />

    </div>
  )
}
