// HomePage.jsx

import { useEvents } from "../hooks/useEvents";
import UserCard from "../components/UseCard";
import '../App.css';
import img from '../assets/sfondo.jpg'
import img2 from '../assets/images.jpg'

const HomePage = () => {
  const { events, isLoading } = useEvents();

  if (isLoading) {
    return <p>Caricamento...</p>;
  }

  return (
    <>
      {/* navbar*/}
      <div className="container-nav">
        <nav className="navbar d-flex justify-content-start align-items-center">
          <div className="row">
            <a className="navbar-brand" href="/homepage">
              <img src={img2} width="30" height="30" alt="Immagine Logo" className="logo" />
            </a>
          </div>
        </nav>
      </div>
      {/* Sezione sfondo iniziale */}
      <div className="container-img">
        <img src={img} alt="Sfondo evento" />
      </div>
      {/* Sezione Lista Eventi*/}
      <div className="container-list">
        <div className="row m-1">
          {events.map((event, index) => (
            <UserCard key={index} event={event} detailPath={"/detail/" + event.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
