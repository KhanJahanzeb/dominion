import Container from "./Container";
import Reveal from "./Reveal";
import DepartmentCard from "./DepartmentCard";
import { enabledDivisions } from "../data/divisions";
import styles from "./DepartmentsSection.module.css";

export default function DepartmentsSection() {
  return (
    <section id="departments" className={styles.section}>
      <Container wide>
        <div className={styles.heading}>
          <span className={styles.line} aria-hidden="true" />
          <h2 className={styles.title}>Our Departments</h2>
          <span className={styles.line} aria-hidden="true" />
        </div>

        <div className={styles.grid}>
          {enabledDivisions.map((division, i) => (
            <Reveal key={division.id} delay={i * 60}>
              <DepartmentCard division={division} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
