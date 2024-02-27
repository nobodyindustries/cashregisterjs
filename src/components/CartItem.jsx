import {ItemReducerActionTypes, useBasketDispatch} from "@/components/BasketProvider";
import currency from "@/lib/currency";

const CartItem = ({productId, productName, productQuantity, productPrice}) => {

  const basketDispatch = useBasketDispatch();

  const onIncreaseProduct = (evt) => {
    evt.preventDefault();
    if (!productId || !basketDispatch) return;
    basketDispatch({type: ItemReducerActionTypes.ITEM_INCREASE, itemId: productId});
  };

  const onDecreaseProduct = (evt) => {
    evt.preventDefault();
    if (!productId || !basketDispatch) return;
    basketDispatch({type: ItemReducerActionTypes.ITEM_DECREASE, itemId: productId});
  };

  return (
    <div className="w-full flex place-items-center text-lg">
      <div className="flex-grow overflow-hidden">
        <span className="font-bold">{productName}</span>
        <span className="pl-2">x{productQuantity}</span>
      </div>
      <div className="flex-none pr-4">
        {currency.formatCents(productQuantity * productPrice)}
      </div>
      <div className="flex-none stroke-black fill-black w-8 h-8 cursor-pointer" data-product-id={productId}
           onClick={onIncreaseProduct}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="Vector" d="M6 12H12M12 12H18M12 12V18M12 12V6" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="flex-none stroke-black fill-black w-8 h-8 cursor-pointer" data-product-id={productId}
           onClick={onDecreaseProduct}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 12H18" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default CartItem;