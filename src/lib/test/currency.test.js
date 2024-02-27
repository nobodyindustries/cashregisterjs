import Currency from "@/lib/currency";
import {describe, expect, it} from "vitest";

describe("lib/currency", () => {
  describe("formatCents", () => {
    it("Should return properly formatted currency with 0 cents", () => {
      expect(Currency.formatCents(0)).toEqual("0€");
    })
    it("Should return properly formatted currency with cents between 1 and 10", () => {
      expect(Currency.formatCents(1)).toEqual("0.01€");
    })
    it("Should return properly formatted currency with cents between 10 and 99", () => {
      expect(Currency.formatCents(12)).toEqual("0.12€");
    })
    it("Should return properly formatted currency with bigger than 100", () => {
      expect(Currency.formatCents(123)).toEqual("1.23€");
    })
    it("Should return null when cents are null", () => {
      expect(Currency.formatCents(null)).toEqual(null);
    })
    it("Should format properly numbers with decimals", () => {
      expect(Currency.formatCents(12.123)).toEqual("0.12€");
    })
    it("Should format properly negative amounts", () => {
      expect(Currency.formatCents(-420)).toEqual("-4.20€");
    })
  })
})