"use client";

import ProductButton from "@/components/ProductButton";
import Currency from "@/lib/currency";
import {useProducts} from "@/components/ProductProvider";
import {ItemReducerActionTypes, useBasketDispatch} from "@/components/BasketProvider";

const ProductButtonList = () => {

  const productData = useProducts();
  const basketDispatch = useBasketDispatch();

  const onProductAdd = (evt) => {
    evt.preventDefault();
    const productId = evt?.target?.dataset?.productId;
    if (!productId || !basketDispatch) return;
    basketDispatch({
      type: ItemReducerActionTypes.ITEM_INCREASE,
      itemId: productId
    });
  }

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
      {productData && productData.map((product) => {
        return (
          <div key={`product-${product.code}`}>
            <ProductButton productId={product.code}
                           name={product.name}
                           formattedPrice={Currency.formatCents(product.price)}
                           onClick={onProductAdd}/>
          </div>
        )
      })}
    </div>
  )
}

export default ProductButtonList;