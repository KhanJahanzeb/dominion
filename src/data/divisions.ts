import { Stethoscope, Flower2, Dna, Users, Microscope, ScanLine, type LucideIcon } from "lucide-react";
import primaryCareImg from "../assets/primary-care/primary-care-clinic-reception.jpg";
import aestheticsImg from "../assets/aesthetics/aesthetics-reception.jpg";
import hormonesImg from "../assets/hormones/hormones-wellness.webp";
import accessCareImg from "../assets/providers/access-care-membership.jpg";
import researchImg from "../assets/research/research-lab.jpg";
import imagingImg from "../assets/imaging/thyroid-ultrasound.jpg";

/**
 * Single source of truth for every Dominion Health department shown on the
 * landing page. Header, footer, and the departments grid all read from
 * this file and resolve links through `resolveDivisionLink` (see
 * src/lib) — no component should ever hardcode a department's URL.
 *
 * Hormones & Wellness has no dedicated page on dominionfhc.com today, so
 * per the client brief it links to the main site instead of an invented
 * URL. To connect it once a destination exists, update `url` here —
 * nothing else changes.
 */

export interface Division {
  id: string;
  /** Full branded name, e.g. "Dominion Health Primary Care" */
  name: string;
  /** Department name only, e.g. "Primary Care Clinic" */
  shortName: string;
  description: string;
  image: string;
  icon: LucideIcon;
  url: string;
  external: boolean;
  status: "active" | "comingSoon";
  /** Master kill-switch — false removes the department from the page entirely */
  enabled: boolean;
  comingSoon: boolean;
  cta: string;
}

export const divisions: Division[] = [
  {
    id: "primary-care",
    name: "Dominion Health Primary Care Clinic",
    shortName: "Primary Care Clinic",
    description: "Comprehensive primary care for you and your family.",
    image: primaryCareImg,
    icon: Stethoscope,
    url: "https://dominionfhc.com/",
    external: true,
    status: "active",
    enabled: true,
    comingSoon: false,
    cta: "Explore Primary Care",
  },
  {
    id: "aesthetics-wellness",
    name: "Dominion Health Aesthetics and Wellness",
    shortName: "Aesthetics and Wellness",
    description: "Enhance your natural beauty and well-being.",
    image: aestheticsImg,
    icon: Flower2,
    url: "https://dominionaw.com/",
    external: true,
    status: "active",
    enabled: true,
    comingSoon: false,
    cta: "Explore Aesthetics and Wellness",
  },
  {
    id: "hormones-wellness",
    name: "Dominion Health Hormones and Wellness",
    shortName: "Hormones and Wellness",
    description: "Optimize your hormones and feel your best.",
    image: hormonesImg,
    icon: Dna,
    url: "https://dominionfhc.com/",
    external: true,
    status: "active",
    enabled: true,
    comingSoon: false,
    cta: "Explore Hormones and Wellness",
  },
  {
    id: "access-care",
    name: "Dominion Health Access Care",
    shortName: "Access Care",
    description: "Exclusive membership program designed for you.",
    image: accessCareImg,
    icon: Users,
    url: "https://dominionfhc.com/index.php/dominion-care-access-program/",
    external: true,
    status: "active",
    enabled: true,
    comingSoon: false,
    cta: "Explore Access Care",
  },
  {
    id: "research",
    name: "Dominion Health Research",
    shortName: "Research",
    description: "Advancing medical knowledge for a healthier tomorrow.",
    image: researchImg,
    icon: Microscope,
    url: "https://dominionfhc.com/index.php/health-research/",
    external: true,
    status: "active",
    enabled: true,
    comingSoon: false,
    cta: "Explore Research",
  },
  {
    id: "imaging",
    name: "Dominion Health Imaging",
    shortName: "Imaging",
    description: "Advanced imaging for accurate diagnosis and care.",
    image: imagingImg,
    icon: ScanLine,
    url: "https://dominionfhc.com/index.php/health-imaging/",
    external: true,
    status: "active",
    enabled: true,
    comingSoon: false,
    cta: "Explore Imaging",
  },
];

export const enabledDivisions = divisions.filter((d) => d.enabled);
