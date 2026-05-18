import type { PolicySection } from "@/types";

interface PolicySectionProps {
  heading: string;
  sections: PolicySection[];
}

export default function PolicySection({ heading, sections }: PolicySectionProps) {
  return (
    <section className="section policy-section">
      <h2>{heading}</h2>
      <ul className="list policy-list">
        {sections.map((item) => (
          <li key={item.title}>
            <div>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
