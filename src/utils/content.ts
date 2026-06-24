export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export function byNewest<T extends { data: { pubDate: Date } }>(a: T, b: T) {
  return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
}

export function isPublished<T extends { data: { draft?: boolean } }>(entry: T) {
  return import.meta.env.PROD ? entry.data.draft !== true : true;
}
