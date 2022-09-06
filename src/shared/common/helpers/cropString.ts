export function cropString(text: string, step: number) {
  const head = text.substring(0, step);
  const tail = text.substring(text.length - step, text.length);
  return `${head}...${tail}`;
}
