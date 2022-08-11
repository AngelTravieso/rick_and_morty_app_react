

export const CharacterGridItem = ({ name, image, status, specie, origin }) => {

  const statusClass = status == 'Alive' ? 'text-bg-success' : status == 'Dead' ? 'text-bg-danger' : 'text-bg-secondary';

  return (
  <div className='card mb-3 bg-dark'>
    <div className='row g-0'>
      <div className='col-12 col-lg-4'>
        <img src={ image } className='img-fluid rounded-start' alt={ name } />
      </div>
      <div className='col-md-8'>
        <div className='card-body'>
          <h5 className='card-title text-light text-center text-lg-start'>{ name }</h5>
          <p className='m-0 text-light text-center text-lg-start'><span className={`badge rounded-pill text-light ${statusClass} me-2`}>
          { status }
          </span>
           - { specie }
          </p>
          <small className='text-muted fs-6 d-block text-center text-lg-start'>{ origin }</small>
        </div>
      </div>
    </div>
  </div>
  )
}
