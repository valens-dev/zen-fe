import { type IGroupedAttributesResult } from './types';

export function groupAttributes(
  attributes: { name: string; option: string }[],
): IGroupedAttributesResult {
  const grouped: Record<string, Set<string>> = {};

  for (const { name, option } of attributes) {
    const normalizedName = name.toLowerCase();
    if (!grouped[normalizedName]) {
      grouped[normalizedName] = new Set();
    }
    grouped[normalizedName].add(option);
  }

  const attributeNames = Object.keys(grouped);
  const attributeOptions = attributeNames?.reduce(
    (acc, name) => {
      acc[name] = [...grouped[name]];
      return acc;
    },
    {} as Record<string, string[]>,
  );

  return {
    attributeNames,
    attributeOptions,
  };
}
