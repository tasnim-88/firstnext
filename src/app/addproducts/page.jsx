"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export default function AddProducts() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = {
      title: e.target.title.value,
      shortDesc: e.target.shortDesc.value,
      fullDesc: e.target.fullDesc.value,
      price: Number(e.target.price.value),
      image: e.target.image.value,
    };

    const res = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      toast.success("Product added successfully!");
      e.target.reset();
    } else {
      toast.error("Error: " + data.message);
    }
  }

  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-full max-w-3xl p-6 shadow-xl rounded-2xl bg-white">
        <h2 className="text-3xl font-bold mb-2">Add New Product</h2>
        <p className="text-gray-500 mb-6">
          Fill in the details below to add a new product to the catalog.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="font-medium">Product Title</label>
            <input name="title" type="text" placeholder="e.g., Premium Wireless Headphones" className="w-full mt-1 border rounded-lg p-3" required/>
          </div>

          <div>
            <label className="font-medium">Short Description</label>
            <textarea name="shortDesc" placeholder="A brief summary of the product" className="w-full mt-1 border rounded-lg p-3" rows={3} />
          </div>

          <div>
            <label className="font-medium">Full Description</label>
            <textarea name="fullDesc" placeholder="Provide detailed information, features, and specs." className="w-full mt-1 border rounded-lg p-3" rows={5} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-medium">Price</label>
              <input name="price" type="number" placeholder="$ 99.99" className="w-full mt-1 border rounded-lg p-3" required/>
            </div>

            
          </div>

          <div>
            <label className="font-medium">Image URL (Optional)</label>
            <input name="image" type="url" placeholder="https://example.com/image.png" className="w-full mt-1 border rounded-lg p-3" />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button type="button" className="border px-4 py-2 rounded-lg">Cancel</button>
            <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              {loading ? "Adding..." : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
