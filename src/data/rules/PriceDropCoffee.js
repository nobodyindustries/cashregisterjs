import ProductUtils from "@/lib/productUtils";

const PriceDropCoffee = {
  description: "Coffee volume discount (VP of Eng. offer)",
  amountCount: (basket) => {
    if (!basket) return 0;
    const items = basket?.items;
    if (!items) return 0;
    const coffeeProducts = Object.entries(items).filter((item) => item[0].startsWith("CF"));
    if (coffeeProducts.length === 0) return 0;
    return coffeeProducts.map((item) => item[1]).reduce((total, current) => total + current);
  },
  applies: (basket) => {
    return PriceDropCoffee.amountCount(basket) >= 3;
  },
  getAmountInCents: (basket, products) => {
    if (!PriceDropCoffee.applies(basket)) return 0;
    const items = basket?.items;
    if (!items) return 0;
    const coffeeItems = Object.entries(items).filter((item) => item[0].startsWith("CF"));
    const discount = coffeeItems.map((item) => {
      const price = ProductUtils.getPriceFromId(products, item[0]);
      if (price === null) throw new Error(`Misconfigured product: ${item[0]}`);
      return price / 3 * item[1];
    }).reduce((total, current) => total + current);
    return -Math.round(discount);
  }
};

export default PriceDropCoffee;