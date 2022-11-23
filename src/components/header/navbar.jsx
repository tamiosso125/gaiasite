import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../images/LOGO-Colorido-Black.png';
import Catarse from '../../images/logo-h-cor-positivo.png';
import './navbar.css';
export default function navbar() {
  return (
    <Navbar
      bg='light'
      expand='lg'
      className='navbar navbar-expand-lg fixed-top'
    >
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          <img
            src={Logo}
            alt='Logo do Gaia'
            className='img-fluid'
            width='20%'
          />
        </a>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a
              target='_blank'
              className='nav-link active'
              href='https://www.catarse.me/gaiaopreludio#about'
              rel='noreferrer'
            >
              Catarse
            </a>
          </li>
          <li className='nav-item'>
            <a target='_blank' className='nav-link' href='/'>
              Regras
            </a>
          </li>
          <li className='nav-item'>
            <a
              target='_blank'
              className='nav-link'
              href='https://www.instagram.com/gaiapreludio/'
              rel='noreferrer'
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </Navbar>
  );
}
