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
            <li>
              <a href="mailto:admin@dominion.health">admin@dominion.health</a>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h3 className={styles.heading}>Our Locations</h3>
          <ul className={styles.addressList}>
            <li>
              <strong>Leon Springs</strong>
              <span>23119 IH-10W St. 904, San Antonio, TX 78257</span>
              <span>23119 W I 10 Blg 16 San Antonio TX 78257</span>
            </li>
            <li>
              <strong>Westover Hills</strong>
              <span>5715 Rogers Rd St 117, San Antonio, TX 78251</span>
            </li>
            <li>
              <strong>Medical Center</strong>
              <span>9647 Huebner Rd, San Antonio, TX 78240</span>
            </li>
            <li>
              <strong>Stone Oak</strong>
              <span>4553 N Loop 1604 W Suite 1119, San Antonio, TX 78249</span>
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
