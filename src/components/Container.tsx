import type { ElementType, ReactNode } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
  wide?: boolean;
  as?: ElementType;
  className?: string;
}

export default function Container({ children, wide, as: Tag = "div", className }: ContainerProps) {
  const classes = [styles.container, wide ? styles.wide : "", className ?? ""].filter(Boolean).join(" ");
  return <Tag className={classes}>{children}</Tag>;
}
