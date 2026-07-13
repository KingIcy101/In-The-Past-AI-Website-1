import type { Metadata } from "next";
import PodPage from "@/components/marketing/PodPage";
import { MARKET_PODS } from "@/lib/marketing/market-pods";

const pod = MARKET_PODS["dental"];

export const metadata: Metadata = {
  title: `${pod.metaTitle} | In The Past AI`,
  description: pod.metaDescription,
  alternates: { canonical: "/dental" },
};

export default function Page() {
  return <PodPage pod={pod} />;
}
