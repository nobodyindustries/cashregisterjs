const products = [
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
]


export async function GET() {
  return Response.json({ products })
}