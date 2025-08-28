
import React, { useEffect, useState } from "react";
import CartList from "./CartList";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { getProductData } from "./api";
import EmptyCart from "./emptyCart";

export default function CartPage({ cart = {}, onRemove, onUpdate }) {
  const productIds = Object.keys(cart);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productIds.length === 0) {
      setTotal(0);
      setLoading(false);
      return;
    }
    const promises = productIds.map((id) => getProductData(id));
    Promise.all(promises).then((responses) => {
      const products = responses.map((res) => res.data);
      const totalValue = products.reduce((prev, curr) => prev + curr.price * cart[curr.id], 0);
      setTotal(totalValue);
      setLoading(false);
    });
  }, [cart]);

  if (loading) return <div>.....loading.... </div>;
  

  if(productIds.length==0){
    return(
      <>
      <Link to ="./cartempty">
        <EmptyCart/>
      </Link>
      
      </>
    )
  }
  return (
    <div className="cart-page px-10 py-10 min-h-screen bg-gray-200">
      <Link to="/" className="back-link flex items-center mb-6">
        <IoMdArrowBack className="mr-2" /> Back
      </Link>
      <div className="flex flex-col items-center w-full">
        <div className="w-full max-w-4xl">
          <CartList cart={cart} onRemove={onRemove} onUpdate={onUpdate} />
          <div className="border mt-20 border-gray-300 p-4 w-[625px]  font-serif bg-gray-700 mt-0">
            <h2 className="text-lg text-white font-semibold mb-4">Cart totals</h2>
            <div className="flex justify-between py-2 border-b text-gray-200">
              <span>Subtotal</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 mb-4 text-gray-200">
              <span>Total</span>
              <span className="font-semibold ">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
