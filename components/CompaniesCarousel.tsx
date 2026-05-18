import Image from "next/image";
import { resolveImagePath } from "@/lib/utils";

interface CompaniesCarouselProps {
  logos: string[];
}

export default function CompaniesCarousel({ logos }: CompaniesCarouselProps) {
  if (!logos.length) return null;

  const items = logos.map((url, i) => (
    <div key={i} className="logo-item">
      <Image
        src={resolveImagePath(url)}
        alt={`Client brand logo — Alnajjar Firm Lebanon partner ${i + 1}`}
        width={190}
        height={120}
        loading="lazy"
        sizes="(max-width: 480px) 170px, clamp(120px, 14vw, 190px)"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  ));

  return (
    <section className="section companies-section reveal">
      <h2 className="companies-title">Companies we work with</h2>
      <div className="companies-carousel">
        <div className="companies-track">
          {items}
          {items}
        </div>
      </div>
    </section>
  );
}
