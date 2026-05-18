interface CtaBlockProps {
  title: string;
  text: string;
  label: string;
  href: string;
}

export default function CtaBlock({ title, text, label, href }: CtaBlockProps) {
  return (
    <section className="section reveal">
      <div className="cta-block">
        <h2>{title}</h2>
        <p>{text}</p>
        <a className="neuros-button" href={href} target="_blank" rel="noreferrer">
          <span className="button-inner">{label}</span>
        </a>
      </div>
    </section>
  );
}
