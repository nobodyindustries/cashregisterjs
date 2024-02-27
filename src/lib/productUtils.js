const ProductUtils = {
  getNameFromId: (products, productId) => {
    if (!products) return null;
    const product = products.find((item) => item.code === productId);
    if (!product) return null;
    if (!product?.name) throw new Error(`Misconfigured product ${productId}`);
    return product?.name;
  },
  getPriceFromId: (products, productId) => {
    if (!products) return null;
    const product = products.find((item) => item.code === productId);
    if (!product) return null;
    if (!product?.price) throw new Error(`Misconfigured product ${productId}`);
    return product?.price;
  }
};

export default ProductUtils;