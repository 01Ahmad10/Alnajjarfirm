import type { Metadata } from "next";
import type { FaqData } from "@/types";
import faqData from "@/data/faq.json";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title:
    "FAQ | Content Creation & Social Media Agency Lebanon | Alnajjar Firm",
  description:
    "Common questions about Alnajjar Firm — Lebanon's trusted media agency for content creation, reels production, social media management, branding, and digital marketing.",
  alternates: {
    canonical: "https://alnajjarfirmlb.com/faq",
  },
  openGraph: {
    url: "https://alnajjarfirmlb.com/faq",
    title:
      "FAQ | Content Creation & Social Media Agency Lebanon | Alnajjar Firm",
    description:
      "Common questions about Alnajjar Firm — Lebanon's trusted media agency for content creation, reels production, social media management, branding, and digital marketing.",
  },
  twitter: {
    title:
      "FAQ | Content Creation & Social Media Agency Lebanon | Alnajjar Firm",
    description:
      "Common questions about Alnajjar Firm — Lebanon's trusted media agency for content creation, reels production, and social media management.",
  },
};

const data = faqData as FaqData;

export default function FaqPage() {
  return (
    <div className="page-content">
      <FaqSection faq={data.faq} />
    </div>
  );
}
