export type PageMetadata = {
  title: string;
  description: string;
  canonical: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  type?: string;
};

type MetaSnapshot = {
  element: HTMLMetaElement | HTMLLinkElement;
  attribute: string;
  value: string | null;
  created: boolean;
};

/** Set route metadata in the live document and restore it on client navigation. */
export function applyPageMetadata(metadata: PageMetadata): () => void {
  const previousTitle = document.title;
  const snapshots: MetaSnapshot[] = [];

  const setMeta = (key: string, value: string, attribute: "name" | "property") => {
    let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
    const created = !element;
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attribute, key);
      document.head.appendChild(element);
    }
    snapshots.push({ element, attribute: "content", value: element.getAttribute("content"), created });
    element.setAttribute("content", value);
  };

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  const canonicalCreated = !canonical;
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  snapshots.push({ element: canonical, attribute: "href", value: canonical.getAttribute("href"), created: canonicalCreated });
  canonical.href = metadata.canonical;
  document.title = metadata.title;

  setMeta("description", metadata.description, "name");
  setMeta("og:title", metadata.title, "property");
  setMeta("og:description", metadata.description, "property");
  setMeta("og:url", metadata.canonical, "property");
  setMeta("og:type", metadata.type ?? "website", "property");
  setMeta("og:site_name", "Melmaa Tech", "property");
  setMeta("og:image", metadata.image ?? "https://www.melmaa.tech/assets/live-og.png", "property");
  setMeta("og:image:width", String(metadata.imageWidth ?? 1200), "property");
  setMeta("og:image:height", String(metadata.imageHeight ?? 630), "property");
  setMeta("twitter:card", "summary_large_image", "name");
  setMeta("twitter:title", metadata.title, "name");
  setMeta("twitter:description", metadata.description, "name");
  setMeta("twitter:image", metadata.image ?? "https://www.melmaa.tech/assets/live-og.png", "name");

  return () => {
    document.title = previousTitle;
    for (const snapshot of snapshots.reverse()) {
      if (snapshot.created) {
        snapshot.element.remove();
      } else if (snapshot.value === null) {
        snapshot.element.removeAttribute(snapshot.attribute);
      } else {
        snapshot.element.setAttribute(snapshot.attribute, snapshot.value);
      }
    }
  };
}

/** Keep route JSON-LD available for client navigation without emitting duplicate scripts. */
export function applyStructuredData(id: string, data: Record<string, unknown>): () => void {
  let script = document.head.querySelector<HTMLScriptElement>(`script#${id}`);
  if (!script) {
    script = document.createElement("script");
    script.id = id;
  }
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  if (!script.isConnected) document.head.appendChild(script);
  return () => script.remove();
}
