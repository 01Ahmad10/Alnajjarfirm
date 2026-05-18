export interface PortfolioItem {
  name: string;
  role?: string;
  image: string;
  instaLink?: string;
  tiktokLink?: string;
  instaGrowth?: string;
  tiktokGrowth?: string;
  shows?: string;
}

export interface PortfolioCategory {
  slug: string;
  name: string;
  items: PortfolioItem[];
}

export interface ProcessStep {
  title: string;
  text: string;
  badges?: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Contact {
  value: string;
  href?: string;
}

export interface TeamMemberImage {
  image: string;
  role?: string;
}

export interface PortfolioData {
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
  companies_we_work_with: string[];
  services: string[];
  team: Record<string, string[]>;
  team_images: Record<string, TeamMemberImage>;
  final_cta: { title: string; text: string; label: string; href: string };
  portfolio: PortfolioCategory[];
}

export interface ProcessData {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

export interface FaqData {
  title: string;
  subtitle: string;
  faq: FaqItem[];
}

export interface ContactData {
  title: string;
  subtitle: string;
  contacts: Contact[];
}

export interface PolicySection {
  title: string;
  text: string;
}

export interface PolicyData {
  title: string;
  subtitle?: string;
  policySections?: PolicySection[];
  termsSections?: PolicySection[];
}
