import type { MouseEvent } from "react";
import logo from "../assets/logo/dominion-health-logo.png";
import styles from "./Logo.module.css";

interface LogoProps {
  className?: string;
}

/** The actual Dominion Health logo, sourced from dominionfhc.com — never redrawn or recolored. */
export default function Logo({ className }: LogoProps) {
  function handleClick(event: MouseEvent) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <a
      href="#top"
      onClick={handleClick}
      className={[styles.logo, className ?? ""].filter(Boolean).join(" ")}
      aria-label="Dominion Health — back to top"
    >
      <img src={logo} alt="Dominion Health" width={160} height={109} />
    </a>
  );
}
