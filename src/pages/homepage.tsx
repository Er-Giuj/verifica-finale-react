import { useEvents } from "../hooks/useEvents";
import UserCard from "../components/UseCard";
import '../App.css';
import img from '../assets/sfondo-homepage.jpg'
const HomePage = () => {
  const { events, isLoading } = useEvents();
  //   events = useEvent()
 
  if (isLoading) {
    //Mentre carica vedrò:
    return;
  }
  //Quando avrà caricato:
  return (
    <>
      {/* navbar*/}
      <div className="container-nav">
        <h3 className="text-red-500">Navbar</h3>
      </div>
      {/* Sezione sfondo inziale */}
      <div className="container-img">
        <p>container-img</p>
        <img src={img} alt="Sfondo evento" />
      </div>
      {/* Sezione Lista Eventi*/}
      <div className="container-list">
        <div className="row m-1">
          {events.map((event, index) => {
            //Visualizzerò una card per user iterando nell'array u(user) grazie a key={index}
            return <UserCard key={index} event={event} detailPath={"/detail/"+ event.id}/>
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
