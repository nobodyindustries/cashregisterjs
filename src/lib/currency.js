const Currency = {
  formatCents: (amount) => {
    if (amount === null) return null;
    let formatted_amount = (amount / 100).toFixed(2).toString();
    if (formatted_amount.endsWith(".00")) {
      formatted_amount = formatted_amount.replace(".00", "");
    }
    return `${formatted_amount}€`
  }
}

export default Currency;