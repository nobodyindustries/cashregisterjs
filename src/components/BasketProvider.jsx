"use client";

import {createContext, useContext, useReducer} from "react";

const basketInitialState = {items: {}};

export const BasketDataContext = createContext(null);
export const BasketDispatchContext = createContext(null);

export const useBasket = () => {
  return useContext(BasketDataContext);
}

export const useBasketDispatch = () => {
  return useContext(BasketDispatchContext);
}

export const ItemReducerActionTypes = Object.freeze({
  ITEM_INCREASE: 'item-increase',
  ITEM_DECREASE: 'item-decrease'
});

const itemsReducer = (state, action) => {
  if (!action?.itemId || !action?.type) return;
  const currentItemId = action.itemId;
  switch (action.type) {
    case ItemReducerActionTypes.ITEM_INCREASE:
      if (Object.keys(state.items).includes(currentItemId)) {
        const new_items = Object.assign({}, state.items);
        new_items[currentItemId]++;
        return {items: new_items};
      } else {
        return {
          items: {
            ...state.items,
            [currentItemId]: 1
          }
        }
      }
    case ItemReducerActionTypes.ITEM_DECREASE:
      const new_items = Object.assign({}, state.items);
      if (Object.keys(state.items).includes(currentItemId)) {
        new_items[currentItemId]--;
        if (new_items[currentItemId] === 0) {
          delete new_items[currentItemId];
        }
      }
      return {items: new_items};
    default:
      throw new Error(`Invalid action in BasketContext: ${action.type}`);
  }
}

const BasketProvider = ({children}) => {

  const [items, itemActionDispatch] = useReducer(itemsReducer, basketInitialState);

  return (
    <BasketDataContext.Provider value={items}>
      <BasketDispatchContext.Provider value={itemActionDispatch}>
        {children}
      </BasketDispatchContext.Provider>
    </BasketDataContext.Provider>
  )
}

export default BasketProvider;
