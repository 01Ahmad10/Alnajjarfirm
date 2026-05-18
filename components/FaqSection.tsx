import type { FaqItem } from "@/types";

interface FaqSectionProps {
  faq: FaqItem[];
}

export default function FaqSection({ faq }: FaqSectionProps) {
  return (
    <section className="section faq-section reveal">
      <h2>Faq</h2>
      <div className="faq-list">
        {faq.map((item) => (
          <details key={item.q} className="faq-item">
            <summary>
              <span className="faq-question">{item.q}</span>
              <span className="faq-arrow" aria-hidden="true">▶</span>
            </summary>
            <div className="faq-answer">{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
