"use client";

import ProductButtonList from "@/components/ProductButtonList";
import ProductContext from "@/components/ProductContext";

export default function Home() {

  return (
    <ProductContext>
      <main>
        <ProductButtonList/>
      </main>
    </ProductContext>
  );
}
