"use client";

import {createContext, useContext, useEffect, useState} from "react";

// Only left visible for it to be mocked in the stories
export const RuleDataContext = createContext({});

export const useRules = () => {
  return useContext(RuleDataContext);
}

const RuleProvider = ({children}) => {

  const [rules, setRules] = useState(null);

  const getProductContextInitialValue = async () => {
    const res = await fetch('/api/v1/rules');
    if (!res.ok) {
      throw new Error("Could not retrieve rules");
    }
    const data = await res.json();
    return data["rules"];
  }

  useEffect(() => {

    const getProductsEffect = async () => {
      const productData = await getProductContextInitialValue();
      setRules(productData);
    }

    void getProductsEffect();

  }, []);

  return (
    <RuleDataContext.Provider value={rules}>
      {children}
    </RuleDataContext.Provider>
  )
}

export default RuleProvider;
