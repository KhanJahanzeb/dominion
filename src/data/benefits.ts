import { ShieldCheck, UserRound, Atom, Heart, Calendar, type LucideIcon } from "lucide-react";

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const benefits: Benefit[] = [
  {
    title: "Patient-Centered Care",
    description: "You come first, always.",
    icon: ShieldCheck,
  },
  {
    title: "Expert Providers",
    description: "Experienced and compassionate.",
    icon: UserRound,
  },
  {
    title: "Advanced Technology",
    description: "Modern tools for better outcomes.",
    icon: Atom,
  },
  {
    title: "Comprehensive Care",
    description: "All your health needs in one place.",
    icon: Heart,
  },
  {
    title: "Easy Access",
    description: "Convenient. Connected. For You.",
    icon: Calendar,
  },
];
