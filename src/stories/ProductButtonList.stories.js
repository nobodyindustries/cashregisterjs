import ProductButtonList from "@/components/ProductButtonList";
import {withReactContext} from "storybook-react-context";
import {ProductDataContext} from "@/components/ProductProvider";

export default {
  component: ProductButtonList,
  decorators: [
    withReactContext({
      Context: ProductDataContext,
      initialState: [
        {
          code: "GR1",
          name: "Green Tea",
          price: 311
        },
        {
          code: "SR1",
          name: "Strawberries",
          price: 500
        },
        {
          code: "CF1",
          name: "Coffee",
          price: 1123
        },
        {
          code: "CF2",
          name: "Coffee #2",
          price: 420
        },
      ],
    }),
  ],
}

export const Primary = {
  render: () => {
    return (<ProductButtonList/>)
  },
};