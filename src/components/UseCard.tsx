//Creazione Componente
import {ApiTypeEvents} from "../repo/events.type";
import { Link } from "react-router-dom"

/*Tipizzazione specifica per la card, non essendo utilizzata da altre parti
viene integrata nel file del componente*/
type EventCardType = {
    event:ApiTypeEvents;
    detailPath:string;
}

const UserCard = ({event,detailPath}: EventCardType) => {


    /*Destrutturando l'oggetto user, per estrarre le chiavi da utilizzare 
    N.B.: ci permette di evitare di usare la dot notation (user.first_name)*/
   const {
    name,
    coverImage,
    date,
    dresscode,
    price,
   } = event

   return <>    
<div className="col-sm-4 p-2">
    <Link to={detailPath}>
   <div className="card " >
   <img src={coverImage} className="img-fluid card-img-top" alt={`${name} evento`} />
   <div className="card-body text-start align-items-center ">
    <div className="row pb-1">
        <h5 className="card-title">{name}</h5>
    </div>
    <div className="row pb-1">
        <p className="card-text ">{date}</p>
        </div>
    <div className="row pb-1 ">
        <p className="card-text text-center">{event.description.short}</p>
        </div>
    <div className="row pb-1 align-items-center">
        <div className="col-6">
            <p className="card-text">{dresscode}</p>
        </div>
        <div className="col-6">
            <p className="card-text text-center">{price}€</p>
        </div>
    </div>
     
    </div>
    </div>
 </Link>
 </div>
 </>
  };
  
  export default UserCard
  //  <div className="user-card p-[20px]">
  //  return <div className="card">
  //   <img src="" alt="" />
  //  <img className="w-4" src={coverImage} alt={`${name} event`} />
  //  <div className="px-6 py-4">
  //    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
  //    <p className="text-gray-700 text-base">
  //      {`${event.description.short}`}
  //    </p>
  //  </div>
  //  </div>
//     <div className="div-center">
//         <img src={avatar} alt={`${first_name} ${last_name} avatar`}/>
//             <button onClick={() => setExpanded(!expanded)}>i</button>      
//     </div>
//     <h2>{first_name} {last_name}</h2>
//     {expanded && <h3>{`(${date_of_birth})`}</h3>}
//     {expanded && <h3><a href={`mailto:${email}`}>{email}</a></h3>}       
//     {expanded && <h3>{gender}</h3>}
//     {expanded && <Link to={detailPath}><button>More</button></Link>}
// </div>