import './App.css';
import Navbar from'./pages/Navbar';
import Home from'./pages/Home';
import Add from'./pages/Add';
import Edit from'./pages/Edit';
import Delete from'./pages/Delete';

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
     {
      path:"/edit/:name",
      element:<><Navbar/><header className='App-header'><Edit/></header></>
     },
     {
      path:"/delete/:name",
      element:<><Navbar/><header className='App-header'><Delete/></header></>
     },
    ]);
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;