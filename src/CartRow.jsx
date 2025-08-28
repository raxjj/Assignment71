

import React from "react";

export default function CartRow({ item, quantity, onRemove, onQuantityChange }) {
  const price = typeof item.price === "number" ? item.price : 0;
  const subtotal = (price * quantity).toFixed(2);

  function handleRemove() {
    onRemove(item.id);
  }

  function handleInputChange(event) {
    const newValue = +event.target.value;
    onQuantityChange(item.id, newValue);
  }

  return (
    <tr className="border-b bg-gray-300">
      <td className="p-4 text-center">
        <div className="border-2 rounded-full border-red-700 hover:bg-red-400 w-5 h-5 text-center">
          <button
            className="text-gray-500 hover:text-white w-[18px] rounded-full"
            onClick={handleRemove}
          >
            X
          </button>
        </div>
      </td>
      <td className="flex items-center gap-4 p-4">
        <img
          src={item.thumbnail}
          alt={item.title ?? "Product"}
          className="w-16 h-16 rounded bg-white"
        />
        <span className="text-gray-900 font-semibold">{item.title ?? "Product"}</span>
      </td>
      <td className="p-4 text-center">${price.toFixed(2)}</td>
      <td className="p-4 text-center">
        <input
          type="number"
          className="w-14 border rounded text-center"
          value={quantity}
          min={1}
          onChange={handleInputChange}
        />
      </td>
      <td className="p-4 text-center font-semibold">${subtotal}</td>
    </tr>
  );
}
