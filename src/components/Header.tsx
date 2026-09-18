import { useEffect, useState, type MouseEvent } from "react";
import Container from "./Container";
import Logo from "./Logo";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "#top", label: "Home" },
  { href: "#departments", label: "Our Departments" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function handleNavClick(href: string, event: MouseEvent) {
    if (href === "#top") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMenuOpen(false);
  }

  return (
    <header className={styles.header} data-scrolled={scrolled} id="site-header">
      <Container className={styles.bar}>
        <Logo />

        <nav className={styles.nav} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={(e) => handleNavClick(link.href, e)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="visually-hidden">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span className={styles.burger} data-open={menuOpen} />
          </button>
        </div>
      </Container>

      <div id="mobile-nav" className={styles.drawer} data-open={menuOpen}>
        <nav aria-label="Mobile" className={styles.drawerNav}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(link.href, e)}
              className={styles.drawerLink}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className={styles.drawerFooter}>
          <a href="tel:12109448855" className={styles.drawerPhone}>
            +1 210 944 8855
          </a>
        </div>
      </div>
    </header>
  );
}
