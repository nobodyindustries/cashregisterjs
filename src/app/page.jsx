"use client";

import ProductButtonList from "@/components/ProductButtonList";
import ProductProvider from "@/components/ProductProvider";
import Cart from "@/components/Cart";
import BasketProvider from "@/components/BasketProvider";
import RuleProvider from "@/components/RuleProvider";

export default function Home() {

  return (
    <ProductProvider>
      <BasketProvider>
        <RuleProvider>
          <main>
            <h1>Cart</h1>
            <Cart/>
            <h1>Add products</h1>
            <ProductButtonList/>
          </main>
        </RuleProvider>s
      </BasketProvider>
    </ProductProvider>
  );
}
