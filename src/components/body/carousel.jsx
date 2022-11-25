import Logo from '../../images/LOGO-Colorido-Black.png';
import Logo2 from '../../images/SIMBOLO-Colorido-White.png';
import Logo3 from '../../images/Logo.jpg';
import './carousel.css';
export default function carousel() {
  return (
    <main>
      <div className='container-fluid'>
        <div
          id='carouselExampleCaptions'
          className='carousel slide'
          data-bs-ride='carousel'
        >
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='0'
              className='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='2'
              aria-label='Slide 3'
            ></button>
          </div>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img
                src={Logo}
                className='d-block w-100'
                alt='Raças do projeto'
              />
              <div className='carousel-caption d-none d-md-block'>
                <h5>Raças</h5>
                <p>TEXTO</p>
              </div>
            </div>
            <div className='carousel-item'>
              <img
                src={Logo2}
                className='d-block w-100'
                alt='Caminhos do projeto'
              />
              <div className='carousel-caption d-none d-md-block'>
                <h5>Caminhos</h5>
                <p>TEXTO</p>
              </div>
            </div>
            <div className='carousel-item'>
              <img
                src={Logo3}
                className='d-block w-100'
                alt='Mecanicas do projeto'
              />
              <div className='carousel-caption d-none d-md-block'>
                <h5>Mecanicas</h5>
                <p>TEXTO</p>
              </div>
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    </main>
  );
}
