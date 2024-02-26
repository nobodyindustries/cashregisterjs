"use client";

import {createContext, useContext} from "react";
import DB from "@/lib/db";

// Only left visible for it to be mocked in the stories
export const RuleDataContext = createContext({});

export const useRules = () => {
  return useContext(RuleDataContext);
}

const RuleProvider = ({children}) => {

  return (
    <RuleDataContext.Provider value={DB.getAllRules()}>
      {children}
    </RuleDataContext.Provider>
  )
}

export default RuleProvider;
