import File from './file.jsx';
import '../App.css';
import { useNavigate,Link } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  return (
    <div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <File /> 
        

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/add" className="btn btn-info m-2">Add Items</Link>
        <button className="btn btn-success m-2" onClick={() => navigate('/add')}>Add New Item</button>
      </div>
  );
}

export default Home;