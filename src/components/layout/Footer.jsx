
const date = new Date().getFullYear();

export const Footer = () => {
  return (
    <div className='flex-1 text-center text-light'>
        <hr className="border border-light border-1 opacity-50"></hr>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p className='m-0'>Design by: Angel Travieso</p>
          <p className='m-0'>	&#64;{ date }</p>
        </div>
    </div>
  )
}
