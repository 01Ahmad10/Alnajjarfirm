interface HeroSectionProps {
  ctaLabel: string;
  ctaHref: string;
}

export default function HeroSection({ ctaLabel, ctaHref }: HeroSectionProps) {
  return (
    <section className="hero hero-neuros">
      <div className="hero-content">
        <h1>
          Become A <br />
          <span className="highlight-gold">Public Figure</span>
        </h1>
        <a
          className="neuros-button button-pulse"
          href={ctaHref}
          target="_blank"
          rel="noreferrer"
        >
          <span className="button-inner">{ctaLabel}</span>
        </a>
      </div>
    </section>
  );
}
