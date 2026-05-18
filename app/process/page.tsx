import type { Metadata } from "next";
import type { ProcessData } from "@/types";
import processData from "@/data/process.json";
import ProcessSection from "@/components/ProcessSection";

export const metadata: Metadata = {
  title: "Our Process | Media Agency Lebanon | Alnajjar Firm",
  description:
    "Discover how Alnajjar Firm, a leading media agency in Lebanon, delivers results through a clear structured process — from onboarding to content creation, social media management, and measurable growth.",
  alternates: {
    canonical: "https://alnajjarfirmlb.com/process",
  },
  openGraph: {
    url: "https://alnajjarfirmlb.com/process",
    title: "Our Process | Media Agency Lebanon | Alnajjar Firm",
    description:
      "Discover how Alnajjar Firm, a leading media agency in Lebanon, delivers results through a clear structured process — from onboarding to content creation, social media management, and measurable growth.",
  },
  twitter: {
    title: "Our Process | Media Agency Lebanon | Alnajjar Firm",
    description:
      "Discover how Alnajjar Firm, a leading media agency in Lebanon, delivers results through a clear structured process.",
  },
};

const data = processData as ProcessData;

export default function ProcessPage() {
  return (
    <div className="page-content">
      <ProcessSection steps={data.steps} />
    </div>
  );
}
