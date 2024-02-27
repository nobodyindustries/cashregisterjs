import {describe, expect, it} from "vitest";
import ProductUtils from "@/lib/productUtils";
import TestMocks from "@/mock/TestMocks";

describe("lib/productUtils", () => {
  describe("getNameFromId", () => {
    it("Should return null when products are null", () => {
      expect(ProductUtils.getNameFromId(null, "XX1")).toEqual(null);
    })
    it("Should return null when product does not exist", () => {
      expect(ProductUtils.getNameFromId(TestMocks.MOCK_PRODUCTS, "ZZ1")).toEqual(null);
    })
    it("Should throw an error when the product is found but does not have a name", () => {
      const products = [...TestMocks.MOCK_PRODUCTS, {
        code: "ZZ1",
        price: 420
      }]
      expect(() => ProductUtils.getNameFromId(products, "ZZ1")).toThrowError(/^Misconfigured product ZZ1$/);
    })
    it("Should return the name when the product is found", () => {
      expect(ProductUtils.getNameFromId(TestMocks.MOCK_PRODUCTS, "XX2")).toEqual("Product 3");
    })
  })
  describe("getPriceFromId", () => {
    it("Should return null when products are null", () => {
      expect(ProductUtils.getPriceFromId(null, "XX1")).toEqual(null);
    })
    it("Should return null when product does not exist", () => {
      expect(ProductUtils.getPriceFromId(TestMocks.MOCK_PRODUCTS, "ZZ1")).toEqual(null);
    })
    it("Should throw an error when the product is found but does not have a name", () => {
      const products = [...TestMocks.MOCK_PRODUCTS, {
        code: "ZZ1",
        name: "Product X"
      }]
      expect(() => ProductUtils.getPriceFromId(products, "ZZ1")).toThrowError(/^Misconfigured product ZZ1$/);
    })
    it("Should return the name when the product is found", () => {
      expect(ProductUtils.getPriceFromId(TestMocks.MOCK_PRODUCTS, "XX1")).toEqual(123);
    })
  })
});