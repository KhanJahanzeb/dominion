import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
}

const SITE_NAME = "Dominion Health";
const SITE_ORIGIN = "https://dominion.health";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Minimal, dependency-free SEO. Sets title, meta description, canonical
 * URL, and Open Graph tags directly on document.head for this single page.
 */
export default function Seo({ title, description, path, image }: SeoProps) {
  useEffect(() => {
    const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    setMeta("name", "description", description);
    setCanonical(`${SITE_ORIGIN}${path}`);

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", `${SITE_ORIGIN}${path}`);
    setMeta("property", "og:site_name", SITE_NAME);
    if (image) setMeta("property", "og:image", image);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
  }, [title, description, path, image]);

  return null;
}
