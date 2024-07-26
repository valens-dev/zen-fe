export interface IGroupedAttribute {
  name: string;
  options: string[];
}

export function groupAttributes(
  attributes: { name: string; option: string }[],
): IGroupedAttribute[] {
  const grouped: Record<string, Set<string>> = {};

  for (const { name, option } of attributes) {
    const normalizedName = name.toLowerCase();
    if (!grouped[normalizedName]) {
      grouped[normalizedName] = new Set();
    }
    grouped[normalizedName].add(option);
  }

  return Object.keys(grouped).map((name) => {
    return {
      name,
      options: [...grouped[name]],
    };
  });
}
