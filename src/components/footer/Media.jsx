import BlackLogo from '../../img/LOGO-Colorido-Black.png';
import Facebook from '../../img/logo-facebook.svg';
import Instagram from '../../img/logo-instagram.svg';
import Youtube from '../../img/logo-youtube.svg';

export default function Media() {
  return (
    <footer className='p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900'>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <a
          href='https://www.catarse.me/gaiaopreludio#about'
          className='flex items-center mb-4 sm:mb-0'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={BlackLogo}
            className='mr-3 h-16'
            alt='Gaia, O Prelúdio Logo'
          />
        </a>
        <ul className='flex space-x-6 items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400'>
          <li>
            <a
              href='https://www.facebook.com/'
              className='mr-4 md:mr-6'
              target='_blank'
              rel='noreferrer'
            >
              <img className='h-12' src={Facebook} alt='Facebook Logo' />
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/'
              className='mr-4 md:mr-6'
              target='_blank'
              rel='noreferrer'
            >
              <img className='h-12' src={Instagram} alt='Instagram Logo' />
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/'
              className='mr-4md:mr-6 '
              target='_blank'
              rel='noreferrer'
            >
              <img className='h-12' src={Youtube} alt='Youtube Logo' />
            </a>
          </li>
        </ul>
      </div>
      <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
      <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        Todos Os Direitos Reservados ® 2022 Gaia, O Prelúdio
      </span>
    </footer>
  );
}
