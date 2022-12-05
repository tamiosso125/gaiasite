import Whitelogo from '../../img/SIMBOLO-Colorido-Black.png';
import BlackLogo from '../../img/LOGO-Colorido-Black.png';
import Card from './Card';
import { useEffect, useState } from 'react';

export default function Team() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <div className='md:h-screen'>
      <h1 className='text-3xl md:text-5xl text-center md:my-32'>Equipe</h1>
      <div className='grid md:grid-cols-4 my-46'>
        {windowSize.innerWidth >= 840 ? (
          <>
            <Card image={Whitelogo} />
            <Card image={BlackLogo} />
          </>
        ) : (
          <Card image={Whitelogo} />
        )}
      </div>
    </div>
  );
}
