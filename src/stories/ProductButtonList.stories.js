import ProductButtonList from "@/components/ProductButtonList";
import {withReactContext} from "storybook-react-context";
import {ProductDataContext} from "@/components/ProductProvider";
import TestMocks from "@/mock/TestMocks";
import {BasketDispatchContext} from "@/components/BasketProvider";

export default {
  component: ProductButtonList,
  decorators: [
    withReactContext({
      Context: ProductDataContext,
      initialState: TestMocks.MOCK_PRODUCTS
    }),
    withReactContext({
      Context: BasketDispatchContext,
      initialState: (action) => alert(`Action executed\nAction: ${JSON.stringify(action)}`)
    }),
  ],
}

export const Primary = {
  render: () => {
    return (<ProductButtonList/>)
  },
};