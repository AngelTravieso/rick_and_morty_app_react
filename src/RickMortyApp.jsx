import { CharacterGrid } from "./components";
import { Footer, Header } from "./components/layout";


export const RickMortyApp = () => {
  return (
    <div className='main d-flex flex-column justify-content-between py-1'>
        {/* Header */}
        <Header />

        {/* Grid of Characters */}
        <CharacterGrid />

        {/* Footer */}
        <Footer />
    </div>
  )
}
