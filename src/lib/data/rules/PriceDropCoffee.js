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
    const items = basket?.items;
    if (!items) return 0;
    const coffeeItems = Object.entries(items).filter((item) => item[0].startsWith("CF"));
    return -coffeeItems.map((item) => {
      const product = products.find((product) => product.code === item[0]);
      if (!product) return 0;
      if (product?.price === undefined) throw new Error(`Misconfigured product: ${item[0]}`)
      return product.price / 3 * PriceDropCoffee.amountCount(basket);
    }).reduce((total, current) => total + current)
  }
}

export default PriceDropCoffee;