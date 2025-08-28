
import React, { useEffect, useState } from "react";
import CartRow from "./CartRow";
import { getProductData } from "./api";

export default function CartList({ cart, onRemove, onUpdate }) {
  const [items, setItems] = useState([]);
  const productIds = Object.keys(cart);

  useEffect(() => {
    if (productIds.length === 0) {
      setItems([]);
      return;
    }
    const promises = productIds.map((id) => getProductData(id));
    Promise.all(promises).then((responses) => {
      setItems(responses.map((res) => res.data));
    });
  }, [cart]);

  function handleQuantityChange(productId, newValue) {
    onUpdate(productId, newValue);
  }

  return (
     <div className="flex min-w-[700px]">
    <table className="cart-list-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) =>
          <CartRow
            key={item.id}
            item={item}
            quantity={cart[item.id]}
            onRemove={onRemove}
            onQuantityChange={handleQuantityChange}
          />
        )}
      </tbody>
        <tfoot className="bg-gray-700">
        <tr>
          <td colSpan="5">
            <div className="flex items-center gap-3 mt-6 px-4 pb-4">
              <input
                type="text"
                placeholder="Coupon code"
                className="border px-4 py-2 rounded w-44"
              />
              <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
                APPLY COUPON
              </button>
              <button
                className="bg-gray-300 font-bold text-blue-700 px-6 py-2 rounded ml-auto hover:bg-blue-700 hover:text-gray-300"
                disabled
              >
                UPDATE CART
              </button>
            </div>
          </td>
        </tr>
      </tfoot>

    </table>
  </div>
  );
}
