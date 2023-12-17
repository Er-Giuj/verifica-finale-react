import { useEvent } from "../hooks/UseEvent";
import { useState } from "react";
import img from '../assets/images.jpg'
import '../App.css';

const PageDetail = () => {
  const { event, isLoading } = useEvent();
  // const [formVisible, setFormVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const openForm = (slot:any) => {
    setSelectedSlot(slot);
    setModalVisible(true);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Puoi inserire qui la logica per inviare il modulo al server
    // e poi mostrare la modale di successo.
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedSlot(null);
    setModalVisible(false);
  };

  if (isLoading) {
    // Mentre carica vedrò:
    return <h1>sta caricando</h1>;
  }

  return (
    <>
      <div className="container-fluid ">
        {/* Sezione Navbar*/}
        <div className="container-nav">
          <nav className="navbar navbar-dark">
            <a className="navbar-brand" href="/homepage">
              <img src={img} width="30" height="30" alt="" />
            </a>
          </nav>
        </div>
        {/* Sezione Nome Evento*/}
        <div className="container bg-light">
          <div className="row justify-content-center align-items-center">
            <h2 className="text-center ">
              {event?.name}
            </h2>
          </div>
        </div>
        {/* Sezione Immagine Sfondo / Prezzo / Data */}
        <div className="container">
          <div className="row">
            {/* Immagine */}
            <div className="col-lg-8">
              <img src={event?.coverImage} alt={`${event?.name} immagine`} className="img-fluid" />
            </div>
            {/* Prezzo / Data (dare Background alla parte bianca che c'è tra le due row*/}
            <div className="col-lg-4 d-flex align-items-center flex-column justify-content-around">
              <div className="row">
                <h3 className="text-danger">Short Description</h3>
                <h4 className="bold">{event?.description.short}</h4>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6 text-start">
                  Price: {event?.price}€
                </div>
                <div className="col-lg-6 text-end">
                  Data:{event?.data}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sezione Tag / Dresscode */}
        {event?.slotOrari.map((slot) => (
          <div key={slot}>
            <button className="btn btn-primary" onClick={() => openForm(slot)}>
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
                {modalVisible && (
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
    </>
  );
};

export default PageDetail;
