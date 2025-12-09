import { useState } from "react";
import { addProduct as addProductAPI } from "../../Service/Api";

function AddProduct({ addProduct }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
  });

  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image for the product!");
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("category", formData.category);
    data.append("stock", formData.stock);
    data.append("image", image); // attach the image file

    try {
      const res = await addProductAPI(data); // using Axios API from api.jsx
      console.log("Product added:", res.data);

      // Send the new product to parent component
      addProduct(res.data);

      // Reset form
      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        stock: "",
      });
      setImage(null);
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="p-4">
      <h3>Add Product</h3>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          className="form-control mb-2"
          placeholder="Product Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          required
        />

        <textarea
          className="form-control mb-2"
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        ></textarea>

        <input
          className="form-control mb-2"
          placeholder="Price"
          type="number"
          value={formData.price}
          onChange={(e) =>
            setFormData({ ...formData, price: e.target.value })
          }
          required
        />

        <input
          className="form-control mb-2"
          placeholder="Category"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          required
        />

        <input
          className="form-control mb-2"
          type="number"
          placeholder="Stock"
          value={formData.stock}
          onChange={(e) =>
            setFormData({ ...formData, stock: e.target.value })
          }
          required
        />

        <input
          className="form-control mb-2"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <button className="btn btn-success" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
