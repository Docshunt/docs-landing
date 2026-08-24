import type { ReactNode } from "react";

export function PageDocument({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
