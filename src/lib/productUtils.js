const ProductUtils = {
  getNameFromId: (products, productId) => {
    const product = products.find((item) => item.code === productId);
    return product?.name;
  }
}

export default ProductUtils;