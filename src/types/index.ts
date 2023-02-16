export type ModificatorValue = string | number | boolean | null | undefined;

export type ModificatorName = string | number;

export type ModificatorsObject = Record<ModificatorName, ModificatorValue>;

export type Modificators = (ModificatorName | ModificatorsObject)[] | ModificatorsObject;

export type Options = {
  namespace: string,
  elementDelimiter: string,
  modificatorDelimiter: string,
  valueDelimiter: string
};
