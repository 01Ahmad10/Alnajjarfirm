import { resolveImagePath } from "@/lib/utils";
import type { TeamMemberImage } from "@/types";

interface TeamSectionProps {
  team: Record<string, string[]>;
  teamImages: Record<string, TeamMemberImage>;
  ctaLabel: string;
  ctaHref: string;
}

export default function TeamSection({ team, teamImages, ctaLabel, ctaHref }: TeamSectionProps) {
  const groups = Object.entries(team).filter(
    ([, members]) => Array.isArray(members) && members.length > 0
  );

  return (
    <>
      <section className="section reveal">
        <div className="section-title-row">
          <h2>Our team</h2>
          <div className="section-title-cta">
            <a className="neuros-button button-pulse" href={ctaHref} target="_blank" rel="noreferrer">
              <span className="button-inner">{ctaLabel}</span>
            </a>
          </div>
        </div>
      </section>

      {groups.map(([group, members]) => (
        <div key={group} className="team-group reveal">
          <h3>{group}</h3>
          <div className="team-grid slider-on-mobile stagger-children">
            {members.map((m) => {
              const [nameRaw, roleRaw] = m.split("—");
              const name = (nameRaw || "").trim();
              const role = (roleRaw || "").trim();
              const fromMap = teamImages[name];
              const avatar = fromMap
                ? resolveImagePath(fromMap.image)
                : `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=171717&color=ffffff&size=512`;

              return (
                <article key={name} className="team-card portfolio-card team-member">
                  <img
                    className="portfolio-img"
                    loading="lazy"
                    src={avatar}
                    alt={name}
                  />
                  <div className="portfolio-overlay">
                    <div className="portfolio-meta">
                      <div className="portfolio-name">{name}</div>
                      <div className="portfolio-role">{role}</div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}
