import heroImage from "../assets/aesthetics/aesthetics-reception.jpg";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.grid}>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            One Health System.
            <br />
            Complete Care for You.
          </h1>
          <p className={styles.dek}>
            Dominion Health is your trusted partner in health and wellness. Explore all our
            services in one place.
          </p>
          <a href="#departments" className={styles.cta}>
            Explore Our Services
          </a>
        </div>

        <div className={styles.imageWrap}>
          <img
            src={heroImage}
            alt="A Dominion Health clinic location"
            className={styles.image}
            width={1000}
            height={667}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
