import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/homepage";
import "./App.css";
// import HomePage from './pages/HomePages'
// import DetailPage from './pages/DetailPages'

const router = createBrowserRouter([
  {
    path: "/homepage",
    element: <HomePage />,
  },
  {
    path: "",
    element: <HomePage />,
  },
  // {
  //   path: '/detail/:id',
  //   element: < DetailPage />
  // },
  {
    path: "*", //Qualsiasi cosa ci sia scritto
    //element: <h1>404</h1>,  //apri pagina 404 custom
    element: <Navigate to="/" />, //Fallback redirect, naviga alla pagine '/' = HomePage
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
