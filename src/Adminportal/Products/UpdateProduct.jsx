import { useState } from "react";

function    UpdateProduct( {product , onUpdate })
{       const  [formData, setFormData]=useState(product);

    const handleChange=(e)=>
    {
       setFormData({...formData, [e.target.name]:e.target.value})

    }

     const handleSubmit=(e)=>{
        e.preventDefault();
      onUpdate(formData);
     }
    return(
       <form onSubmit={handleSubmit} className="p-3 border rounded">
      <h4>Update Product</h4>

      <input
        type="text"
        name="name"
        className="form-control mb-2"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="category"
        className="form-control mb-2"
        value={formData.category}
        onChange={handleChange}
      />

      <input
        type="text"
        name="price"
        className="form-control mb-2"
        value={formData.price}
        onChange={handleChange}
      />

      <button className="btn btn-primary">Update</button>
    </form>

    );
   
}
export default UpdateProduct;