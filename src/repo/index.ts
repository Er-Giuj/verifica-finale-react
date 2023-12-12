import ApiType from "./events.type";

/**
 * Richiesta API
 */
const URLGetEVents = "https://its-events.davide-mantovani.workers.dev/events";

export const getEvents = async (): Promise<ApiType[]> => {
  //Promise<ApiType[]> tipizzazzione risposta
  const res: Response = await fetch(URLGetEVents); //Estraiamo la risposta
  //Se la risposta ha status 200
  if (res.status === 200) {
    const data = (await res.json()) as ApiType[]; //Gestiamo la risposta e tipizziamo json
    return data;
  }
  return [];
};
