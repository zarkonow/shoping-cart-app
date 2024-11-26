import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart, totalCart);

  return (
    <div>
      {cart && cart.lenght ? (
       <>
        <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center items-center p-3">
          {
  cart.map((cartItem) =><CartTile key={cartItem.id}  cartItem={cartItem} />)
}
          </div>

        </div>
        <div>
          <div className="flex flex-col justify-center items-end p-5 pace-y-5 mt-14">
<h1 className="">Your Cart Summary</h1>

          </div>
        </div>
       </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center ">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your Cart is Empty
          </h1>
          <Link to="/">
            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
