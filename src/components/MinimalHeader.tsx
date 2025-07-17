
import { Link } from 'react-router-dom';
import logo from './images/Name Logo.png';

const MinimalHeader = () => {
  return (
    <header className="bg-white py-4 border-b">
      <div className="container mx-auto flex justify-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-28 h-auto" />
        </Link>
      </div>
    </header>
  );
};

export default MinimalHeader;
