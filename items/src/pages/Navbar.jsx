import {Link} from 'react-router-dom';
export default function Navbar() {
    return ( <>
    <nav className="navbar bg-primary text-white">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
    <Link className="nav-link" to="/Add">Add Items</Link>
    <Link className="nav-link" to="/">Pricing</Link>
   <div className="dropdown"> <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown link</Link>
        <ul className="dropdown-menu dropdown-menu-dark mt-3">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
        </ul></div>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-warning" type="submit">Search</button>
    </form>
  </div>
</nav>
</>);
}
