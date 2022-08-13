import { Spinner } from '../layout';

export const Loading = () => {
  return (
    <div className="mx-auto d-flex flex-column align-items-center">
        <h2 className='text-light mb-3'>Cargando...</h2>
        <Spinner />
    </div>
  )
}
