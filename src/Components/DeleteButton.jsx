"use client";

import { FaRegTrashCan } from "react-icons/fa6";
import { toast } from "react-toastify";

export default function DeleteButton({ id, onDeleted }) {
    const handleDelete = async () => {
        try {
            const res = await fetch(`http://localhost:3001/products/${id}`, {
                method: "DELETE",
            });

            const data = await res.json();

            if (data.deletedCount > 0) {
                toast.success("Product deleted successfully!");
                if (onDeleted) onDeleted(id); // callback to update UI
            } else {
                toast.error("Delete failed!");
            }
        } catch (err) {
            toast.error("Something went wrong!");
        }
    };

    return (
        
        <button onClick={handleDelete} className="btn btn-ghost btn-xs"><FaRegTrashCan size={20} /></button>
    );
}
