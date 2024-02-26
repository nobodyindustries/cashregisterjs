import products from "@/lib/data/products";
import rules from "@/lib/data/rules";


const DB = {
  getAllProducts: () => {
    return products;
  },
  getAllRules: () => {
    return rules;
  }
}

export default DB;