import {describe, expect, it} from "vitest";
import BuyTwoGetOneFreeGreenTea from "@/data/rules/BuyTwoGetOneFreeGreenTea";
import TestMocks from "@/mock/TestMocks";

describe("data/rules/BuyTwoGetOneFreeGreenTeat", () => {
  describe("description", () => {
    it("Should return the correct description", () => {
      expect(BuyTwoGetOneFreeGreenTea.description).toEqual("2x1 Green Tea (CEO Offer)");
    });
  });
  describe("amountCount", () => {
    it("Should return 0 if basket is null", () => {
      expect(BuyTwoGetOneFreeGreenTea.amountCount(null)).toEqual(0);
    });
    it("Should return 0 if basket has no items", () => {
      expect(BuyTwoGetOneFreeGreenTea.amountCount({})).toEqual(0);
    });
    it("Should return 0 if basket items are empty", () => {
      expect(BuyTwoGetOneFreeGreenTea.amountCount({items: {}})).toEqual(0);
    });
    it("Should return the correct amount if the basket contains the item", () => {
      expect(BuyTwoGetOneFreeGreenTea.amountCount({items: {"GR1": 3}})).toEqual(3);
    });
  });
  describe("applies", () => {
    it("Should return false if quantity is less than 2", () => {
      expect(BuyTwoGetOneFreeGreenTea.applies({items: {"GR2": 3, "GR1": 0}})).toEqual(false);
    });
    it("Should return true if quantity is 2", () => {
      expect(BuyTwoGetOneFreeGreenTea.applies({items: {"GR2": 3, "GR1": 2}})).toEqual(true);
    });
    it("Should return true if quantity is bigger than 2", () => {
      expect(BuyTwoGetOneFreeGreenTea.applies({items: {"GR2": 3, "GR1": 420}})).toEqual(true);
    });
  });
  describe("getAmountInCents", () => {
    it("Should return 0 if the rule does not apply", () => {
      expect(BuyTwoGetOneFreeGreenTea.getAmountInCents({
        items: {
          "GR2": 3,
          "GR1": 1
        }
      }), TestMocks.MOCK_PRODUCTS_RULES).toEqual(0);
    });
    it("Should throw an error if the price can not be found but the rule applies", () => {
      const products = structuredClone(TestMocks.MOCK_PRODUCTS_RULES).map((product) => {
        if (product.code === "GR1") {
          return delete (product.price);
        }
        return product;
      });
      expect(() => BuyTwoGetOneFreeGreenTea.getAmountInCents({
        items: {
          "GR2": 3,
          "GR1": 3
        }
      }, products)).toThrowError(/^Misconfigured product: GR1$/);
    });
    it("Should return the proper amount of discount with an odd number of units when the rule applies", () => {
      expect(BuyTwoGetOneFreeGreenTea.getAmountInCents({items: {"GR1": 3}}, TestMocks.MOCK_PRODUCTS_RULES)).toEqual(-311);
    });
    it("Should return the proper amount of discount with an even number of units when the rule applies", () => {
      expect(BuyTwoGetOneFreeGreenTea.getAmountInCents({items: {"GR1": 6}}, TestMocks.MOCK_PRODUCTS_RULES)).toEqual(-933);
    });
  });
});