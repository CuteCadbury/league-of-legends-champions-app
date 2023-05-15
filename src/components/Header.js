import lolLogo from '../logos/lolLogo.png'

const Header = ({ slogan }) => {
  return (
    <div className='headerContainer'>
      <img src={lolLogo} className='lolLogo' alt=''/>
      <img src={slogan} className='slogan' alt=''/>
    </div>
  )
}

export default Header


