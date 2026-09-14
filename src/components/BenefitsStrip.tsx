import Container from "./Container";
import { benefits } from "../data/benefits";
import styles from "./BenefitsStrip.module.css";

export default function BenefitsStrip() {
  return (
    <section className={styles.strip} aria-label="Why choose Dominion Health">
      <Container className={styles.inner}>
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <div className={styles.item} key={benefit.title}>
              <span className={styles.iconCircle} aria-hidden="true">
                <Icon className={styles.icon} strokeWidth={1.5} />
              </span>
              <div className={styles.text}>
                <p className={styles.title}>{benefit.title}</p>
                <p className={styles.desc}>{benefit.description}</p>
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
