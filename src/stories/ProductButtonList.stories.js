import ProductButtonList from "@/components/ProductButtonList";

export default {
  component: ProductButtonList
}

export const Render = {
  render: () => {
    const onClickMock = (evt) => {
      evt.preventDefault();
      alert(`Button clicked! Product ID: ${evt.target.dataset.productId}`);
    }

    return (<ProductButtonList onClick={onClickMock}/>)
  },
};