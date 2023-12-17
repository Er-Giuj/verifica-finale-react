import { getDetailEvent} from "../repo";
import { useState, useEffect } from "react";
import {ApiTypeEvent }from "../repo/events.type";
import { useParams } from "react-router-dom";

export const useEvent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [event, setEvent] = useState<ApiTypeEvent | null>();
  const {id} = useParams<string>();
  let idChecked:number;
  if(id){
    idChecked = parseInt(id);
  }
  /*Il seguente useEffect carica la lista degli utenti all'avvio del componente */
  useEffect(() => {
    getDetailEvent(idChecked)
      .then((eventR) => {
        setEvent(eventR); //Salvo la risposta nello state
        setIsLoading(false); //Imposto isLoading a false perchè il caricamento è terminato
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  }, []); //Mount (perchè l'array è vuoto)
  
  return { event, isLoading}; //Ritorno un oggetto con le info che servono alla vista
};
