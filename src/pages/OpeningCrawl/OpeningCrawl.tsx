import { Link } from 'react-router-dom';
import './OpeningCrawl.css';

export const OpeningCrawl = () => {
  return (
    <>
    <div className="star-wars-intro">

    <p className="intro-text">
      Test task...
    </p>

    <h2 className="main-logo">
      <img src="./assets/star-wars-4.svg" />
    </h2>

    <div className="main-content">

      <div className="title-content">
        <p className="content-body">
          After years of galactic silence, I finally finished this task. I implemented it using the following technologies: <br />
          React<br/>
          React Router<br/>
          Tanstack Query<br/>
          Jest and React Testing Library<br/>
        </p>

        <Link to="/characters" className="space-button">See all characters</Link>
      </div>
    </div>
    </div>
    </>
  );
};