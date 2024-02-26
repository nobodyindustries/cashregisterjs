const ProductUtils = {
  getNameFromId: (products, productId) => {
    const product = products.find((item) => item.code === productId);
    return product?.name;
  },
  getPriceFromId: (products, productId) => {
    const product = products.find((item) => item.code === productId);
    return product?.price;
  }
}

export default ProductUtils;