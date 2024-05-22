import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="p-2 border rounded"
    >
      <option value="">Filter by</option>
      <option value="name">Product Name</option>
      <option value="price">Price</option>
      <option value="location">Location</option>
      <option value="location">Quantity</option>
    </select>
  );
};

export default Filter;