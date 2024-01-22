import logo from '../assets/logo.jpeg'
import '../styles/Banner.css'

function Banner() {
    const title = 'Excello - Platerforme de tests en ligne'
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='Excello - Platerforme de tests en ligne' className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )
}

export default Banner