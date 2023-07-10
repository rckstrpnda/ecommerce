import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Cart from "../Cart/Cart";
import { useState } from "react";


const Payment = () => {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);
  };
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment gateway" />
      <div className="pb-10">
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Wallet Address"
        ></textarea>
        <div>
          <Cart rock="4"></Cart>
          {console.log(Number(<Cart rock="tt"></Cart>))}
        </div>
        <>{text==='rohit'?(<Link to='/this'>
        <button
          className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300"
          
        >
          Pay Through Eterum
        </button>
        </Link>):(<div></div>)}</>
      </div>
    </div>
  );
};

export default Payment;
