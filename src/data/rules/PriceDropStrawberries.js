import ProductUtils from "@/lib/productUtils";

const PriceDropStrawberries = {
  description: "Strawberry volume discount (COO Offer)",
  amountCount: (basket) => {
    if (!basket) return 0;
    const items = basket?.items;
    if (!items) return 0;
    if (!Object.keys(items).includes("SR1")) return 0;
    return items["SR1"];
  },
  applies: (basket) => {
    return PriceDropStrawberries.amountCount(basket) >= 3
  },
  getAmountInCents: (basket, products) => {
    if (!PriceDropStrawberries.applies(basket)) return 0;
    const price = ProductUtils.getPriceFromId(products, "SR1");
    if (price === null) throw new Error("Misconfigured product: SR1");
    if (price <= 450) return 0;
    const unitsInBasket = PriceDropStrawberries.amountCount(basket);
    return -((price - 450) * unitsInBasket);
  }
}

export default PriceDropStrawberries;