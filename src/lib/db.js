import products from "@/data/products";
import rules from "@/data/rules";


const DB = {
  getAllProducts: () => {
    return products;
  },
  getAllRules: () => {
    return rules;
  }
}

export default DB;