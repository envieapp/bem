import { build } from '.';
import { DEFAULT_OPTIONS } from '../default-options';

const {
  modificatorDelimiter: m,
  valueDelimiter: v,
} = DEFAULT_OPTIONS;

describe('build testing', () => {
  test('custom settings', () => {
    const result = build(
      'base',
      [
        'modificator',
        { string: 'value' },
      ],
      {
        valueDelimiter: '++',
        modificatorDelimiter: '123',
      },
    );

    expect(result.length).toBe(3);
    expect(result).toContain('base');
    expect(result).toContain('base123modificator');
    expect(result).toContain('base123string++value');
  });

  test('modificator object', () => {
    const result = build('base', {
      truthy: true,
      falsy: false,
      1: 2,
      null: null,
      undefined,
      string: 'hehe',
    });

    expect(result.length).toBe(4);
    expect(result).toContain('base');
    expect(result).toContain(`base${m}string${v}hehe`);
    expect(result).toContain(`base${m}truthy`);
    expect(result).toContain(`base${m}1${v}2`);
  });

  test('modificator object array', () => {
    const result = build('base', [
      {
        truthy: true,
        1: 2,
        null: null,
      }, {
        falsy: false,
        undefined,
        string: 'hehe',
      },
    ]);

    expect(result.length).toBe(4);
    expect(result).toContain('base');
    expect(result).toContain(`base${m}string${v}hehe`);
    expect(result).toContain(`base${m}truthy`);
    expect(result).toContain(`base${m}1${v}2`);
  });

  test('string array', () => {
    const result = build('base', ['some', 'modificator']);

    expect(result.length).toBe(3);
    expect(result).toContain('base');
    expect(result).toContain(`base${m}some`);
    expect(result).toContain(`base${m}modificator`);
  });

  test('number array', () => {
    const result = build('base', [1, 2]);

    expect(result.length).toBe(3);
    expect(result).toContain('base');
    expect(result).toContain(`base${m}1`);
    expect(result).toContain(`base${m}2`);
  });

  test('combined array', () => {
    const result = build('base', [
      'modificator',
      1,
      {
        truthy: true,
        2: 3,
        null: null,
        undefined,
        string: 'hehe',
      },
    ]);

    expect(result.length).toBe(6);
    expect(result).toContain('base');
    expect(result).toContain(`base${m}modificator`);
    expect(result).toContain(`base${m}1`);
    expect(result).toContain(`base${m}truthy`);
    expect(result).toContain(`base${m}2${v}3`);
    expect(result).toContain(`base${m}string${v}hehe`);
  });
});
