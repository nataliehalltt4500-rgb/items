import data from '../data.json';
export default function File()
{
    const info = JSON.parse(JSON.stringify(data));
    return <div className="row">
    {
    info.map((object) => 
    <div className="card col-12 col-md-4 m-2" key={Math.random()} style={{width: "18rem"}}>
  <img src={object.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{object.id}</h5>
    <p className="card-text">{object.tags.join(", ")}</p>
    <a href="." className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
    }
    </div>;
}