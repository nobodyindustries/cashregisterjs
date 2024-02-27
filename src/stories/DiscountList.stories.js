import DiscountList from "@/components/DiscountList";
import {withReactContext} from "storybook-react-context";
import {ProductDataContext} from "@/components/ProductProvider";
import TestMocks from "@/mock/TestMocks";
import {BasketDataContext} from "@/components/BasketProvider";
import {RuleDataContext} from "@/components/RuleProvider";

export default {
  component: DiscountList
}

export const Primary = {
  render: () => <DiscountList/>,
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
      Context: RuleDataContext,
      initialState: TestMocks.MOCK_RULES_DISCOUNT_TESTING
    })
  ]
};