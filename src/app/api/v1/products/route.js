import DB from "@/lib/db";

export async function GET() {
  return Response.json({products: DB.getAllProducts()});
}