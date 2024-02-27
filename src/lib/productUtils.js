const ProductUtils = {
  getNameFromId: (products, productId) => {
    if (!products) return null;
    const product = products.find((item) => item.code === productId);
    return product?.name;
  },
  getPriceFromId: (products, productId) => {
    if (!products) return null;
    const product = products.find((item) => item.code === productId);
    return product?.price;
  }
}

export default ProductUtils;