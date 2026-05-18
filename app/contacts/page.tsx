import type { Metadata } from "next";
import type { ContactData } from "@/types";
import contactsData from "@/data/contacts.json";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | Media Agency in Beirut, Lebanon | Alnajjar Firm",
  description:
    "Get in touch with Alnajjar Firm, a creative media agency in Awkar, Lebanon. Reach us by phone, WhatsApp, or email for content creation, social media management, and branding services.",
  alternates: {
    canonical: "https://alnajjarfirmlb.com/contacts",
  },
  openGraph: {
    url: "https://alnajjarfirmlb.com/contacts",
    title: "Contact Us | Media Agency in Beirut, Lebanon | Alnajjar Firm",
    description:
      "Get in touch with Alnajjar Firm, a creative media agency in Awkar, Lebanon. Reach us by phone, WhatsApp, or email for content creation, social media management, and branding services.",
  },
  twitter: {
    title: "Contact Us | Media Agency in Beirut, Lebanon | Alnajjar Firm",
    description:
      "Get in touch with Alnajjar Firm, a creative media agency in Awkar, Lebanon.",
  },
};

const data = contactsData as ContactData;

export default function ContactsPage() {
  return (
    <div className="page-content">
      <ContactSection contacts={data.contacts} subtitle={data.subtitle} />
    </div>
  );
}
