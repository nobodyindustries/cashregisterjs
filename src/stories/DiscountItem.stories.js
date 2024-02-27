import DiscountItem from "@/components/DiscountItem";

export default {
  component: DiscountItem,
  argTypes: {
    description: {
      control: "text"
    },
    amount: {
      control: "number"
    },
  }
};

export const Primary = {
  render: ({description, amount}) => <DiscountItem description={description} amount={amount}/>,
  args: {
    description: "Example Discount",
    amount: -420
  }
};