"use client"

const ProductButton = ({productId, name, formattedPrice, onClick}) => {
  return (
    <div data-product-id={productId}
         className="w-full p-3 border-2 border-black flex flex-wrap gap-y-1 cursor-pointer"
         onClick={onClick}>
      <div data-product-id={productId} className="w-full text-center font-bold text-xl">
        {name}
      </div>
      <div data-product-id={productId} className="w-full text-center text-sm">
        {formattedPrice}
      </div>
    </div>
  )
}

export default ProductButton;