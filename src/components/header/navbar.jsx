import Logo from '../../images/LOGO-Colorido-Black.png';
import './navbar.css';
export default function navbar() {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
        <div className='container-fluid' id='nav-container'>
          <a className='navbar-brand' href='/'>
            <img
              src={Logo}
              alt='Logo do Gaia'
              className='img-fluid'
              id='Logo'
              width='20%'
            />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse justify-content-end'
            id='navbarNavAltMarkup'
          >
            <div className='navbar-nav'>
              <a
                className='nav-link nav-item'
                id='sobre-nav'
                href='sobre-main'
                target='_blank'
                rel='noreferrer'
              >
                Sobre
              </a>
              <a
                className='nav-link nav-item'
                id='catarse-nav'
                href='https://www.catarse.me/gaiaopreludio#about'
                target='_blank'
                rel='noreferrer'
              >
                Catarse
              </a>
              <a
                className='nav-link nav-item'
                id='instagram-nav'
                href='https://www.instagram.com/gaiapreludio/'
                target='_blank'
                rel='noreferrer'
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
{
  /* <Navbar
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
</Navbar> */
}
