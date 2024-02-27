import {useRules} from "@/components/RuleProvider";
import {useBasket} from "@/components/BasketProvider";
import {useProducts} from "@/components/ProductProvider";
import DiscountItem from "@/components/DiscountItem";

const DiscountList = () => {
  const rules = useRules();
  const basket = useBasket();
  const products = useProducts();

  return rules.filter((rule) => rule.applies(basket)).length > 0 && (
    <div className="mb-4 p-4 border-2 border-black flex flex-wrap">
      <div className="w-full">
        <h1>Discounts</h1>
      </div>
      {
        (
          rules.filter((rule) => rule.applies(basket)).map((rule, idx) =>
            (
              <DiscountItem key={`discount-item-${idx}`} description={rule.description}
                            amount={rule.getAmountInCents(basket, products)}/>
            )
          )
        )
      }
    </div>
  );
};

export default DiscountList;