import ProductButton from "@/components/ProductButton";

export default {
  component: ProductButton,
  argTypes: {
    productId: {
      control: "text",
    },
    name: {
      control: "text",
    },
    formattedPrice: {
      control: "text",
    }
  }
}

export const Primary = {
  render: ({productId, name, formattedPrice}) => {
    const onClickMock = (evt) => {
      evt.preventDefault();
      alert(`Button clicked! Product ID: ${evt.target.dataset.productId}`);
    }

    return (<ProductButton productId={productId} name={name} formattedPrice={formattedPrice} onClick={onClickMock}/>)
  },
  args: {
    productId: "CF1",
    name: "Coffee",
    formattedPrice: "4.20€"
  }
}