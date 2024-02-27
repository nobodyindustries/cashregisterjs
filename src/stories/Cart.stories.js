import Cart from "@/components/Cart";
import {withReactContext} from "storybook-react-context";
import {ProductDataContext} from "@/components/ProductProvider";
import TestMocks from "@/mock/TestMocks";
import {BasketDataContext, BasketDispatchContext} from "@/components/BasketProvider";

export default {
  component: Cart
}

export const Empty = {
  render: () => <Cart/>,
};

export const WithProducts = {
  render: () => <Cart/>,
  decorators: [
    withReactContext({
      Context: ProductDataContext,
      initialState: TestMocks.MOCK_PRODUCTS_RULES
    }),
    withReactContext({
      Context: BasketDataContext,
      initialState: TestMocks.MOCK_BASKET
    }),
    withReactContext({
      Context: BasketDispatchContext,
      initialState: (action) => alert(`Action executed\nAction: ${JSON.stringify(action)}`)
    }),
  ],
};