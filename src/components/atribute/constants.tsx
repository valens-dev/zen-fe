export interface IAttribute {
  name: string;
  option: string;
}

export type IAttributeOptions = Record<string, string[]>;

export const ATTRIBUTE_NAMES = ['Farbe', 'Material', 'Größe'];

export const ATTRIBUTE_OPTIONS: Record<string, string[]> = {
  Farbe: ['Rot', 'Blau', 'Grün'],
  Material: ['Holz', 'Metall', 'Kunststoff'],
};

export function handleAddNewOption(name: string, option: string): void {
  ATTRIBUTE_OPTIONS[name] = [...(ATTRIBUTE_OPTIONS[name] || []), option];
}
