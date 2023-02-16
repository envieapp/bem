import { block } from '../block';
import { Modificators, Options } from '../types';

export const setup = (options: Partial<Options>) => {
  return (
    blockName: string,
    blockModificators: Modificators = [],
  ) => { return block(blockName, blockModificators, options); };
};
