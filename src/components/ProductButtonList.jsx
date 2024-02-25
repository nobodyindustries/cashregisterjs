"use client";

import ProductButton from "@/components/ProductButton";
import Currency from "@/lib/currency";
import {useContext} from "react";
import {ProductDataContext} from "@/components/ProductContext";

const ProductButtonList = ({onClick}) => {

  const productData = useContext(ProductDataContext);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
      {productData && productData.map((product) => {
        return (
          <div key={`product-${product.code}`}>
            <ProductButton productId={product.code}
                           name={product.name}
                           formattedPrice={Currency.formatCents(product.price)}
                           onClick={onClick}/>
          </div>
        )
      })}
    </div>
  )
}

export default ProductButtonList;