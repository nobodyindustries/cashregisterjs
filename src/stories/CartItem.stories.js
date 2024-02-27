import CartItem from "@/components/CartItem";
import {withReactContext} from "storybook-react-context";
import {ProductDataContext} from "@/components/ProductProvider";
import TestMocks from "@/mock/TestMocks";
import {BasketDataContext, BasketDispatchContext} from "@/components/BasketProvider";

export default {
  component: CartItem
};

export const Primary = {
  render: () => <CartItem productPrice={1123} productName="Coffee" productQuantity={2} productId="CF1"/>,
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
  ]
};