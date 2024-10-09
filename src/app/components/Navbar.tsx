import React from "react";
export default function Navbar() {
  return (
<div className="flex justify-items-center items-center justify-around p-6 bg-lime-50">
  <h3 className="w-6 h-6 text-2xl font-extrabold text-lime-800">Burgeria</h3>
  <ul className="flex justify-items-center items-center gap-6 text-lime-800  ">
    <li className="hover:bg-lime-800 px-5 py-2 hover:text-white "><b>About</b></li>
    <li className="hover:bg-lime-800 px-5 py-2 hover:text-white"><b>Contact</b></li>
    <li className="hover:bg-lime-800 px-5 py-2 hover:text-white"><b>Offer</b></li>
    <li className="bg-lime-800 px-4 py-2 text-white font-semibold hover:bg-lime-100 hover:text-lime-800 "><button>Buy Now</button></li>
  </ul>
</div>
  );
}
