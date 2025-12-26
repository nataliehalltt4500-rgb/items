import data from '../data.json';
function Add() {
  async function addItems() {
    const x = {
      name: document.getElementById('name').value,
      image: document.getElementById('image').value,
      tags: document.getElementById('tags').value.split(',').map(tag => tag.trim())
    };
    console.log(x);
    data.push({
      id: x.name,
      image: x.image,
      tags: x.tags
    });
    console.log('Updated data:', data);
    // Clear the form
    document.getElementById('name').value = '';
    document.getElementById('image').value = '';
    document.getElementById('tags').value = '';
  }
  return (
    <div className="bg-light card text-dark col-md-8 mx-2 container">
      <div className="row my-3">
  <label htmlFor="name" className="form-label col-3">Enter Name</label>
  <input type="text" className="form-control col" id="name" />
</div>
<div className="row my-3">
  <label htmlFor="image" className="form-label col-3">Image Link</label>
  <input type="url" className="form-control col" id="image" />
</div>
<div className="row my-3">
  <label htmlFor="tags" className="form-label col-3">Enter Tags</label>
  <textarea className="form-control col" id="tags" rows="3" placeholder="Enter tags separated by commas"></textarea>
</div>
<div className="text-center mt-3">
  <button type="submit" className="btn btn-primary" onClick={addItems}>Submit</button>
</div>
    </div>
  );
}

export default Add;