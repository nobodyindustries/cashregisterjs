const PriceDropCoffee = {
  description: "Coffee volume discount (VP of Eng. offer)",
  amountCount: (basket) => {
    const items = basket?.items;
    if (!items) return 0;
    const coffeeProducts = Object.entries(items).filter((item) => item[0].startsWith("CF"));
    if (coffeeProducts.length === 0) return 0;
    return coffeeProducts.map((item) => item[1]).reduce((total, current) => total + current);
  },
  applies: (basket) => {
    return PriceDropCoffee.amountCount(basket) >= 3
  },
  getAmountInCents: (basket, products) => {
    if (!PriceDropCoffee.applies(basket)) return 0;
    const coffeeProducts = Object.entries(products).filter((item) => item[0].startsWith("CF"));
    return -coffeeProducts.map((item) => {
      const product = products?.[item[0]];
      if (!product) return 0;
      if (product?.price === undefined) throw new Error(`Misconfigured product: ${item[0]}`)
      return product.price / 3 * PriceDropCoffee.amountCount(basket);
    }).reduce((total, current) => total + current)
  }
}

export default PriceDropCoffee;

// {"items":{"GR1":50,"SR1":22,"CF1":5}}
/*
[
  {"code":"GR1","name":"Green Tea","price":311},
  {"code":"SR1","name":"Strawberries","price":500},
  {"code":"CF1","name":"Coffee","price":1123}
]
 */