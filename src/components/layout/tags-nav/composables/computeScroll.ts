function computeScroll(tagWrap: HTMLElement): number {
  const offsetWidth = (tagWrap as HTMLElement)?.offsetWidth || 0;
  const scrollWidth = (tagWrap as HTMLElement)?.scrollWidth || 0;
  return scrollWidth - offsetWidth;
}
export default computeScroll;
