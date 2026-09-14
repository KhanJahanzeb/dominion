import Logo from "./Logo";
import Container from "./Container";
import { enabledDivisions } from "../data/divisions";
import { resolveDivisionLink } from "../lib/resolveDivisionLink";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <Container className={styles.grid}>
        <div className={styles.brandCol}>
          <Logo />
          <p className={styles.tagline}>One Dominion Health. Six specialized areas of care.</p>
        </div>

        <div className={styles.col}>
          <h3 className={styles.heading}>Our Departments</h3>
          <ul className={styles.list}>
            {enabledDivisions.map((division) => {
              const link = resolveDivisionLink(division);
              return (
                <li key={division.id}>
                  {link.kind === "external" ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {division.shortName}
                    </a>
                  ) : (
                    <span className={styles.disabled}>
                      {division.shortName} <em>(Coming Soon)</em>
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.col}>
          <h3 className={styles.heading}>Dominion Health</h3>
          <ul className={styles.list}>
            <li>
              <a href="https://dominionfhc.com/" target="_blank" rel="noopener noreferrer">
                Main Website
              </a>
            </li>
            <li>
              <a
                href="https://dominionfhc.com/index.php/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Locations &amp; Contact
              </a>
            </li>
            <li>
              <a href="tel:12109448855">+1 210 944 8855</a>
            </li>
          </ul>
        </div>
      </Container>

      <Container>
        <div className={styles.bottomBar}>
          <p>&copy; {year} Dominion Health. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
