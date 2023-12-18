import { useEvent } from "../hooks/UseEvent";
import { useState } from "react";
import img from '../assets/images.jpg'
import '../App.css';

const PageDetail = () => {
  const { event, isLoading } = useEvent();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  // logica tags
  let tags = event?.tags.join(' ');
  // logica Included_Drinks/Dishes
  let includedDrinks = event?.includedDrinks.join(' ');
  if(event?.isAperitivoIncluded == true){
    // let includedDishes = event.includedDishes[0];
  }
  const openForm = (slot:any) => {
    setSelectedSlot(slot);
    setModalVisible(true);
    setFormSubmitted(false); // Resetta il flag quando il form viene aperto
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Puoi inserire qui la logica per inviare il modulo al server
    setTimeout(() => {
      setFormSubmitted(true);
      setModalVisible(true);
    }, 1000); 
  };

  const closeModal = () => {
    setSelectedSlot(null);
    setModalVisible(false);
    setFormSubmitted(false); // Resetta il flag quando il form viene aperto
  };

  if (isLoading) {
    // Mentre carica vedrò:
    return <h1>sta caricando</h1>;
  }

  return (
    <>
    <div className="container-content">
      <div className="container-fluid ">
        {/* Sezione Navbar*/}
        <div className="container-nav">
        <nav className="navbar d-flex justify-content-start align-items-center">
          <div className="row">
            <a className="navbar-brand" href="/homepage">
              <img src={img} width="30" height="30" alt="Immagine Logo" className="logo" />
            </a>
          </div>
        </nav>
        </div>
        {/* Sezione Nome Evento*/}
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <h2 className="text-center bald">
              {event?.name}
            </h2>
          </div>
        </div>
        {/* Sezione Immagine Sfondo / Prezzo / Data */}
        <div className="container">
          <div className="row">
            {/* Sezione Immagine */}
            <div className="col-lg-8">
              <img src={event?.coverImage} alt={`${event?.name} immagine`} className="img-fluid" />
            </div>
            {/* Sezione Prezzo / Data*/}
            <div className="col-lg-4 d-flex align-items-center flex-column justify-content-around">
              <div className="row">
                <h3 className="text-orange">Short Description</h3>
                <h4 className="bold">{event?.description.short}</h4>
              </div>
              <div className="row align-items-center text-center">
                <div className="col-sm-12 col-lg-6  text-lg-start text-sm-center">
                  {/* <h3><p className="text-orange">Price: </p>{event?.price}€</h3> */}
                  <h3 className="d-flex align-items-center justify-content-center ">
                    <span className="text-orange">Price: </span>
                    <span className="ms-2">{event?.price}€</span>
                  </h3>
                </div>
                <div className="col-sm-12 col-lg-6 text-lg-end">
                <h3 className="d-flex align-items-center justify-content-center ">
                    <span className="text-orange">Data: </span>
                    <span className="ms-2">{event?.data}</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sezione Tag / Dresscode */}
        <div className="container mt-sm-2 mt-lg-4">
          <div className="row">
            {/* Sezione Tag */}
            <div className="col-6">
              <h5 className="text-orange">Tags:</h5>
              <h4>{tags}</h4>
            </div>
            {/* Sezione Dresscode */}
            <div className="col-6">
              <h5 className="text-orange">Dresscode:</h5>
              <h4>{event?.dresscode}</h4>
            </div>
          </div>
        </div>
        {/* Sezione Drink / Dishesh */}
        {event?.isAperitivoIncluded && (
          <div className="container mt-sm-2 mt-lg-4">
            <div className="row">
              <div className="col-sm-12 col-lg-12">
                <h5 className="text-orange">Drinks:</h5>
                <h4>{includedDrinks}</h4>
              </div>
              {event?.includedDishes && (
                <div className="col-sm-12 col-lg-12 mt-sm-2">
                  <h5 className="text-orange">Dishes:</h5>
                  <h4 className="bald">{event?.includedDishes[0].name}</h4>
                  <h4 className="bald">{event?.includedDishes[0].description}</h4>
                  <h4 className="d-flex align-items-center justify-content-center ">
                    <span className="text-orange">Allergens: </span>
                    <span className="ms-2">{event?.includedDishes[0].allergens[0]}</span>
                    <span className="ms-2">{event?.includedDishes[0].allergens[1]}</span>
                    <span className="ms-2">{event?.includedDishes[0].allergens[2]}</span>
                  </h4>
                </div>
              )}
            </div>
          </div>
        )}
        {/* Sezione Slot Temporali */}

<div className="container">

                
        {event?.slotOrari.map((slot,index) => (
          <div key={slot} className={`col-lg-6 col-sm-12 mb-2 ${index % 2 === 0 ? 'start-new-row' : ''}`}>

            <button className="btn btn-primary " onClick={() => openForm(slot)}>
              {slot}
            </button>


            {selectedSlot === slot && (
              <div>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Inserisci l'email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" className="form-control" id="name" placeholder="Inserisci il nome" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="surname">Cognome:</label>
                    <input type="text" className="form-control" id="surname" placeholder="Inserisci il cognome" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="number">Numero:</label>
                    <input type="cell" className="form-control" id="number" placeholder="Inserisci il numero" />
                  </div>
                  <button type="submit" className="btn btn-success">
                    Invia
                  </button>
                </form>

                {/* Modal di successo */}
                {modalVisible && formSubmitted && (
                  
                  <div className="modal" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Prenotazione avvenuta con successo</h5>
                          <button type="button" className="close" onClick={closeModal}>
                            <span>&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          La tua prenotazione è stata confermata con successo.
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-primary" onClick={closeModal}>
                            Chiudi
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
        </div>
    </>
  );
};

export default PageDetail;
