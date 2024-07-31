export interface IGroupedAttribute {
  name: string;
  options: string[];
}

export interface IGroupedAttributesResult {
  attributeNames: string[];
  attributeOptions: Record<string, string[]>;
}
