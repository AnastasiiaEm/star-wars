import { Link } from 'react-router-dom';
import './logo.css';

export const Logo = () => {
  return (
    <Link  to="/characters" className="logo">
      <img
        src={'/assets/star-wars-4.svg'}
        alt="LOGO"
        className="logo__img"
      />
    </Link>
  );
};