import {describe, expect, it} from "vitest";
import PriceDropCoffee from "@/data/rules/PriceDropCoffee";
import TestMocks from "@/mock/TestMocks";

describe("data/rules/PriceDropCoffee", () => {
  describe("description", () => {
    it("Should return the correct description", () => {
      expect(PriceDropCoffee.description).toEqual("Coffee volume discount (VP of Eng. offer)");
    });
  });
  describe("amountCount", () => {
    it("Should return 0 if basket is null", () => {
      expect(PriceDropCoffee.amountCount(null)).toEqual(0);
    });
    it("Should return 0 if basket has no items", () => {
      expect(PriceDropCoffee.amountCount({})).toEqual(0);
    });
    it("Should return 0 if basket items are empty", () => {
      expect(PriceDropCoffee.amountCount({items: {}})).toEqual(0);
    });
    it("Should return the correct amount if the basket contains one item that checks out", () => {
      expect(PriceDropCoffee.amountCount({items: {"CF1": 3}})).toEqual(3);
    });
    it("Should return the correct amount if the basket contains more than one item that checks out", () => {
      expect(PriceDropCoffee.amountCount({items: {"CF1": 3, "CF2": 8}})).toEqual(11);
    });
  });
  describe("applies", () => {
    it("Should return false if quantity is less than 3", () => {
      expect(PriceDropCoffee.applies({items: {"GR2": 3, "CF1": 0}})).toEqual(false);
    });
    it("Should return true if quantity is 3", () => {
      expect(PriceDropCoffee.applies({items: {"GR2": 3, "GR1": 2, "CF1": 3}})).toEqual(true);
    });
    it("Should return true if quantity is bigger than 3", () => {
      expect(PriceDropCoffee.applies({items: {"GR2": 3, "CF1": 2, "CF2": 2}})).toEqual(true);
    });
  });
  describe("getAmountInCents", () => {
    it("Should return 0 if the rule does not apply", () => {
      expect(PriceDropCoffee.getAmountInCents({
        items: {
          "CF1": 2,
          "GR1": 1
        }
      }), TestMocks.MOCK_PRODUCTS_RULES).toEqual(0);
    });
    it("Should throw an error if the price for an applicable product can not be found but the rule applies", () => {
      expect(() => PriceDropCoffee.getAmountInCents({
        items: {
          "CF1": 2,
          "CF2": 2,
          "GR1": 3
        }
      }, TestMocks.MOCK_PRODUCTS_RULES)).toThrowError(/^Misconfigured product: CF2$/);
    });
    it("Should return the proper amount of discount with a single product", () => {
      expect(PriceDropCoffee.getAmountInCents({items: {"CF1": 3}}, TestMocks.MOCK_PRODUCTS_RULES)).toEqual(-1123);
    });
    it("Should return the proper amount of discount with multiple products when both are above the minimum", () => {
      const products = structuredClone(TestMocks.MOCK_PRODUCTS_RULES);
      products.push({
        code: "CF2",
        name: "Coffee #2",
        price: 333
      });
      expect(PriceDropCoffee.getAmountInCents({items: {"CF1": 3, "CF2": 3}}, products)).toEqual(-1456);
    });
    it("Should return the proper amount of discount with multiple products when both are under the minimum separately", () => {
      const products = structuredClone(TestMocks.MOCK_PRODUCTS_RULES);
      products.push({
        code: "CF2",
        name: "Coffee #2",
        price: 333
      });
      expect(PriceDropCoffee.getAmountInCents({items: {"CF1": 1, "CF2": 2}}, products)).toEqual(-596);
    });
  });
});