import { latestProductUpdateOptionsResponse, latestProductUpdateResponse } from "@/seo/product-updates-latest";

export function GET() {
  return latestProductUpdateResponse();
}

export function OPTIONS() {
  return latestProductUpdateOptionsResponse();
}
