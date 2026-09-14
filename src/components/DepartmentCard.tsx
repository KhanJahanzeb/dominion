import { ArrowRight } from "lucide-react";
import type { Division } from "../data/divisions";
import styles from "./DepartmentCard.module.css";

interface DepartmentCardProps {
  division: Division;
}

export default function DepartmentCard({ division }: DepartmentCardProps) {
  const Icon = division.icon;

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img
          src={division.image}
          alt={`${division.shortName} at Dominion Health`}
          loading="lazy"
        />
      </div>

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <Icon className={styles.icon} strokeWidth={1.5} aria-hidden="true" />
          <h3 className={styles.title}>
            <span className={styles.brand}>Dominion Health</span>
            {division.shortName}
          </h3>
        </div>

        <p className={styles.desc}>{division.description}</p>

        <div className={styles.cta}>
          <a
            href={division.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaLink}
            aria-label={`${division.cta} (opens in a new tab)`}
          >
            <span>Learn More</span>
            <ArrowRight className={styles.arrow} strokeWidth={1.75} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
