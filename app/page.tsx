import type { Metadata } from "next";
import type { PortfolioData } from "@/types";
import portfolioData from "@/data/portfolio.json";
import HeroSection from "@/components/HeroSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import CompaniesCarousel from "@/components/CompaniesCarousel";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title:
    "Media Agency in Lebanon | Content Creation & Social Media | Alnajjar Firm",
  description:
    "Alnajjar Firm is a creative media agency in Lebanon specializing in content creation, social media management, reels production, video editing, branding, and digital marketing. Based in Awkar, serving Beirut and all of Lebanon.",
  alternates: {
    canonical: "https://alnajjarfirmlb.com/",
  },
  openGraph: {
    url: "https://alnajjarfirmlb.com/",
    title:
      "Media Agency in Lebanon | Content Creation & Social Media | Alnajjar Firm",
    description:
      "Alnajjar Firm is a creative media agency in Lebanon specializing in content creation, social media management, reels production, video editing, branding, and digital marketing. Based in Awkar, serving Beirut and all of Lebanon.",
  },
  twitter: {
    title:
      "Media Agency in Lebanon | Content Creation & Social Media | Alnajjar Firm",
    description:
      "Alnajjar Firm is a creative media agency in Lebanon — content creation, social media management, reels production, video editing, branding, and digital marketing.",
  },
};

const data = portfolioData as PortfolioData;

export default function HomePage() {
  return (
    <div className="page-content">
      <HeroSection ctaLabel={data.cta.label} ctaHref={data.cta.href} />
      <PortfolioGrid categories={data.portfolio} />
      <CompaniesCarousel logos={data.companies_we_work_with} />
      <ServicesSection
        services={data.services}
        ctaLabel={data.cta.label}
        ctaHref={data.cta.href}
      />
      <TeamSection
        team={data.team}
        teamImages={data.team_images}
        ctaLabel={data.cta.label}
        ctaHref={data.cta.href}
      />
      <CtaBlock
        title={data.final_cta.title}
        text={data.final_cta.text}
        label={data.final_cta.label}
        href={data.final_cta.href}
      />
    </div>
  );
}
