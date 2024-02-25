"use client"

import {useBasket} from "@/components/BasketProvider";

const Cart = () => {
  const basket = useBasket();

  return (
    <div>
      {basket ? (
        <p>{JSON.stringify(basket)}</p>
      ) : (
        <p>No items in the basket yet...</p>
      )}
    </div>
  )
}

export default Cart;