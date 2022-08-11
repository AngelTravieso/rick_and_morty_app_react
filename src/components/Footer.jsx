
const date = new Date().getFullYear();

export const Footer = () => {
  return (
    <div className='text-center text-light'>
        <p>	&#64;{ date }</p>
    </div>
  )
}
