import data from '../data.json';
function Delete() {
  async function deleteItem() {
    const nameToDelete = document.getElementById('name').value;
    console.log('Deleting item with name:', nameToDelete);
    const index = data.findIndex(item => item.id === nameToDelete);
    if (index !== -1) {
      data.splice(index, 1);
      console.log('Updated data:', data);
      // Clear the form
      document.getElementById('name').value = '';
    } else {
      console.log('Item not found');
    }
  }
  return (
    <div className="bg-light card text-dark col-md-8 mx-2 container">
      <div className="row my-3">
        <label htmlFor="name" className="form-label col-3">Enter Name to Delete</label>
        <input type="text" className="form-control col" id="name" />
      </div>
      <div className="text-center mt-3">
        <button type="submit" className="btn btn-danger" onClick={deleteItem}>Delete</button>
      </div>
    </div>
  );
}

export default Delete;