import {useRules} from "@/components/RuleProvider";
import {useBasket} from "@/components/BasketProvider";
import {useProducts} from "@/components/ProductProvider";
import DiscountItem from "@/components/DiscountItem";

const DiscountList = () => {
  const rules = useRules();
  const basket = useBasket();
  const products = useProducts();

  return (
    <div className="mb-4 p-4 border-2 border-black flex flex-wrap">
      {
        rules.filter((rule) => rule.applies(basket)).length > 0 ?
          (
            rules.filter((rule) => rule.applies(basket)).map((rule, idx) =>
              (
                <DiscountItem key={`discount-item-${idx}`} description={rule.description}
                              amount={rule.getAmountInCents(basket, products)}/>
              )
            )
          ) : (
            <div className="w-full text-xl">
              <p>No discounts yet. Add more products...</p>
            </div>
          )
      }
    </div>
  )
}

export default DiscountList;