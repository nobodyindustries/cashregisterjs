import ProductButton from "@/components/ProductButton";
import DB from "@/lib/db";
import Currency from "@/lib/currency";

const ProductButtonList = ({onClick}) => {

  const products = DB.getAllProducts();

  return (
    <div className="w-full grid grid-cols-3 gap-2">
      {products.map((product) => {
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