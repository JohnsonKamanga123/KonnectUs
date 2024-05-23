import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";


const ProductForm = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault( );
    const newProduct = {
      name: productName,
      price: price,
      location: location,
      quantity: quantity,
      image:image,

    };
    setProducts([...products, newProduct]);
    setProductName("");
    setPrice("");
    setLocation("");
    setQuantity("");
    setImage(null);
  };

  const handleDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };



  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

const handleEdit = (index) => {
}

  return (
    <div>
      <NavBar></NavBar>
      <div flex flex-center>
    <div className="container mx-auto">
    
      <form onSubmit={handleSubmit} className="mt-8bg-white w-full h-3/4 p-6 m-8 rounded-lg">
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2">
            Product Name
          </label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2">
            Price
          </label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2">
            Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2">
            Quantity
          </label>
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black  text-sm font-bold mb-2">
            Product Image
          </label>
          <input
            type="file"
            onChange={handleImageChange}
            className="shadow appearance-none border aspect-square w-70 py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
        />
        </div>
        <button
          type="submit"
          className=" bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Product
        </button>
      </form>
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4">Products</h2>
        <ul className="flex flex-row">
          {products.map((product, index) => (
            <li key={index} className="mb-2">
              {product.name} - K{product.price} - {product.location} -{" "}
              {product.quantity}
              <button
                onClick={() => handleDelete(index)}
                className="ml-2 text-sm text-black"
              >
                Delete
              </button>
            </li>
          ))}
          <li className="ml-2 text-black">
            <NavLink to = "/product listing/EditPost" >
            <button>Edit</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
    </div>
    </div>
  );
};

export default ProductForm;