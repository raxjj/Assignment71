import React from "react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="p-10 min-h-screen flex flex-col items-center justify-center bg-gray-300">
        <Link to="/">
        <button className="text-blue-400 font-bold text-2xl">
          Continue Shopping......
        </button>
      </Link>
      <Link to ="/">
      <img
      className="w-[900px] h-[800px] flex "
       src="https://img.freepik.com/premium-psd/empty-cart-shopping-commerce-3d-illustration_66255-2017.jpg" alt="Cart is Empty"  />
    </Link>
    </div>
  );
}
