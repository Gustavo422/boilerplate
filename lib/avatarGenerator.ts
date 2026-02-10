export function avatarGenerator(names: string) {
  const letters = names
    .split(" ")
    .map((name) => name[0])
    .slice(0, 2)
    .join("");
  return letters;
}
