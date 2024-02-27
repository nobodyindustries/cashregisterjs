import {describe, expect, it} from "vitest";
import PriceDropStrawberries from "@/data/rules/PriceDropStrawberries";
import TestMocks from "@/mock/TestMocks";

describe("data/rules/BuyTwoGetOneFreeGreenTeat", () => {
  describe("description", () => {
    it("Should return the correct description", () => {
      expect(PriceDropStrawberries.description).toEqual("Strawberry volume discount (COO Offer)");
    });
  });
  describe("amountCount", () => {
    it("Should return 0 if basket is null", () => {
      expect(PriceDropStrawberries.amountCount(null)).toEqual(0);
    });
    it("Should return 0 if basket has no items", () => {
      expect(PriceDropStrawberries.amountCount({})).toEqual(0);
    });
    it("Should return 0 if basket items are empty", () => {
      expect(PriceDropStrawberries.amountCount({items: {}})).toEqual(0);
    });
    it("Should return the correct amount if the basket contains the item", () => {
      expect(PriceDropStrawberries.amountCount({items: {"SR1": 3}})).toEqual(3);
    });
  });
  describe("applies", () => {
    it("Should return false if quantity is less than 3", () => {
      expect(PriceDropStrawberries.applies({items: {"GR1": 3, "SR1": 1}})).toEqual(false);
    });
    it("Should return true if quantity is 3", () => {
      expect(PriceDropStrawberries.applies({items: {"SR1": 3, "GR1": 2}})).toEqual(true);
    });
    it("Should return true if quantity is bigger than 3", () => {
      expect(PriceDropStrawberries.applies({items: {"SR1": 12}})).toEqual(true);
    });
  });
  describe("getAmountInCents", () => {
    it("Should return 0 if the rule does not apply", () => {
      expect(PriceDropStrawberries.getAmountInCents({
        items: {
          "SR1": 1
        }
      }), TestMocks.MOCK_PRODUCTS_RULES).toEqual(0);
    });
    it("Should throw an error if the price can not be found but the rule applies", () => {
      const products = structuredClone(TestMocks.MOCK_PRODUCTS_RULES).map((product) => {
        if (product.code === "SR1") {
          return delete (product.price);
        }
        return product;
      });
      expect(() => PriceDropStrawberries.getAmountInCents({
        items: {
          "GR2": 3,
          "SR1": 3
        }
      }, products)).toThrowError(/^Misconfigured product: SR1$/);
    });
    it("Should return 0 if the price of the product with code SR1 is less than 4.50€ even if the rule applies", () => {
      const products = structuredClone(TestMocks.MOCK_PRODUCTS_RULES).map((product) => {
        if (product.code === "SR1") {
          return {
            ...product,
            price: 350
          };
        }
        return product;
      });
      expect(PriceDropStrawberries.getAmountInCents({items: {"SR1": 12}}, products)).toEqual(0);
    });
    it("Should return 0 if the price of the product with code SR1 is exactly 4.50€ even if the rule applies", () => {
      const products = structuredClone(TestMocks.MOCK_PRODUCTS_RULES).map((product) => {
        if (product.code === "SR1") {
          return {
            ...product,
            price: 450
          };
        }
        return product;
      });
      expect(PriceDropStrawberries.getAmountInCents({items: {"SR1": 8}}, products)).toEqual(0);
    });
    it("Should return the right amount of discount when the rule applies", () => {
      expect(PriceDropStrawberries.getAmountInCents({items: {"SR1": 8}}, TestMocks.MOCK_PRODUCTS_RULES)).toEqual(-400);
    });
    it("Should return the right amount of discount (drop the price to 4.50€) for any price when the rule applies", () => {
      const products = structuredClone(TestMocks.MOCK_PRODUCTS_RULES).map((product) => {
        if (product.code === "SR1") {
          return {
            ...product,
            price: 900
          };
        }
        return product;
      });
      expect(PriceDropStrawberries.getAmountInCents({items: {"SR1": 8}}, products)).toEqual(-3600);
    });
  });
});