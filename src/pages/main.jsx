import Media from '../components/footer/Media';
import Navbar from '../components/header/NavBar';
import About from '../components/main/About';
import Team from '../components/main/Team';
import Video from '../components/main/Video';
export default function Main() {
  return (
    <div>
      <Navbar />
      <Video />
      <About />
      <Team />
      <Media />
    </div>
  );
}
