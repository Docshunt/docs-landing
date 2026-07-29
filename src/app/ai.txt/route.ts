import { GET as getLlms } from "@/app/llms.txt/route";

export function GET(request: Request) {
  return getLlms(request);
}
