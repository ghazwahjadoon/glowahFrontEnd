function ProductList({ products , DeleteProduct, UpdateProduct } ) {
  return (
    <div className="p-4">
      <h3>Product List</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
           
            <th>Product</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              
              <td>{p.name}</td>
              <td>{p.description || "-"}</td>
              <td>{p.category}</td>
              <td>{p.price}</td>
              <td>{p.stock}</td>
              <td><button type="button" className="btn btn-danger" onClick={()=>DeleteProduct(p._id)}>Delete</button>
             <button type="button" className="btn btn-success mx-3" onClick={()=>UpdateProduct(p)} >Update</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
