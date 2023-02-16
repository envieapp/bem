import { build } from '../build';
import { DEFAULT_OPTIONS } from '../default-options';
import { Modificators, Options } from '../types';

export const block = (
  blockName: string,
  blockModificators: Modificators = [],
  options: Partial<Options> = DEFAULT_OPTIONS,
) => {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  const builder = (element?: string, elementModificators: Modificators = []) => {
    if (element) {
      return build(
        options.namespace + blockName + options.elementDelimiter + element,
        elementModificators,
        opts,
      );
    }
    return build(options.namespace + blockName, blockModificators, opts);
  };

  return builder;
};
