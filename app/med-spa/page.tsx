import type { Metadata } from "next";
import PodPage from "@/components/marketing/PodPage";
import { MARKET_PODS } from "@/lib/marketing/market-pods";

const pod = MARKET_PODS["med-spa"];

export const metadata: Metadata = {
  title: pod.metaTitle,
  description: pod.metaDescription,
  alternates: { canonical: "/med-spa" },
  openGraph: {
    title: `${pod.metaTitle} | In The Past AI`,
    description: pod.metaDescription,
    url: "https://www.inthepast.ai/med-spa",
    type: "website",
  },
};

export default function Page() {
  return <PodPage pod={pod} />;
}
