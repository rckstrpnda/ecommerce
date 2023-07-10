import { useEffect, useState } from "react";
import updateBalance from "../../redux/orebiSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Eth = () => {
  const selector=useSelector((state)=>state.orebiReducer.balance)
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 5);
  }, []);
  useEffect(() => {
 console.log(selector)
  }, [selector]);
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div>
      
      {isLoading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="container">
          <h1>Current Wallet Balance : 2.111</h1>
          <button
          className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300"
          onClick={handleClick}>
          Pay
        </button>
        </div>

      )}
    </div>
  );



};
export default Eth;
