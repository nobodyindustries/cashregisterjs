import {useBasket} from "@/components/BasketProvider";
import {useProducts} from "@/components/ProductProvider";
import {useRules} from "@/components/RuleProvider";
import ProductUtils from "@/lib/productUtils";
import Currency from "@/lib/currency";

const InvoiceTotal = () => {

  const rules = useRules();
  const basket = useBasket();
  const products = useProducts();

  const showTotal = () => {
    return products
      && products.length > 0
      && basket
      && basket?.items
      && Object.keys(basket.items).length > 0;
  };

  const applyRules = () => {
    return rules && rules.length > 0;
  };

  const getInvoiceTotal = () => {
    if (!showTotal()) return null;

    const totalBeforeDiscounts = Object.entries(basket.items).map((item) => {
      return ProductUtils.getPriceFromId(products, item[0]) * item[1];
    }).reduce((total, current) => total + current);

    let totalDiscounts = 0;
    if (applyRules()) {
      totalDiscounts = rules.map((rule) => rule.getAmountInCents(basket, products))
        .reduce((total, current) => total + current);
    }
    
    return Currency.formatCents(totalBeforeDiscounts + totalDiscounts);
  };

  return showTotal() && (
    <div className="mb-4 p-4 border-2 border-black flex flex-wrap">
      <div className="flex-initial text-xl font-bold">
        <p>Total:</p>
      </div>
      <div className="flex-grow text-xl text-right">
        {getInvoiceTotal()}
      </div>
    </div>
  );
};

export default InvoiceTotal;