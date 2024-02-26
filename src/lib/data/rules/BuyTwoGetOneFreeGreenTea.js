const BuyTwoGetOneFreeGreenTea = {
  description: "2x1 Green Tea (CEO Offer)",
  amountCount: (basket) => {
    const items = basket?.items;
    if (!items) return 0;
    if (!Object.keys(items).includes("GR1")) return 0;
    return items["GR1"];
  },
  applies: (basket) => {
    return BuyTwoGetOneFreeGreenTea.amountCount(basket) >= 2
  },
  getAmountInCents: (basket, products) => {
    if (!BuyTwoGetOneFreeGreenTea.applies(basket)) return 0;
    const product = products.find((product) => product.code === "GR1");
    if (!product) return 0;
    const price = product?.price;
    if (!price) throw new Error("Misconfigured product: GR1");
    const unitsInBasket = BuyTwoGetOneFreeGreenTea.amountCount(basket);
    const freeUnits = Math.floor(unitsInBasket / 2);
    return -(freeUnits * price);
  }
}

export default BuyTwoGetOneFreeGreenTea;