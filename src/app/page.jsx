"use client";

import ProductButtonList from "@/components/ProductButtonList";
import ProductProvider from "@/components/ProductProvider";
import Cart from "@/components/Cart";
import BasketProvider from "@/components/BasketProvider";
import RuleProvider from "@/components/RuleProvider";
import DiscountList from "@/components/DiscountList";

export default function Home() {

  return (
    <ProductProvider>
      <BasketProvider>
        <RuleProvider>
          <main>
            <h1>Cart</h1>
            <Cart/>
            <h1>Discounts</h1>
            <DiscountList/>
            <h1>Add products</h1>
            <ProductButtonList/>
          </main>
        </RuleProvider>
      </BasketProvider>
    </ProductProvider>
  );
}
