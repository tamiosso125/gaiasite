import { useState } from 'react';
import Whitelogo from '../img/LOGO-Colorido-White.png';
import Mobile from '../img/navicon-round.png';
import Icone from '../img/Ícone-LOGO-1.png';
import MobileClose from '../img/android-close.svg';
export default function Main() {
  const [icon, setIcon] = useState(Mobile);
  const [isActive, setIsActive] = useState(true);

  const MenuMobile = () => {
    if (icon === Mobile) {
      setIcon(MobileClose);
      setIsActive(false);
    } else {
      setIcon(Mobile);
      setIsActive(true);
    }
  };

  return (
    <div>
      <header>
        <nav className='p-6 bg-zinc-700 shadow md:flex md:items-center md:justify-between'>
          <div className='flex justify-between item-center'>
            <span className='cursor-pointer'>
              <img className='h-12 inline' src={Whitelogo} alt='Logo do Gaia' />
            </span>
            <span className='text-3xl cursor-pointer mx-2 md:hidden block '>
              <img
                src={icon}
                alt='icone barra de navegação versão mobile'
                className='h-12'
                onClick={MenuMobile}
              />
            </span>
          </div>
          {isActive ? (
            <ul className='md:flex md:items-center z-[1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] trasition-all ease-in duration-500'>
              <li className='mx-3 my-6 md:my-0'>
                <a
                  className='text-2xl text-cyan-50 hover:text-fuchsia-600 hover:text-3xl duration-500'
                  href='/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Sobre
                </a>
              </li>
              <li className='mx-3 my-6 md:my-0'>
                <a
                  className='text-2xl text-cyan-50 hover:text-fuchsia-600 hover:text-3xl duration-500'
                  href='/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Equipe
                </a>
              </li>
              <li className='mx-3 my-6 md:my-0'>
                <a
                  className='text-2xl text-cyan-50 hover:text-fuchsia-600 hover:text-3xl duration-500'
                  href='/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  O Mundo
                </a>
              </li>
              <li className='mx-3 my-6 md:my-0'>
                <a
                  className='text-2xl text-cyan-50 hover:text-fuchsia-600 hover:text-3xl duration-500'
                  href='/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Contatos
                </a>
              </li>
            </ul>
          ) : (
            <ul className='md:flex md:items-center z-[1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 trasition-all ease-in duration-500 top-[80px] opacity-100 bg-zinc-700'>
              <li className='mx-3 my-6 md:my-0'>
                <a
                  className='text-2xl text-cyan-50 hover:text-fuchsia-600 hover:text-3xl duration-500'
                  href='/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Sobre
                </a>
              </li>
              <li className='mx-3 my-6 md:my-0'>
                <a
                  className='text-2xl text-cyan-50 hover:text-fuchsia-600 hover:text-3xl duration-500'
                  href='/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Equipe
                </a>
              </li>
              <li className='mx-3 my-6 md:my-0'>
                <a
                  className='text-2xl text-cyan-50 hover:text-fuchsia-600 hover:text-3xl duration-500'
                  href='/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  O Mundo
                </a>
              </li>
              <li className='mx-3 my-6 md:my-0'>
                <a
                  className='text-2xl text-cyan-50 hover:text-fuchsia-600 hover:text-3xl duration-500'
                  href='/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Contatos
                </a>
              </li>
            </ul>
          )}
        </nav>
      </header>
      <main>
        <div className='p-10'>
          <h1 className='text-5xl text-center'>Sobre o Projeto</h1>
          <div className='flex p-5'>
            <img src={Icone} className='w-96 h-auto rounded-lg' alt='' />
            <span className='mx-3'>
              <ul className='list-disc'>
                <li className='text-3xl mx-5 my-7 md:my-0'>
                  fodafodafodafodafodafodafodafodafoda
                </li>
                <li className='text-3xl mx-5 my-7 md:my-0'>foda</li>
                <li className='text-3xl mx-5 my-7 md:my-0'>foda</li>
                <li className='text-3xl mx-5 my-7 md:my-0'>foda</li>
                <li className='text-3xl mx-5 my-7 md:my-0'>foda</li>
              </ul>
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
