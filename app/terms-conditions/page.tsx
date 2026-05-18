import type { Metadata } from "next";
import type { PolicyData } from "@/types";
import termsData from "@/data/terms-conditions.json";
import PolicySection from "@/components/PolicySection";

export const metadata: Metadata = {
  title: "Terms & Conditions | Alnajjar Firm — Media Agency Lebanon",
  description:
    "Terms and conditions for services provided by Alnajjar Firm, a media and marketing agency based in Lebanon.",
  alternates: {
    canonical: "https://alnajjarfirmlb.com/terms-conditions",
  },
  openGraph: {
    url: "https://alnajjarfirmlb.com/terms-conditions",
    title: "Terms & Conditions | Alnajjar Firm — Media Agency Lebanon",
    description:
      "Terms and conditions for services provided by Alnajjar Firm, a media and marketing agency based in Lebanon.",
  },
};

const data = termsData as PolicyData;

export default function TermsConditionsPage() {
  return (
    <div className="page-content">
      {data.termsSections && (
        <PolicySection heading="Terms & Conditions" sections={data.termsSections} />
      )}
    </div>
  );
}
