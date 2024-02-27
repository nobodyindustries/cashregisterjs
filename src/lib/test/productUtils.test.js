import {describe, expect, it} from "vitest";
import ProductUtils from "@/lib/productUtils";

const MOCK_PRODUCTS = [
  {
    code: "XX1",
    name: "Product 1",
    price: 123
  },
  {
    code: "YY1",
    name: "Product 2",
    price: 69
  },
  {
    code: "XX2",
    name: "Product 3",
    price: 420
  },
]

describe("lib/productUtils", () => {
  describe("getNameFromId", () => {
    it("Should return null when products are null", () => {
      expect(ProductUtils.getNameFromId(null, "XX1")).toEqual(null);
    })
    it("Should return null when product does not exist", () => {
      expect(ProductUtils.getNameFromId(MOCK_PRODUCTS, "ZZ1")).toEqual(null);
    })
    it("Should throw an error when the product is found but does not have a name", () => {
      const products = [...MOCK_PRODUCTS, {
        code: "ZZ1",
        price: 420
      }]
      expect(() => ProductUtils.getNameFromId(products, "ZZ1")).toThrowError(/^Misconfigured product ZZ1$/);
    })
    it("Should return the name when the product is found", () => {
      expect(ProductUtils.getNameFromId(MOCK_PRODUCTS, "XX2")).toEqual("Product 3");
    })
  })
  describe("getPriceFromId", () => {
    it("Should return null when products are null", () => {
      expect(ProductUtils.getPriceFromId(null, "XX1")).toEqual(null);
    })
    it("Should return null when product does not exist", () => {
      expect(ProductUtils.getPriceFromId(MOCK_PRODUCTS, "ZZ1")).toEqual(null);
    })
    it("Should throw an error when the product is found but does not have a name", () => {
      const products = [...MOCK_PRODUCTS, {
        code: "ZZ1",
        name: "Product X"
      }]
      expect(() => ProductUtils.getPriceFromId(products, "ZZ1")).toThrowError(/^Misconfigured product ZZ1$/);
    })
    it("Should return the name when the product is found", () => {
      expect(ProductUtils.getPriceFromId(MOCK_PRODUCTS, "XX1")).toEqual(123);
    })
  })
});