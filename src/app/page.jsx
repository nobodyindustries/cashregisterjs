"use client";

import ProductButtonList from "@/components/ProductButtonList";
import ProductProvider from "@/components/ProductProvider";
import Cart from "@/components/Cart";
import BasketProvider from "@/components/BasketProvider";
import RuleProvider from "@/components/RuleProvider";
import DiscountList from "@/components/DiscountList";
import InvoiceTotal from "@/components/InvoiceTotal";

export default function Home() {

  return (
    <ProductProvider>
      <BasketProvider>
        <RuleProvider>
          <main>
            <Cart/>
            <DiscountList/>
            <InvoiceTotal/>
            <ProductButtonList/>
          </main>
        </RuleProvider>
      </BasketProvider>
    </ProductProvider>
  );
}
