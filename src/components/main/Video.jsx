import Teaser from '../../img/GAIA_PV_COMPLETO.mp4';
import Icone from '../../img/Ícone-LOGO-1.png';

export default function Video() {
  return (
    <div className='p-10'>
      <video controls>
        <source src={Teaser} />
      </video>
    </div>
  );
}
