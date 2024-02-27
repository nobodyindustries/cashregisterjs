"use client"

import {useBasket} from "@/components/BasketProvider";
import CartItem from "@/components/CartItem";
import {useProducts} from "@/components/ProductProvider";
import ProductUtils from "@/lib/productUtils";

const Cart = () => {
  const basket = useBasket();
  const products = useProducts();

  return (
    <div className="mb-4 p-4 border-2 border-black flex flex-wrap">
      <div className="w-full">
        <h1>Cart</h1>
      </div>
      {basket && basket?.items && Object.keys(basket.items).length > 0 ? (
        Object.entries(basket.items).map(([itemId, quantity]) =>
          <CartItem key={`cart-item-${itemId}`} productId={itemId}
                    productName={ProductUtils.getNameFromId(products, itemId)}
                    productQuantity={quantity} productPrice={ProductUtils.getPriceFromId(products, itemId)}/>
        )
      ) : (
        <div className="w-full text-xl">
          <p>No items in the basket yet...</p>
        </div>
      )}
    </div>
  )
}

export default Cart;