import './App.css';
import Navbar from'./pages/Navbar';
import Home from'./pages/Home';
import Add from'./pages/Add';

import { createBrowserRouter ,RouterProvider} from 'react-router-dom';

function App() {
   const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><header className='App-header'><Home/></header></>
    },
    {
      path:"/add",
      element:<><Navbar/><header className='App-header'><Add/></header></>
     },

    ]);
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;