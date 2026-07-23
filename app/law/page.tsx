import type { Metadata } from "next";
import PodPage from "@/components/marketing/PodPage";
import { MARKET_PODS } from "@/lib/marketing/market-pods";

const pod = MARKET_PODS["law"];

export const metadata: Metadata = {
  title: `${pod.metaTitle} | In The Past AI`,
  description: pod.metaDescription,
  alternates: { canonical: "/law" },
};

export default function Page() {
  return <PodPage pod={pod} />;
}
