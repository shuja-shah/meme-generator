import trollFace from '../Assets/trollFace.png';

const Header = () => (
  <header>
    <div className="header">
      <img className="troll" src={trollFace} alt="Problem?" />
      <h2>Meme Generator</h2>
    </div>
  </header>
);
export default Header;
