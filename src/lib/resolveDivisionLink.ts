import type { Division } from "../data/divisions";

export type DivisionLinkState =
  /** Confirmed external destination — opens in a new tab. */
  | { kind: "external"; href: string }
  /** The division itself doesn't operate yet. */
  | { kind: "comingSoon" };

/**
 * The one place that inspects a division's link fields. Every surface
 * that renders a division CTA (header, footer, divisions grid) calls
 * this instead of reading `division.url`/`comingSoon` directly.
 */
export function resolveDivisionLink(division: Division): DivisionLinkState {
  if (division.comingSoon || !division.url) {
    return { kind: "comingSoon" };
  }
  return { kind: "external", href: division.url };
}
