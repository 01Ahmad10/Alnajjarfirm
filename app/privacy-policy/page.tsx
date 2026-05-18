import type { Metadata } from "next";
import type { PolicyData } from "@/types";
import policyData from "@/data/privacy-policy.json";
import PolicySection from "@/components/PolicySection";

export const metadata: Metadata = {
  title: "Privacy Policy | Alnajjar Firm — Media Agency Lebanon",
  description:
    "How Alnajjar Firm collects, uses, and protects your information. Alnajjar Firm is a media agency based in Lebanon.",
  alternates: {
    canonical: "https://alnajjarfirmlb.com/privacy-policy",
  },
  openGraph: {
    url: "https://alnajjarfirmlb.com/privacy-policy",
    title: "Privacy Policy | Alnajjar Firm — Media Agency Lebanon",
    description:
      "How Alnajjar Firm collects, uses, and protects your information.",
  },
};

const data = policyData as PolicyData;

export default function PrivacyPolicyPage() {
  return (
    <div className="page-content">
      {data.policySections && (
        <PolicySection heading="Privacy Policy" sections={data.policySections} />
      )}
    </div>
  );
}
