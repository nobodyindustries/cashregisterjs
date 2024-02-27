import currency from "@/lib/currency";

const DiscountItem = ({description, amount}) => {
  return (
    <div className="w-full flex place-items-center text-lg">
      <div className="flex-grow overflow-hidden font-bold">
        {description}
      </div>
      <div className="flex-none">
        {currency.formatCents(amount)}
      </div>
    </div>
  );
};

export default DiscountItem;