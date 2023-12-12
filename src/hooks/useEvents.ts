import { getEvents } from "../repo";
import { useState, useEffect } from "react";
import ApiType from "../repo/events.type";

export const useEvent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [events, setEvents] = useState<ApiType>();
  /*Spazio di memoria in cui caricare gli utenti ricevuti tramite API
  N.B.: inizialmente è un array vuoto */

  /*Il seguente useEffect carica la lista degli utenti all'avvio del componente */
  useEffect(() => {
    getEvents()
      .then((eventsR) => {
        setEvents(eventsR); //Salvo la risposta nello state
        setIsLoading(false); //Imposto isLoading a false perchè il caricamento è terminato
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  }, []); //Mount (perchè l'array è vuoto)

  return { events, isLoading }; //Ritorno un oggetto con le info che servono alla vista
};
