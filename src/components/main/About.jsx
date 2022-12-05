import Icone from '../../img/Ícone-LOGO-1.png';

export default function About() {
  return (
    <main>
      <div className='md:p-10 md:h-screen'>
        <h1 className='text-3xl md:text-5xl text-center'>Sobre o Projeto</h1>
        <div className='md:flex p-5 md:my-36'>
          <img
            src={Icone}
            className='md:ml-48 mx-auto w-48 md:w-96 md:h-auto rounded-lg'
            alt=''
          />
          <span className='mx-3'>
            <ul className='list-disc'>
              <li className='md:text-3xl mx-5 my-7 md:my-0'>
                fodafodafodafodafodafodafodafodafoda
              </li>
              <li className='md:text-3xl mx-5 my-7 md:my-0'>foda</li>
              <li className='md:text-3xl mx-5 my-7 md:my-0'>foda</li>
              <li className='md:text-3xl mx-5 my-7 md:my-0'>foda</li>
              <li className='md:text-3xl mx-5 my-7 md:my-0'>foda</li>
            </ul>
          </span>
        </div>
      </div>
    </main>
  );
}
