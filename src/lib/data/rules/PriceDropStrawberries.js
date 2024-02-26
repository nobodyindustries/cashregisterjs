const PriceDropStrawberries = {
  description: "Strawberry volume discount (COO Offer)",
  amountCount: (basket) => {
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
    const product = products.find((product) => product.code === "SR1");
    if (!product) return 0;
    if (product?.price === undefined) throw new Error("Misconfigured product: SR1");
    if (product.price <= 450) return 0;
    const unitsInBasket = PriceDropStrawberries.amountCount(basket);
    return -((product.price - 450) * unitsInBasket);
  }
}

export default PriceDropStrawberries;

// {"items":{"GR1":50,"SR1":22,"CF1":5}}
/*
[
  {"code":"GR1","name":"Green Tea","price":311},
  {"code":"SR1","name":"Strawberries","price":500},
  {"code":"CF1","name":"Coffee","price":1123}
]
 */