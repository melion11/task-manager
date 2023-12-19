import { Router } from "@/app/routes";
import { useMeQuery } from "@/features";
import { PageLoader } from "@/widgets";

export function App() {
  const { isLoading } = useMeQuery();

  if (isLoading) return <PageLoader />;

  return <Router />;
}
