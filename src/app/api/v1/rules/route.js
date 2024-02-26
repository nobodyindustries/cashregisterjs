import DB from "@/lib/db";

export async function GET() {
  return Response.json({rules: DB.getAllRules()})
}