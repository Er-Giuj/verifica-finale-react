import { useEvent } from "../hooks/useEvents";
const HomePage = () => {
  const { events, isLoading } = useEvent();
  //   events = useEvent()
  console.log(events);
  if (isLoading) {
    //Mentre carica vedrò:
    return;
  }
  //Quando avrà caricato:
  return (
    <>
      <h2>HomePage</h2>
    </>
  );
};

export default HomePage;
