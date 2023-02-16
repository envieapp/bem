import { DEFAULT_OPTIONS } from '../default-options';
import { Modificators, ModificatorsObject, Options } from '../types';

export const build = (
  base: string,
  modificators: Modificators,
  options: Omit<Options, 'namespace' | 'elementDelimiter'> = DEFAULT_OPTIONS,
): string[] => {
  const cached = new Set<string>();

  cached.add(base);

  const buildObject = (obj: ModificatorsObject) => {
    Object.entries(obj).forEach(([name, value]) => {
      if (value === null || value === undefined) return;
      const valueType = typeof value;

      if (valueType === 'boolean') {
        if (value) {
          return cached.add(`${base}${options.modificatorDelimiter}${name}`);
        }
        return;
      }
      cached.add(`${base}${options.modificatorDelimiter}${name}${options.valueDelimiter}${value}`);
    });
  };

  if (Array.isArray(modificators)) {
    modificators.forEach((modificator) => {
      if (typeof modificator === 'object') {
        buildObject(modificator);
      } else {
        cached.add(`${base}${options.modificatorDelimiter}${modificator}`);
      }
    });
  } else {
    buildObject(modificators);
  }

  return Array.from(cached);
};
