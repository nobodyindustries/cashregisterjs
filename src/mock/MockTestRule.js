const MockTestRule = {
  description: "Mock Test Rule",
  amountCount: (basket) => {
    return 6;
  },
  applies: (basket) => {
    return true;
  },
  getAmountInCents: (basket, products) => {
    return -123;
  }
};

export default MockTestRule;