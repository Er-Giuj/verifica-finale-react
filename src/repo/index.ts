import {ApiTypeEvent,ApiTypeEvents} from "./events.type";
import dayjs from "dayjs";
/**
 * Richiesta API
 */
const URLGetEVents = "https://its-events.davide-mantovani.workers.dev/events";

export const getEvents = async (): Promise<ApiTypeEvents[]> => {
  //Promise<ApiType[]> tipizzazzione risposta
  const res: Response = await fetch(URLGetEVents); //Estraiamo la risposta
  //Se la risposta ha status 200
  if (res.status === 200) {
    const data = (await res.json()) as ApiTypeEvents[]; //Gestiamo la risposta e tipizziamo json
    return data;
  }
  return [];
};

export const getDetailEvent = async (id:number): Promise<ApiTypeEvent | null> => {
  //Promise<ApiType[]> tipizzazzione risposta
  const res: Response = await fetch(URLGetEVents+'/'+id); //Estraiamo la risposta
  //Se la risposta ha status 200
  if (res.status === 200) {
    const object = (await res.json()) as ApiTypeEvent; //Gestiamo la risposta e tipizziamo json
    // creato un oggetto dayjs della date
    const data = dayjs(object.date);
    // formattiamo la data secondo un format da noi scelto
    object.data = data.format('DD/MM/YYYY').toString();
    // creiamo un array dove immettere le 'ore/minuti' per poi pushare il tutto dentro l'object
    let array = [];
    array.push(data.format('HH:mm').toString());
    // variabile per riepire i 6 slot temporali che possono essere mostrati
    let count:number=15; 
    for(let i=1;i < 6;i++){
      array.push(data.add(count,'m').format('HH:mm').toString());
      count = count+15;
    }
    // pushamo l'array contenete le informazioni dentro al ritorno dell'object per poterle usare in altri file
    object.slotOrari = array;
    return object;
  }
  return null;
};
